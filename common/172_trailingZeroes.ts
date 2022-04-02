function buildArr(pviot: number, limit: number): number[] {
    let ans: number[] = new Array()
    ans.push(pviot)
    let next = pviot * pviot
    while (next <= limit) {
        ans.push(next)
        next *= pviot
    }
    return ans
}

function dichotomy(target: number, arr: number[]): number {
    if (target < arr[0] || target % arr[0] != 0) {
        return 0
    }
    let left = 0
    let right = arr.length
    let ans = 0
    while (left <= right) {
        let mid = (left + right) >> 1
        if (target % arr[mid] != 0) {
            right = mid - 1
        } else {
            left = mid + 1
            ans = Math.max(ans, mid)
        }
    }
    return ans + 1
}

function trailingZeroes(n: number): number {
    // 统计2和5的数量
    let ans = 0
    let twoArr: number[] = buildArr(2, n)
    let fiveArr: number[] = buildArr(5, n)
    let twoCount = 0
    let fiveCount = 0
    for (let index = 2; index <= n; index++) {
        twoCount += dichotomy(index, twoArr)
        fiveCount += dichotomy(index, fiveArr)
    }
    return Math.min(twoCount, fiveCount)
};

// console.log(trailingZeroes(3))
// console.log(trailingZeroes(5))
// console.log(trailingZeroes(20))
// console.log(trailingZeroes(31))
console.log(trailingZeroes(625))