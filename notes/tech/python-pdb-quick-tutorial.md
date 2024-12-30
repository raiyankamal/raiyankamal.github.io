# A Quick Tutorial on the Python Debugger

The `pdb` module provides an interactive source code debugger for Python programs.

To add a breakpoint anywhere in the source code:
```
def foo(bar: int) -> int:
    breakpoint()
    bazz = bar + 10
    return bazz
```

The actual work of debugging is done in the command line interface. Some frequently used commands:

- `n(ext)`: to the next possible statement.
- `s(tep)`: step into a function while moving next.
- `p <expression>`: Prints the result after evaluating the given expression.