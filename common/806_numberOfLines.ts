function numberOfLines(widths: number[], s: string): number[] {
    let count = 1
    let rest = 0
    let pivot = 'a'.charCodeAt(0)
    for (let index = 0; index < s.length; index++) {
        let curr = widths[s.charCodeAt(index) - pivot]
        if (rest + curr > 100) {
            rest = curr
            count++
        } else if (rest + curr == 100) {
            count++
            rest = 0
        } else {
            rest += curr
        }
    }
    if (rest == 0) {
        count--
        rest = 100
    }
    return [count, rest]
};