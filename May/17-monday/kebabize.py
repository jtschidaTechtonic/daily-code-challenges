import re

def kebabize(string):
    no_ints = ''.join(char for char in string if char.isalpha())
    lower_words = [word.lower() for word in re.split("([A-Z][^A-Z]*)", no_ints) if word]
    return '-'.join(lower_words)