function solve(nums: number[], index: number, curr: number, target: number): number {
    if (index == nums.length) {
        if (curr == target) {
            return 1
        }
        return 0
    }
    return solve(nums, index + 1, curr, target) + solve(nums, index + 1, curr | nums[index], target)
}

function countMaxOrSubsets(nums: number[]): number {
    let ans = 0;
    let max_val = 0;
    let bits = new Array(32)
    bits[0] = 1
    for (let index = 1; index < 32; index++) {
        bits[index] = bits[index - 1] * 2
    }
    let bit_to_num = new Array(32)
    for (let index = 0; index < nums.length; index++) {
        // 计算最大或结果
        max_val |= nums[index]
        // 计算位下标
        let temp = nums[index]
        for (let j = 0; j < 32 && temp > 0; j++) {
            if ((temp | bits[j]) == temp) {
                temp ^= bits[j]
                if (bit_to_num[j] == undefined) {
                    bit_to_num[j] = []
                }
                bit_to_num[j].push(nums[index])
            }
        }
    }
    return solve(nums, 0, 0, max_val);
};

console.log(countMaxOrSubsets([3, 2, 1, 5]))
