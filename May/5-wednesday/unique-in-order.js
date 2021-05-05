var uniqueInOrder=function(iterable){
    if (typeof iterable === 'string') iterable = iterable.split('')
    return iterable.reduce((unique, item) => {
        const previousItem = unique[unique.length - 1]
        if (previousItem === item) return unique
        return [...unique, item]
    }, [])
}