function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //不含最大值，含最小值
}

class Solution {
    map: Map<number, number[]>
    constructor(nums: number[]) {
        this.map = new Map<number, number[]>();
        for (let index = 0; index < nums.length; index++) {
            if (!this.map.has(nums[index])) {
                this.map.set(nums[index], new Array())
            }
            let arr: number[] = this.map.get(nums[index])
            arr.push(index)
        }
    }

    pick(target: number): number {
        let arr: number[] = this.map.get(target)
        return arr[getRandomInt(0, arr.length)]
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

console.log(getRandomInt(0,1))