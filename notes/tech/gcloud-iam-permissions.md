To check the permissions granted to a service account.
```
gcloud projects get-iam-policy <foo-project> --flatten="bindings[].members" --format='table(bindings.role)' --filter="bindings.members:stg-db-snapshot@akindi.iam.gserviceaccount.com"
 ```