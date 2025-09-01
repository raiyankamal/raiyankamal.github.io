---
title: Visualizing Genetic Algorithms
layout: project
tags:
    - information visualization
    - biology
date: 2011-05
---

While working on a different problem that required exploring genetic algorithms, I found out it's quite challenging to inspect individual member in every generation of the algorithm. Out of this need came a simple information visualizer tool.

The primary goal is to visualize every individual (suboptimal solution) in every generation until the algorithm terminates. Each individual is visualized as a small thumbnail and each generation as a cluster of thumbnails. Each individual is assigned an unique ID, which along with its parents' IDs can be seen on top left corner of each icon. The number at the bottom left corner is the fitness. Average fitness, best fitness of every generation are also plotted.

C++ and OpenGL were used to build the visualizer tool.

![Genetic algorithm visualized](/assets/img/projects/genetic-algo-visualization/genetic-algo.png)

In the picture above, I'm trying to breed a regular pentagon starting with initial population of 20 randomly generated pentagons. The fitness function used here is the standard deviation of distances of the vertices from a point inside the pentagon. Here we can see the 11 generation of pentagons on the same page.