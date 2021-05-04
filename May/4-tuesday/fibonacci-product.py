def productFib(prod):
    n1, n2 = [0, 1]
    while n1*n2 <= prod:
        if n1*n2 == prod:
            return [n1, n2, True]
        n1, n2 = [n2, (n1+n2)]
    return [n1, n2, False]