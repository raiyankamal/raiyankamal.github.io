# Making a log based alert in GCP

Use a log based alert in GCP if you need to monitor presence or absence of certain patterns in the logs.

1. Open GCP console.
2. Go to Logs Explorer (using the search bar at the top can be faster).
3. Open saved queries and select the the one you want to make an alert for.
4. Open the "Actions" dropdown menu and select "Create Log Alert"
5. Customize documentation, extracted labels etc.


### Documentation

The documentation field accepts a template that can be rendered into valuable information for sending as a message, e.g. to slack.

For example:

````
${log.extracted_label.http_method} ${log.extracted_label.url}

Json Payload
```
${log.extracted_label.json_payload}
```

Text Payload
```
${log.extracted_label.text_payload}
```
````