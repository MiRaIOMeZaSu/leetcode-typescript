function goodDaysToRobBank(security: number[], time: number): number[] {
    // 动态规划,存储两边的递增或递减数量
    let ans: number[] = []
    let size = security.length
    let left: number[] = new Array(size).fill(0)
    let right: number[] = new Array(size).fill(0)
    for (let index = 1; index < size; index++) {
        if (security[index] <= security[index - 1]) {
            left[index] = left[index - 1] + 1
        }
    }
    for (let index = size - 2; index >= 0; index--) {
        if (security[index] <= security[index + 1]) {
            right[index] = right[index + 1] + 1
        }
    }
    // 开始计数
    for (let index = time; index < size - time; index++) {
        if (left[index] >= time && right[index] >= time) {
            ans.push(index)
        }
    }
    // 如何判定
    return ans
};

console.log(goodDaysToRobBank([5, 3, 3, 3, 5, 6, 2], 2))