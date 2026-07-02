---
title: "Learning-Based Humanoid Navigation - Unitree G1"
collection: portfolio
permalink: /portfolio/unitree-g1-isaac-lab/
excerpt: "End-to-end humanoid navigation on rough terrain with learned locomotion control and perception-aware planning."
date: 2026-01-01
---

<video class="project-media" autoplay loop muted playsinline controls>
  <source src="{{ '/images/isaac_g1_project.mp4' | relative_url }}" type="video/mp4">
</video>

Developing a **learning-based low-level controller** for the **Unitree G1** in Isaac Lab to execute commands from a high-level planner during **rough-terrain navigation**. The main goal is to enable the robot to maintain stable bipedal locomotion while responding to planner commands, reasoning about terrain difficulty, and handling obstacles that interfere with its path.

I've been working toward an **end-to-end pipeline** for humanoid robot navigation on rough terrain, integrating learned locomotion control for **perception-aware planning** in complex environments.

**Related study notes:**

- [PPO: Rough Terrain Policy Breaks]({{ '/blog/study/studying-ppo-critic-value-function/' | relative_url }})
- [Brainstorm: Contact Affordance for Humanoid Locomotion]({{ '/blog/study/contact-affordance-humanoid-locomotion/' | relative_url }})

<br>

**Tools and topics:** Isaac Lab, PPO, reinforcement learning, PyTorch, Unitree G1.
