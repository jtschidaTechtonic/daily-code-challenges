const add = (a, b) => {
    const [long, short] = a.length >= b.length ? [a, b] : [b, a]
    const lengthDiff = long.length - short.length
    let bigSum = ''
    let remainder = 0
    for (let i = 1; i <= long.length; i++) {
        const place = long.length - i
        const longDigit = Number(long[place])
        let shortDigit = Number(short[place - lengthDiff]) || 0
        let digitSum = longDigit + shortDigit + remainder
        const [first, second] = digitSum > 9 ?
            String(digitSum).split('') : ['0', String(digitSum)]
        remainder = Number(first)
        bigSum = second + bigSum
    }
    return remainder > 0 ? String(remainder) + bigSum : bigSum
}