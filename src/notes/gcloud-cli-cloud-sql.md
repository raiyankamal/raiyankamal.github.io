---
title: Managing Cloud SQL with gcloud
tags:
    - gcloud
    - cloud sql
    - gcp
layout: note.njk
---

# Managing Cloud SQL with gcloud

**Make sure the correct project is selected before running these commands**

To list databses in an instance.

```
$ gcloud sql databases list --instance=<db-instance-name>
```

To list all backups

```
$ gcloud sql backups list --instance=<db-instance-name>
```

To change the password of a user

```
$ gcloud sql users set-password <username> --password=<foopass> --instance=<db-instance-name>
```