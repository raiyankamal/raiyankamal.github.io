# Managing Cloud Storage with gcloud


**Make sure the correct project is selected before running these commands**

To view the CORS policy of a bucket.

```
$ gcloud storage buckets describe gs://foo-bucket
```

To udpate the CORS policy of a bucket.

```
$ gcloud storage buckets update gs://foo-bucket --cors-file=bar.yaml
```


