---
title: A Quick Tutorial on LXML
tags:
    - python
    - xml
layout: note.njk
---
# A Quick Tutorial on LXML

LXML is the de-facto library for processing XML and HTML in the Python language.

Create a new node
```
node = etree.Element('node')
```

Add children to a node
```
root = etree.Element('node')
child = etree.SubElement(root, 'leaf')
```

Serialize a node in XML format
```
etree.tostring(node)
```