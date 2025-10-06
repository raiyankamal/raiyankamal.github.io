---
title: Understanding Electron
tags:
    - electron
    - javscript
    - desktop application
layout: note.njk
---

# Understanding Electron

Electron is a framework for building cross-platform desktop apps with web technologies — HTML, CSS, and JavaScript. This framework combines the power of Chromium for rendering web content and Node.js for backend.

The core architecture comprises of 2 processes and IPC to pass signals between the two:
- Main process
- Renderer process

```
+--------------------+
|     Main Process   |  <-- Node.js + OS APIs
|  (ipcMain, app.js) |
+--------+-----------+
         ↑   IPC
         ↓
+--------+-----------+
|  Renderer Process  |  <-- Chromium + (limited Node.js)
| (UI, ipcRenderer)  |
+--------------------+
```

## Main Process

- Responsible for running the entry script, i.e. `main.js` by convention.
- As a Node.js process running on the host machine, it has full node support and access to OS native features.

## Renderer Process

- Responsible for rendering the application front end in a chromium window.
- For applications with multiple windows, a separate renderer process runs in each window.

## IPC

- Enables signal passing between the main and renderer processes.
- To signal main -> renderer:
    ```
    // Renderer (renderer.js)
    ipcRenderer.send('ping', {key1: 'value-1', key2: 'value-2'})

    // Main (main.js)
    ipcMain.on('ping', (event, message) => {
        console.log(message.key1)
        console.log(message.key1)
    })
    ```
- To signal renderer -> main:
    ```
    // Renderer
    const data = await ipcRenderer.invoke('pong')

    // Main
    ipcMain.handle('pong', async () => {
        return { key1: 'value-1', key2: 'value-2' }
    })
    ```