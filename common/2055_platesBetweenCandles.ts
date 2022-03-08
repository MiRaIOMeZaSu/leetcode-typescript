function platesBetweenCandles(s: string, queries: number[][]): number[] {
    // 使用前缀和与二分法
    let size = s.length
    let ans: number[] = new Array(queries.length).fill(0)
    let left_plate: number[] = new Array(size + 3)
    let left_candle: number[] = new Array(size + 3)
    left_candle[0] = 0
    left_plate[0] = 0
    for (let index = 1; index <= size; index++) {
        left_plate[index] = left_plate[index - 1]
        left_candle[index] = left_candle[index - 1]
        if (s[index - 1] == "*") {
            // 如果是盘子
            left_plate[index]++
        } else {
            left_candle[index]++
        }
    }
    left_plate[size + 1] = left_plate[size]
    left_candle[size + 1] = left_candle[size]
    // 开始遍历区间
    for (let index = 0; index < queries.length; index++) {
        let query = queries[index]
        let left = query[0]
        let right = query[1]
        let right_bound = -1
        let left_bound = size + 1
        while (left <= right) {
            let mid = (left + right) >> 1
            if (left_candle[mid + 1] < left_candle[query[1] + 1]) {
                left = mid + 1
            } else {
                if (s[mid] == "|") {
                    // 成功获取
                    right_bound = mid
                    break
                } else {
                    right = mid - 1
                }
            }
        }
        left = query[0]
        right = query[1]
        while (left <= right) {
            let mid = (left + right) >> 1
            if (left_candle[mid + 1] > left_candle[query[0] - 1 + 1]) {
                if (left_candle[mid + 1] == left_candle[query[0] - 1 + 1] + 1 && s[mid] == "|") {
                    // 成功获取
                    left_bound = mid
                    break
                }
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        if (left_bound < right_bound) {
            // 如何进行
            ans[index] = left_plate[right_bound + 1] - left_plate[left_bound + 1]
        }
    }
    return ans;
};

console.log(platesBetweenCandles("*|*||||**|||||||*||*||*||**|*|*||*",
    [[3, 31], [0, 33], [1, 24], [3, 20], [7, 11], [5, 32], [2, 31], [5, 31], [0, 31], [3, 28], [4, 33], [6, 29], [2, 30], [2, 28], [1, 30], [1, 33], [4, 32], [5, 30], [4, 23], [0, 30], [3, 10], [5, 28], [0, 28], [4, 28], [3, 33], [0, 27]]))
console.log(platesBetweenCandles("**|**|***|", [[2, 5], [5, 9]]))
