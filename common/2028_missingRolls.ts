function missingRolls(rolls: number[], mean: number, n: number): number[] {
    let count = rolls.length + n
    let sum = mean * count
    let pSum = 0
    for (let index = 0; index < rolls.length; index++) {
        pSum += rolls[index]
    }
    let rest = sum - pSum
    let ans: number[] = []
    if (rest < n || rest > n * 6) {
        return ans
    }
    let avr = Math.floor(rest / n)
    for (let index = 0; index < n; index++) {
        ans.push(avr)
        rest -= avr
    }
    let index = 0
    while (rest > 0) {
        ans[index]++
        rest--
        index++
    }
    return ans
};