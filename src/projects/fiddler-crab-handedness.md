---
title: Detecting Handedness of Fiddler Crabs
layout: project
tags:
    - computer vision
    - biology
date: 2011-07
---

Members of the genus *Uca* are generally known as Fiddler crabs for the overgrown claws of their males. The following algorithm detects a male fiddler crabs handedness from a photograph. The algorithm was implemented using **Matlab R2009a**.

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

Test results :
The following two photos of a fiddler crab I shot near the mangrove area at Rezu Khal, Cox's Bazar was used to test the algorithm. The results are correct as can be seen from the images.

Future work :
Test with photos taken at wide range of conditions as well as of many other species.