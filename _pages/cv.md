---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
---

<p>
  <a class="btn btn--cv-pdf" href="{{ '/CV/CV_JaeHyeonKim.pdf' | relative_url }}" target="_blank" rel="noopener">Open CV PDF</a>
</p>

<iframe
  class="cv-pdf-preview"
  src="{{ '/CV/CV_JaeHyeonKim.pdf' | relative_url }}"
  width="100%"
  title="Jae Hyeon Kim CV">
</iframe>

<style>
  .cv-pdf-preview {
    width: 100%;
    height: 1800px;
    border: 1px solid #d7dde1;
    border-radius: 4px;
  }

  @media (max-width: 600px) {
    .cv-pdf-preview {
      height: 2200px;
    }
  }
</style>
