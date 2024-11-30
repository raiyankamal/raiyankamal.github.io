# Bash Script File & Directory Listing

Loop through all files in a directory

```
for filename in ./path/to/dir/*; do
    echo "$filename"
done
```

Loop through all files in a directory matching a pattern

```
for filename in ./path/to/dir/*.md; do
    echo "$filename"
done
```