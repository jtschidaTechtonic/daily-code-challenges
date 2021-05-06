def valid_parentheses(string):
    i = 0
    score = 0
    while i < len(string) and score >= 0:
        if string[i] == '(': score += 1
        if string[i] == ')': score -= 1
        i += 1
    return not bool(score)