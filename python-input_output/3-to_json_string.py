#!/usr/bin/python3 
"""
    define 'to_json_string' function
    import 'json'
"""

import json


def to_json_string(my_obj):
    """
        returns JSON representation of an object(string)
    """

    return json.dumps(my_obj)
