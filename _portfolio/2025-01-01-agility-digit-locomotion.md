---
title: "Bipedal Locomotion - Agility Robotics Digit"
collection: portfolio
permalink: /portfolio/agility-digit-locomotion/
excerpt: "Stability-aware navigation for bipedal robots on rough terrain using learned traversability estimation, global planning, and local MPC control."
date: 2025-01-01
---

<video class="project-media" autoplay loop muted playsinline controls>
  <source src="{{ '/images/state_nav_final.mp4' | relative_url }}" type="video/mp4">
</video>

I've been working with a stability aware navigation framework for bipedal robots on rough terrain. It uses learning-based traversability estimation to predict how unstable Agility Robotics Digit may become when walking over uneven or cluttered terrain. Based on this prediction, the robot can choose safer and more efficient paths by slowing down or avoiding unstable regions.

The framework combines a learned traversability model with **global RRT\* path planning** and **local MPC control**, and it was validated in both **MuJoCo simulation** and real-world experiments on Digit.

I've focused on developing MuJoCo testing environments with uneven and cluttered terrain to evaluate bipedal locomotion stability. I also enhanced obstacle perception modules to convert depth data into traversability constraints for learning-based estimation and planning. In addition, I helped deploy the system on the Digit robot, test the **sim-to-real gap**, debug system integration, sensor fusion, and state estimation issues, and validate performance through real-world data collection.

**Related study note:** [Hardware Experiment Tips]({{ '/blog/study/hardware-experiment-tips/' | relative_url }})

<br>

**Tools and topics:** Python, C++, MPC, RRT*, MuJoCo, depth perception, path planning, motion planning, sim-to-real testing.
