---
title: "Language-Driven 3D Scene Generation"
collection: portfolio
permalink: /portfolio/language-driven-3d-scene-generation/
excerpt: "Automatic indoor 3D scene generation for semantic navigation using an LLM/VLM pipeline, Blender, and large-scale asset retrieval."
date: 2024-06-01
---

<div class="scene-builder-top">
  <figure>
    <img src="{{ '/images/SceneBuilder/bar.png' | relative_url }}" alt="Generated bar scene layout in Blender">
  </figure>
  <figure>
    <img src="{{ '/images/SceneBuilder/ClassRomom.png' | relative_url }}" alt="Generated classroom scene for semantic navigation">
  </figure>
</div>

This project was about **automatic scene-building** for autonomous navigation. Since data is becoming more important for learning-based robotics, we wanted to create indoor 3D scenes that could be used for training and testing semantic navigation.

There are already scene-generation and simulation platforms such as ProcTHOR, AI2-THOR, RoboTHOR, Habitat, iGibson, and Gibson. But we wanted to build a pipeline that could generate more diverse indoor scenes from **natural-language descriptions**. The idea was that, instead of manually creating every environment, we could describe the scene in text and let the system generate a simulation-ready 3D environment.

For this project, I worked on a **multi-agent LLM pipeline** with visual feedback loops. The system used Pydantic AI to structure the scene information, Blender to generate the 3D environment, and a semantic search system to retrieve proper 3D assets. I also implemented asset search using **CLIP and SBERT embeddings** over more than 18,000 assets with PostgreSQL vector operations.

We also used **a vision-language model**, Gemini 2.5 Pro, to evaluate the rendered scene. After the scene was generated, the VLM checked whether the object placement made sense, whether the scene followed the original prompt, and whether the layout was physically and spatially reasonable. Based on this feedback, the pipeline could refine the scene and improve the final result.

As an extension of this project, these generated indoor environments could be used to train and test mobile robots for semantic navigation. The robot could learn to navigate through diverse indoor layouts while understanding objects and room-level context, without needing manually created scenes every time.

<div class="scene-builder-gifs">
  <figure class="scene-builder-gif">
    <img src="{{ '/images/SceneBuilder/partial_room_completion_classroom_1.gif' | relative_url }}" alt="Classroom scene generation progress example 1">
  </figure>
  <figure class="scene-builder-gif">
    <img src="{{ '/images/SceneBuilder/partial_room_completion_classroom_3.gif' | relative_url }}" alt="Classroom scene generation progress example 2">
  </figure>
  <figure class="scene-builder-gif">
    <img src="{{ '/images/SceneBuilder/partial_room_completion_classroom_4.gif' | relative_url }}" alt="Classroom scene generation progress example 3">
  </figure>
</div>

<style>
  .scene-builder-top {
    display: grid;
    gap: 0.85rem;
    margin: 0 auto 1.5rem;
    max-width: 920px;
  }

  .scene-builder-top figure,
  .scene-builder-gifs figure {
    margin: 0;
  }

  .scene-builder-top img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    border-radius: 6px;
    background: #f5f5f5;
  }

  .scene-builder-gifs {
    display: grid;
    gap: 0.75rem;
    margin: 1.75rem 0 2rem;
  }

  .scene-builder-gif {
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 6px;
    background: #3b3b3b;
  }

  .scene-builder-gif img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transform: scale(1.58);
    transform-origin: center center;
  }

  @media (min-width: 720px) {
    .scene-builder-top {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      align-items: start;
    }

    .scene-builder-gifs {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }
</style>

<br>

**Tools and topics:** Python, Pydantic AI, Blender, PostgreSQL, CLIP, SBERT, LLM/VLM pipeline, synthetic indoor scene generation.
