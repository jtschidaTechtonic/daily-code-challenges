function mean(town, strng) {
    const townString = getTownString(town, strng)
    if (!townString) return -1
    const values = cleanData(townString)
    return average(values)
}

function variance(town, strng) {
    const townString = getTownString(town, strng)
    if (!townString) return -1
    const values = cleanData(townString)
    return stdDev(values)
}

function getTownString(town, strng) {
    const lines = strng.split('\n')
    const towns = lines.reduce((towns, line) => {
        const [town, dataString] = line.split(':')
        return {
            ...towns,
            [town]: dataString
        }
    }, {})
    return towns[town]
}

function cleanData(strng) {
    const monthData = strng.split(',')
    const values = monthData.map(monthString => {
        const stringValue = monthString.split(' ')[1]
        return Number(stringValue)
    })
    return values
}

const sum = (values) => values.reduce((sum, value) => sum + value)

const average = (values) => sum(values)/values.length

function stdDev(values) {
    const mean = average(values)
    const standardDeviations = values.map(value => (value - mean)**2)
    return sum(standardDeviations)/values.length
}