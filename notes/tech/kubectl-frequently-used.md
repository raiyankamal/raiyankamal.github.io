# Frequently used kubectl commands

## Pods

Get list of all pods in the default namespace
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

## Namespaces

Get a list of namespaces
```
kubectl get ns
```

## Misc.

See all resources in default namespace
```
kubect get all
```

See all resources in a given namespace
```
kubectl get all --namespace=foo
```