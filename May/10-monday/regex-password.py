from re import search

def validate(password):
    regex="(?=.*[A-Z]+)(?=.*[a-z]+)(?=.*[0-9]+)^([a-zA-Z0-9]{6,})$"
    return bool(search(regex, password))