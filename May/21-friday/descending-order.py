def descending_order(num):
    digits = [d for d in str(num)]
    descending = sorted(digits, reverse=True)
    return int(''.join(descending))