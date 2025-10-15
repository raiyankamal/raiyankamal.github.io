---
title: Home
layout: home.njk
---

# Raiyan Kamal

### Tech Lead with 15 years of experience.

- I write python code for web services and asynchronous jobs.
- I manage infrastructure on GCP using terraform, gcloud and kubectl.
- I write front end applications using vuejs, vite, webpack and electron.

Find me on: [{% icon "fa-brands fa-github" %}](https://github.com/raiyankamal) [{% icon "fa-brands fa-linkedin" %}](https://www.linkedin.com/in/raiyan-kamal-9877251b/) [{% icon "fa-brands fa-itch-io" %}](https://rknotes.itch.io/)

Recruite me? [resume](/raiyan-kamal-resume)

Work with me? [help needed](/help-needed)

### Stuffs I built

<div class='project-thumbnail-list'>
{% for project in collections.projects | reverse %}
- [![]({{ project.data.thumbnail }})]({{ project.url }})
{% endfor %}
</div>