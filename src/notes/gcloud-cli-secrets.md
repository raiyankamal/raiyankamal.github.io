---
title: Managing Secrets with gcloud
tags:
    - gcloud
    - secrets
    - gcp
layout: note.njk
---

# Managing Secrets with gcloud

**Make sure the correct project is selected before running these commands**

To list secrets:

```
$ gcloud secrets list
```

To create a new secret with a single value:

```
$ printf "secret-foo" | gcloud secrets create <name-of-secret> --data-file=-
```

To create a new secret with values from a file:
```
$ gcloud secrets create <name-of-secret> --data-file=/path/to/secret/file
```

Changing value(s) of a secret is done by adding a new version.
To add a new version to an existing secret with single value:

```
$ printf "secret-foo" | gcloud secrets versions add <name-of-secret> --data-file=-
```

To add a new version to an existing secret from file:
```
$ gcloud secrets versions add <name-of-secret> --data-file=/path/to/secret/file
```
