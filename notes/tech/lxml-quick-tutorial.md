# A Quick Tutorial on LXML

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