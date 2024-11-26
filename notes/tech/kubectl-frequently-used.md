# Frequently used kubectl commands

Get list of all pods in the default namespac
```
kubectl get pods
```

Apply a config file
```
kubectl apply -f <path-to-yaml-file>
```

Rollout restart of an entire deployment
```
kubectl rollout restart deployment/foo
```