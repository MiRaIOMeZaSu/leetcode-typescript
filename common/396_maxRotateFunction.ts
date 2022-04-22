function maxRotateFunction(nums: number[]): number {
    // 使用前缀和
    let prefix: number[] = new Array()
    prefix[0] = nums[0]
    for (let index = 1; index < nums.length; index++) {
        prefix[index] = prefix[index - 1] + nums[index]
    }
    // 初始值
    let curr = 0
    for (let index = 0; index < nums.length; index++) {
        curr += index * nums[index]
    }
    let ans = curr
    for (let index = 1; index < nums.length; index++) {
        // 进行变化
        // 减少,除增加的都会减少
        curr -= prefix[nums.length - 1]  - nums[index - 1]
        // 添加
        curr += nums[index - 1] * (nums.length - 1)
        // 比较
        ans = Math.max(ans,curr)
    }
    return ans
};

console.log(maxRotateFunction([4,3,2,6]))