function calPoints(ops: string[]): number {
    let arr: number[] = new Array()
    arr.push(Number.parseInt(ops[0]))
    let ans = 0
    ans += Number.parseInt(ops[0])
    for (let index = 1; index < ops.length; index++) {
        let length = arr.length
        if (ops[index] == "D") {
            arr.push(arr[length - 1] * 2)
            ans += arr[length]
        } else if (ops[index] == "C") {
            ans -= arr[length - 1]
            arr.pop()
        } else if (ops[index] == "+") {
            arr.push(arr[length - 1] + arr[length - 2])
            ans += arr[length]
        } else {
            arr.push(Number.parseInt(ops[index]))
            ans += arr[length]
        }
    }
    return ans
};

console.log(calPoints(["5", "-2", "4", "C", "D", "9", "+", "+"]))