---
title: Frequently used docker commands
tags:
    - docker
layout: note.njk
---

# Frequently used docker commands

Build a docker image, assuming the `Dockerfile` is in the current directory.
```
docker build .
```

Build and tag a docker image.
```
docker build -t foo-repo/foo-image .
```

Tag an existing image.
```
docker image tag foo-repo/foo-image bar-repo/bar-image:v1
```

