---
title: Inspecting Celery
tags:
    - celery
    - python
    - cli
layout: note.njk
---

# Inspecting Celery

Celery provides a command line interface to inspect and monitor workers.

## Active jobs
Workers are currently handling these jobs.
```
celery -A <project-name> inspect active
```

Output looks like:
```
-> celery@myproject: OK
    - empty -
-> celery@myproject: OK
    - task1[8f3a2d9e-3d24-4a87-9c1b-22db58c76cde]:
        * {...}
-> celery@myproject: OK
    - empty -
```

## Reserved jobs
Workers have claimed these jobs, but not working on these yet.
```
celery -A <project-name> inspect reserved
```
Output looks similar to the `active` command's.

## Stats
System level statistics of each job.
```
celery -A <project-name> inspect stats
```
Output is one large JSON object, each key representing a worker. Extracting information, specially aggregated values from the verbose output can be daunting. Use [celerysee](https://github.com/raiyankamal/celerysee) or a similar tool for convenience.
