---
layout: single
title: "Brainstorm: Contact Affordance for Humanoid Locomotion"
date: 2026-06-01
categories:
  - blog
  - study
tags:
  - humanoid locomotion
  - contact affordance
  - reinforcement learning
  - perception
  - robotics
author_profile: true
excerpt: "A short research note on using environmental contacts, such as ceilings and walls, to improve humanoid locomotion stability."
back_link: /blog/
back_label: Back to List
hide_teaser: true
---

<div style="height: 1.5rem;"></div>

While I was working on low-level controller development for humanoid locomotion, I brainstormed an extension idea. What if the robot could use the surrounding environment as extra support?

Instead of only asking:

```text
How should the robot walk?
```

I want to also ask:

```text
Where should the robot touch?
```

For example, if a humanoid is walking on difficult terrain, a ceiling, wall, or nearby object might help it stay balanced. The goal is not just to avoid contact with the environment, but to use useful contact when it improves stability.

## Starting From Ceiling Contact

I would start with a simple case: ceiling contact.

This makes the first version easier to study because the possible contact region is more constrained. The robot can first learn when hand-assisted locomotion is helpful before moving to more general contacts such as walls or objects.

<figure>
  <img src="/images/ContactAffordanceNote/tech-roadmap-svg%20(1).svg" alt="System flowchart for contact-affordance humanoid locomotion">
</figure>

## Contact-Conditioned Control

The locomotion policy can be conditioned on a candidate contact point:

$$
\pi(a_t \mid s_t, c_t)
$$

Here, `s_t` is the robot state and observation, and `c_t` is a possible contact location.

This means the policy does not only learn how to move its feet. It also learns how the motion should change when a useful hand contact is available.

## Contact Affordance Model

The next question is how to choose good contact points.

My idea is to sample many candidate contacts and evaluate whether each one improves locomotion stability. From this, I can train a contact affordance model that predicts useful contact regions from depth observations and robot state.

<figure>
  <img src="/images/ContactAffordanceNote/VisualConatctModel.png" alt="Contact affordance neural network model">
  <figcaption>Contact affordance model for predicting useful support regions from perception and robot state.</figcaption>
</figure>

The final pipeline would look like:

```text
depth observation + robot state
    ↓
contact affordance model
    ↓
useful contact candidate
    ↓
contact-conditioned locomotion policy
    ↓
more stable humanoid locomotion
```

## Long-Term Idea

Ceiling contact would only be the starting point. Later, I would like to extend the same idea to:

- side walls
- tables
- nearby objects
- more complex multi-contact motion

**Main idea: A humanoid robot should not only learn how to walk through the world. It should also learn how to use the world for support.**
