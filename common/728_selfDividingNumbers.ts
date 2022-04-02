function selfDividingNumbers(left: number, right: number): number[] {
    // 按位数
    let ans: number[] = new Array()
    while (left <= right) {
        let num = left
        let flag = true
        while (num > 0) {
            let temp = num % 10
            num = Math.floor(num / 10)
            if (left % temp != 0) {
                flag = false
                break
            }
        }
        if (flag) {
            ans.push(left)
        }
        left++
    }
    return ans
};

console.log(selfDividingNumbers(1, 22))