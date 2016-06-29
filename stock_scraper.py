from random import random
from pdb import set_trace


def get_data():
    RESULTS = {"children": []}
    for Round in xrange(10):
        RESULTS["children"].append({
            "round": Round,
            "fscore": random()
        })
    # set_trace()
    return RESULTS
