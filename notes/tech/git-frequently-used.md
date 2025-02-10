# Frequently used Git commands

## Advanced

(With great power comes great responsibility)

Remove branches matching a regex pattern
```
$ git branch | grep foo | xargs git branch -D
```