def two_queens(input):
    x1, y1, x2, y2 = [int(n) for n in input.split(' ')]
    map = {
        'vertical': x1 == x2,
        'horizontal': y1 == y2,
        'diagonal_one': (x1 - y1) == (x2 - y2),
        'diagonal_two': (x1 + y1) == (x2 + y2)
    }
    collisions = [map[direction] for direction in map]
    return 'YES' if any(collisions) else 'NO'