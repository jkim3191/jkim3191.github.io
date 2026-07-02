---
layout: archive
title: "Notes"
permalink: /blog/
author_profile: true
---

{% include base_path %}

{% if site.posts and site.posts.size > 0 %}
  {% for post in site.posts %}
    {% include archive-single.html show_teaser=false %}
  {% endfor %}
{% else %}
  <p>No notes yet. Check back soon.</p>
{% endif %}
