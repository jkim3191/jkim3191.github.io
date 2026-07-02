---
layout: single
title: "PPO: Rough Terrain Policy Breaks"
date: 2026-05-05
categories:
  - blog
  - study
tags:
  - PPO
  - reinforcement learning
  - actor-critic
  - Isaac Lab
  - robotics
author_profile: true
excerpt: "A study note from debugging a PPO training failure in Isaac Lab, where difficult terrain and unstable updates caused the policy distribution to break."
back_link: /blog/
back_label: Back to List
---

<div style="height: 1.5rem;"></div>


I started looking into PPO more carefully after I ran into a training failure during rough-terrain locomotion experiments in Isaac Lab.

The error looked like this:

```text
RuntimeError: normal expects all elements of std >= 0.0
```

The actor was sampling actions from a Normal distribution, and PyTorch was complaining that the standard deviation was invalid.

> Why did the policy become unstable enough to produce an invalid action distribution?

## The Failure

In PPO, the actor usually represents a stochastic policy:

$$
a_t \sim \pi_\theta(a_t \mid s_t)
$$

For continuous control:

$$
\pi_\theta(a_t \mid s_t) = \mathcal{N}(\mu_\theta(s_t), \sigma_\theta)
$$

The actor predicts the action mean, and the policy also keeps a standard deviation for exploration. During training, PPO samples the action from that distribution.

In other words, the policy distribution itself became invalid. In practice, it can happen when the update is too aggressive, the network parameters become unstable, or some values inside the policy become NaN.

In my case, I think the main issue was connected to **learning rate and terrain difficulty**.

The terrain was hard enough that the robot had unstable contacts, hard recoveries, and frequent falls. The rollout data became noisy, and with a learning rate that was too high for that level of terrain difficulty, PPO could push the policy too far in one update.


## The Actor And Critic

I wanted to first separate the actor and critic.

- The **actor** decides what action the robot should take.
- The **critic** estimates how good the current state is.

The actor is the control policy. For a robot, it produces joint targets, torques, or other command-level actions.

The critic does not directly control the robot. It predicts the expected future return from the current state:

$$
V_{pred} = V_\phi(s_t)
$$

where:

- `s_t` is the current observation
- `V_phi` is the critic neural network
- `phi` represents the critic parameters
- `V_pred` is the critic's predicted value


The critic takes the observation and produces one scalar number:

```text
observation_t
    ↓
critic network
    ↓
scalar number
```



I think of that scalar as the critic's guess for how promising the current state is.

## Critic Network

For example, suppose the critic has three hidden layers:

```text
hidden dimensions = [512, 256, 128]
activation = ELU
```

Then the forward pass can be written like this:

$$
h_1 = \mathrm{ELU}(W_1 s_t + b_1)
$$

$$
h_2 = \mathrm{ELU}(W_2 h_1 + b_2)
$$

$$
h_3 = \mathrm{ELU}(W_3 h_2 + b_3)
$$

$$
V_{pred} = W_4 h_3 + b_4
$$

The last layer has **one output neuron**, so the critic compresses the whole observation into one value estimate.

## Why The Critic Matters

PPO computes a target value:

$$
V_{target}
$$

Then the critic is trained with a value loss:

$$
L_{value} = (V_{pred} - V_{target})^2
$$

If:

```text
V_pred   = 137
V_target = 120
```

then:

$$
L_{value} = (137 - 120)^2 = 289
$$

The critic is basically being told that it overestimated the value of that state.

When terrain is too difficult too early, the critic can also struggle. If the robot keeps falling or going through unstable transitions, the target values become noisy. Then the advantages also become noisy, and those noisy advantages can push the actor in unstable directions.

So even though the invalid standard deviation error appears at the action-sampling line, the actual problem can come from the whole PPO loop:

```text
difficult terrain
    ↓
unstable rollouts
    ↓
noisy rewards and value targets
    ↓
noisy advantages
    ↓
large actor update
    ↓
unstable policy distribution
    ↓
invalid std / NaN / broken sampling
```

## My Thought: Add Guardrails to PPO

The direct engineering fix is to reduce the learning rate. But I also started thinking about what kind of guardrails could make PPO less likely to break when the terrain gets harder.

One simple idea is to parameterize the standard deviation in log-space:

$$
\sigma_\theta = \exp(\log \sigma_\theta)
$$

Writing it this way keeps the standard deviation positive. In practice, I would also clamp the log standard deviation:

$$
\log \sigma_\theta \leftarrow \mathrm{clip}(\log \sigma_\theta, \log \sigma_{min}, \log \sigma_{max})
$$

The clamp prevents exploration from collapsing to almost zero or exploding into unstable actions. For this specific error, it is the most direct protection because the crash happened when the Normal distribution received an invalid standard deviation.

Another idea is to watch how much the policy changes during each update. PPO already uses the clipped objective:

$$
L^{clip}(\theta) =
\mathbb{E}
\left[
\min
\left(
r_t(\theta) A_t,
\mathrm{clip}(r_t(\theta), 1-\epsilon, 1+\epsilon) A_t
\right)
\right]
$$

where:

$$
r_t(\theta)=
\frac{\pi_\theta(a_t \mid s_t)}
{\pi_{\theta_{old}}(a_t \mid s_t)}
$$

But for rough terrain, I think monitoring the KL divergence would also be useful:

$$
D_{KL}
(\pi_{\theta_{old}} \| \pi_\theta)
$$

If the KL divergence becomes too large, the update is probably changing the policy too aggressively. Then the learning rate can be reduced automatically:

$$
\alpha \leftarrow \beta \alpha
$$

where `beta` is between 0 and 1. The optimizer becomes more cautious when the terrain produces unstable or high-variance rollouts.

I would also normalize the advantage:

$$
\hat{A}_t =
\frac{A_t - \mu_A}{\sigma_A + \epsilon}
$$

Advantage normalization does not solve everything, but it prevents unusually large advantage values from dominating the actor update. On rough terrain, where one fall can create a long bad sequence, this becomes especially important.

Finally, terrain difficulty itself can be treated as part of the learning schedule. If `d` represents terrain difficulty, I can think of the PPO objective as being weighted by difficulty:

$$
L(\theta, d)
=
w(d)L^{clip}(\theta)
- c_v L^{value}
+ c_e H(\pi_\theta)
$$

where `H(pi_theta)` is the entropy bonus. Early in training, `w(d)` should not allow extremely difficult terrain to dominate the update. As the robot becomes more stable, the curriculum can increase `d`, and the policy can learn from harder terrain without collapsing.
