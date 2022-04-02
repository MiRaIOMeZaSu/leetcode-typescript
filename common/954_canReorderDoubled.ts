function solve(arr: number[], letf: number, right: number): boolean {
    let flag = letf < right ? 1 : -1
    let last = Number.MIN_SAFE_INTEGER
    let count = 0
    let counts: Map<number, number> = new Map<number, number>();
    for (let index = letf; index != right + flag; index += flag) {
        let val = arr[index]
        if (val == last) {
            count++
        } else {
            // 处理
            var needle: number = count
            let pres = counts.get(last)
            if (pres != undefined) {
                counts.delete(last)
                needle += pres
            }
            if (needle < 0) {
                return false
            } else if (needle > 0) {
                counts.set(last * 2, -needle)
            }
            last = val
            count = 1
        }
    }
    let pres = counts.get(arr[right])
    if (pres != undefined) {
        if(pres + count != 0){
            return false
        }
        counts.delete(arr[right])
    }else{
        return false
    }
    for (let entry of counts.entries()) {
        if (entry[1] < 0) {
            return false
        }
    }

    return true
}

function canReorderDoubled(arr: number[]): boolean {
    // 排序并统计数量
    // 奇数下标是偶数下标的两倍
    arr.sort((a, b) => a - b)
    let negativeRight = -1
    let zeroCount = 0
    let positiveRight = -1
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] < 0) {
            negativeRight = index
        } else if (arr[index] == 0) {
            zeroCount++
        } else if (arr[index] > 0) {
            positiveRight = index
            break
        }
    }
    if (zeroCount % 2 != 0) {
        return false
    }
    if (negativeRight >= 0) {
        if ((negativeRight + 1) % 2 != 0) {
            return false
        }
        if (!solve(arr, negativeRight, 0)) {
            return false
        }
    }
    if (positiveRight >= 0) {
        if ((arr.length - positiveRight) % 2 != 0) {
            return false
        }
        if (!solve(arr, positiveRight, arr.length - 1)) {
            return false
        }
    }

    return true
};
// console.log(canReorderDoubled([3, 1, 3, 6]))
// console.log(canReorderDoubled([4, -2, 2, -4]))
// console.log(canReorderDoubled([-5,-3]))
console.log(canReorderDoubled([4, -4, 4, -2, -4, -8]))