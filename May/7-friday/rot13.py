def rot13(message):
    return ''.join(shift(letter, 13) for letter in message)

def shift(letter, n):
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    if letter.lower() not in alphabet: return letter
    index = alphabet.find(letter.lower())
    new_index = index - n if index > len(alphabet) - (n + 1) else index + n
    shifted_letter = alphabet[new_index]
    return shifted_letter.upper() if letter.isupper() else shifted_letter