# Managing Cloud SQL with gcloud


**Make sure the correct project is selected before running these commands**

To list all backups

```
$ gcloud sql backups list --instance=<db-instance-name>
```

To change the password of a user

```
$ gcloud sql users set-password <username> --password=<foopass> --instance=<db-instance-name>
```