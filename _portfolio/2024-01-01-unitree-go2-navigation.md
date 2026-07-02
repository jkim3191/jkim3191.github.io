---
title: "Quadruped Navigation With Camera Rig - Unitree Go2"
collection: portfolio
permalink: /portfolio/unitree-go2-navigation/
excerpt: "Goal-based quadruped navigation with controller integration for teleoperation and manual override."
date: 2024-01-01
---

<video class="project-media" autoplay loop muted playsinline controls>
  <source src="{{ '/images/go2_project.mp4' | relative_url }}" type="video/mp4">
</video>

We worked as a team on a **Capstone Design** project focused on **autonomous mapping** using the Unitree Go2 quadruped robot, sponsored by [Aetos Imaging](https://aetosimaging.com/).

Aetos Imaging develops **digital twin solutions** for complex industrial facilities such as power plants and substations. Their platform visualizes facility assets and maintenance information so that workers can inspect and manage the facilities more efficiently. At the time, they wanted to deploy a quadruped robot to map these environments instead of sending people into potentially hazardous areas, and they proposed this project as our Capstone Design.

For the initial setup, I integrated **goal-based navigation** into the Unitree Go2. Since these facilities generally already have maps available, I used the existing map for navigation. I also implemented basic manual control commands such as moving forward, backward, left, and right, mainly for further development and testing along the way.

The ultimate goal of the project was to build a fully autonomous inspection system with digital twin generation. The idea was that the robot would autonomously navigate throughout the facility while collecting data, and the platform would reconstruct and display a complete digital twin of the environment for remote monitoring and maintenance.

However, the project later pivoted from full autonomous navigation to developing a **camera rig for data collection**. Even though we didn't get to complete the original vision, I really enjoyed working on this project.

<div class="project-carousel" data-project-carousel>
  <button class="project-carousel__button project-carousel__button--prev" type="button" aria-label="Previous image" data-carousel-prev>&lsaquo;</button>
  <div class="project-carousel__track" data-carousel-track>
    <figure class="project-carousel__slide">
      <img src="{{ '/images/Pic all together.png' | relative_url }}" alt="Unitree Go2 capstone project team and robot setup">
    </figure>
    <figure class="project-carousel__slide">
      <img src="{{ '/images/Gymbul.png' | relative_url }}" alt="Camera rig setup for Unitree Go2 data collection">
    </figure>
    <figure class="project-carousel__slide">
      <img src="{{ '/images/Gymbul2.png' | relative_url }}" alt="Camera rig mounted for Unitree Go2 data collection">
    </figure>
  </div>
  <button class="project-carousel__button project-carousel__button--next" type="button" aria-label="Next image" data-carousel-next>&rsaquo;</button>
  <div class="project-carousel__dots" aria-hidden="true">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

<style>
  .project-carousel {
    position: relative;
    margin: 1.75rem auto 2.25rem;
    max-width: 980px;
  }

  .project-carousel__track {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: #c75b00 #e6e6e6;
    padding: 0 0 0.45rem;
    -webkit-overflow-scrolling: touch;
  }

  .project-carousel__slide {
    flex: 0 0 100%;
    margin: 0;
    aspect-ratio: 16 / 10;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    border-radius: 6px;
    overflow: hidden;
    scroll-snap-align: center;
  }

  .project-carousel__slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .project-carousel__button {
    position: absolute;
    top: 50%;
    z-index: 2;
    width: 2.15rem;
    height: 2.15rem;
    border: 1px solid rgba(255, 255, 255, 0.72);
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.34);
    color: #fff;
    cursor: pointer;
    font-family: Arial, sans-serif;
    font-size: 1.65rem;
    font-weight: 400;
    line-height: 1.75rem;
    padding: 0 0 0.12rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
    transform: translateY(-50%);
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .project-carousel__button:hover,
  .project-carousel__button:focus {
    background: rgba(0, 0, 0, 0.52);
    transform: translateY(-50%) scale(1.04);
  }

  .project-carousel__button--prev {
    left: -4rem;
  }

  .project-carousel__button--next {
    right: -4rem;
  }

  .project-carousel__dots {
    display: flex;
    justify-content: center;
    gap: 0.4rem;
    margin-top: 0.6rem;
  }

  .project-carousel__dots span {
    width: 0.45rem;
    height: 0.45rem;
    border-radius: 999px;
    background: #b7b7b7;
  }

  @media (max-width: 1100px) {
    .project-carousel__button--prev {
      left: 0.75rem;
    }

    .project-carousel__button--next {
      right: 0.75rem;
    }
  }

  @media (max-width: 640px) {
    .project-carousel__slide {
      aspect-ratio: 4 / 3;
    }

    .project-carousel__button {
      width: 1.9rem;
      height: 1.9rem;
      font-size: 1.45rem;
      line-height: 1.5rem;
    }
  }
</style>

<script>
  document.querySelectorAll("[data-project-carousel]").forEach(function (carousel) {
    var track = carousel.querySelector("[data-carousel-track]");
    var previous = carousel.querySelector("[data-carousel-prev]");
    var next = carousel.querySelector("[data-carousel-next]");

    function scrollBySlide(direction) {
      track.scrollBy({
        left: direction * track.clientWidth,
        behavior: "smooth"
      });
    }

    previous.addEventListener("click", function () {
      scrollBySlide(-1);
    });

    next.addEventListener("click", function () {
      scrollBySlide(1);
    });
  });
</script>

<br>

**Tools and topics:** ROS, Python, navigation, Unitree Go2, CAD, Fabrication.
