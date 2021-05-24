const findAll1 = (array, n) => {
    return array.reduce((indices, int, i) => {
        return int === n ? [...indices, i] : indices
    }, [])
}

const findAll2 = (array, n) => {
    let indices = []
    for (let i = 0; i < array.length; i++) {
      if (array[i] === n) indices.push(i)
    }
    return indices
}