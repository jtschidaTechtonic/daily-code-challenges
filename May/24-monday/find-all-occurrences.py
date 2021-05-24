def find_all1(array, n):
    return [i for (i, int) in enumerate(array) if int == n]

def find_all2(array, n):
    return [i for i in range(0, len(array)) if array[i] == n]