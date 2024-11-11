import glob
import os

output_file_path = "list-pages.md"

try:
    os.remove(output_file_path)
except FileNotFoundError:
    pass

root = "."
nodes = []
for x in os.walk(root):
    for y in glob.glob(os.path.join(x[0], "*.md")):
        title = y.split(".md")[0]
        nodes.append((y, title))

with open(output_file_path, "w") as fout:
    for path, title in nodes:
        fout.write(f"- [{title}]({path})\n")
