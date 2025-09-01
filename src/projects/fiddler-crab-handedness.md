---
title: Detecting Handedness of Fiddler Crabs
layout: project
tags:
    - computer vision
    - biology
date: 2011-07
---

Members of the genus *Uca* are generally known as Fiddler crabs for the overgrown claws of their males. The following algorithm detects a male fiddler crabs handedness from a photograph. The algorithm was implemented using **Matlab R2009a**.

The accompanying photos were taken by me near the mangrove forest at Rezu Khal, Cox's Bazar, Bangladesh.

![image info](/assets/img/projects/fiddler-crab-handedness/fid1.jpg)
![image info](/assets/img/projects/fiddler-crab-handedness/fid2.jpg)

#### Assumptions
The photo was taken from front, close enough for the specimen to occupy significant portion of the frame.

#### Input
Photograph in RGB format.

#### Pseudocode
```
convert RGB image to Lab format
subtract background from l to correct non-uniform lighting, enhance the resulting image
apply threshold
perform morphological opening
remove blobs with area less than 200 pixels
take the maximum area blob, find its centroid (C1)
find the maximum hole in maximum area blob, find hole's centroid (C2)
if C1 has X coordinate less than C2 then it's a right handed crab, otherwise its left handed
```

#### Future work
Test with photos taken in wide range of conditions as well as of many other species.