Array.prototype.square = function() {
    return [...this].map(e => e**2)
}

Array.prototype.cube = function() {
    return [...this].map(e => e**3)
}

Array.prototype.sum = function() {
    return [...this].reduce((sum, e) => sum + e, 0)
}

Array.prototype.average = function() {
    return this.sum() / this.length
}

Array.prototype.even = function() {
    return [...this].filter(e => e % 2 === 0)
}

Array.prototype.odd = function() {
    return [...this].filter(e => e % 2 !== 0)
}