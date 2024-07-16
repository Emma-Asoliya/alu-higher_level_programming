#!/usr/bin/python3 
"""
    define a function 'read_file'
"""


def read_file(filename=""):
    """
        reads a text file & prints it to stdout
    """

    with open(filename, encoding='utf-8') as f:
        for line in f:
            print(line, end="")
