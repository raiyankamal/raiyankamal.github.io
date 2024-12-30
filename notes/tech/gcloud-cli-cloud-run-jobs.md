# Managing Cloud Run Jobs with Gcloud CLI

Export an existing job in yaml format.
```
gcloud run jobs describe <job-name> --format export > job.yaml
```

Export a job from a local yaml file.
```
gcloud run jobs replace job.yaml
```

Execute a job
```
gcloud run jobs execute <job-name>
```