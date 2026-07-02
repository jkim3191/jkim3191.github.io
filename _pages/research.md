---
layout: single
title: "Research"
permalink: /research/
author_profile: true
---

My research interests center on how legged robots can move through difficult environments while staying physically feasible, responsive, and robust.

## Research Questions

**How should a robot decide where it can move?**  
I am interested in traversability estimation, terrain representation, and perception-aware planning for legged systems.

**How can control stay useful outside clean assumptions?**  
I want to understand how model predictive and optimization-based methods can remain practical under contact changes, uncertainty, and imperfect models.

**How do we make simulation work harder before hardware testing?**  
Simulation is most useful to me when it exposes failure modes, not just successful demos. I use simulation workflows to stress-test planning, perception, and locomotion behavior.

## Methods I Use

- Physics-based simulation with MuJoCo, Gazebo, and Isaac Lab
- ROS and ROS2 workflows for robot software integration
- Model predictive control and optimization-based control
- Learning-based components for terrain and locomotion
- Hardware-oriented debugging, validation, and iteration

## Current Direction

I am currently moving toward learning-based bipedal locomotion in Isaac Lab, with emphasis on terrain reasoning and robust planning. The larger goal is to connect perception, control, and navigation into behaviors that remain stable when the environment becomes messy.

## Project Media

<div class="media-strip">
  <figure>
    <video autoplay loop muted playsinline>
      <source src="{{ '/images/digit_project.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption>Digit locomotion and terrain testing</figcaption>
  </figure>
  <figure>
    <video autoplay loop muted playsinline>
      <source src="{{ '/images/go2_project.mp4' | relative_url }}" type="video/mp4">
    </video>
    <figcaption>Unitree Go2 navigation</figcaption>
  </figure>
</div>
