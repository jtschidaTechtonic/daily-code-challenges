function isValidWalk(walk) {
    if (walk.length !== 10) return false
    const coordinates = walk.reduce((coordinates, direction) => {
        direction == 'n' && coordinates.y++
        direction == 'e' && coordinates.x++
        direction == 's' && coordinates.y--
        direction == 'w' && coordinates.x--
        return coordinates
    }, {x: 0, y: 0})
    return coordinates.x === 0 && coordinates.y === 0
}