def max_ball(v0):
    height = 0
    time = 0
    prev_height = 0
    while height >= prev_height:
        prev_height = height
        height = calc_height(time, v0)
        time += 1
    return time - 2
        
        
def calc_height(time, v0):
    g = 9.81
    t = time/10
    v = v0/3.6
    h = (v*t) - (0.5*g*t*t)
    return h