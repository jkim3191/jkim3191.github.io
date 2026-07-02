---
layout: single
title: "Hardware Experiment Tips"
date: 2025-03-07
categories:
  - blog
  - study
tags:
  - ROS
  - rosbag
  - RViz
  - MuJoCo
  - SLAM
  - robotics
author_profile: true
excerpt: "Practical debugging notes for ROS-based hardware experiments, rosbag replay, simulation time, sensor fusion, and state estimation."
back_link: /blog/
back_label: Back to List
---

<div style="height: 1.5rem;"></div>

<p style="color: #c86b2d; font-style: italic;">Here I leave some notes that I've encountered during my hardware experiments, which may be useful for debugging ROS-based systems.</p>

- Let's use **rosbag recording** to replay sensor and topic data for offline debugging in RViz and MuJoCo.
- Manage `use_sim_time` settings depending on the experiment setup:
  - Enable `use_sim_time` for simulation replay using `/clock`.
  - Disable `use_sim_time` for hardware experiments, where nodes should follow the computer's real-time clock.
- Let's organize ROS parameters using **YAML configuration files** to reduce setup mistakes and make it easier to switch between simulation and hardware settings.
- Use `rqt_plot` with recorded rosbag data to inspect whether commands such as `cmd_vel` and angular velocity are being published correctly.
- Let's debug system behavior by checking components from smaller modules to larger integrated controllers.
- Republish missing or incorrect ROS data, including timestamps, transforms, frame IDs, and twist messages, to make the SLAM and state estimation pipeline work properly.
- Compute and re-publish robot velocity information when the provided interface does not directly include twist data.
- Stereo SLAM / VIO issues can be caused by camera vibration, motion blur, noisy IMU measurements, and unstable visual odometry.
- Gap between camera pose estimation and the actual robot body pose, requires proper TF calibration between the camera frame and robot body frame.
- Use joint encoder information and robot kinematics to estimate the transform between the robot body and the camera.
- Sensor fusion involving ZED camera and RealSense depth camera data.
