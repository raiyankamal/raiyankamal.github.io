---
title: Python Profiling
tags:
    - python
    - profiling
    - performance
    - cProfile
    - pstat
layout: note.njk
---

# Python Profiling

The `cProfile` and `pstats` are standard python libraries used for profiling python programs. `cProfile` is used to profile duration on and frequency of python statements, then `pstat` can be used to generate a report.

```
import cProfile
import pstats

with cProfile.Profile() as pr:
    my_function()

stats = pstats.Stats(pr)
stats.sort_stats(pstats.SortKey.CUMULATIVE).print_stats(20)
```

This will produce a list of top 20 entries, sorted by longest cumulative running time first. Normally `cProfile` will collect data for many lines of code and without sorting and filtering the output may not be very useful. The output looks similar to:

```
   ncalls  tottime  percall  cumtime  percall filename:lineno(function)
       10    0.020    0.002    0.100    0.010 myscript.py:12(process_image)         # <-- many lines like this.
```

Meaning of each column in the output is described below:

| Column | Meaning |
| ------ | ------- |
| **`ncalls`**                    | Number of times the function was called. Example: `10/2` means it was called 10 times in total, of which 2 were not called through recursion. |
| **`tottime`**                   | Total time spent only in that function’s code, excluding time spent in functions it calls.|
| **`percall` (first one)**       | `tottime / ncalls`, average time spent per call exclusively in that function.|
| **`cumtime`**                   | Cumulative time spent in this function and all the functions it calls (i.e., “inclusive” time).|
| **`percall` (second one)**      | `cumtime / ncalls` → average total time per call *including called functions*.|
| **`filename:lineno(function)`** | Where the function is defined (file, line number, and function name).|




