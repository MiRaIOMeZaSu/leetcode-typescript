let zero: string = "0"
let one: string = "1"

function utf8ToString(num: number): string {
    let ans = num.toString(2)
    while (ans.length < 8) {
        ans = zero + ans
    }
    return ans
}


function validUtf8(data: number[]): boolean {
    // 如何判断
    // 先换出字符串
    let strs: string[] = []
    for (let index = 0; index < data.length; index++) {
        strs[index] = utf8ToString(data[index])
    }
    for (let index = 0; index < data.length;) {
        if (strs[index][0] == zero) {
            index++
            continue
        }
        let j = 1
        for (; j < 5; j++) {
            // 从1到3
            if (strs[index][j] == zero) {
                if (j < 2) {
                    return false
                }
                break
            }
        }
        if (j > 4) {
            return false
        }
        for (let i = index + 1; i < index + j; i++) {
            if (i >= data.length) {
                return false
            }
            if (!(strs[i][0] == one && strs[i][1] == zero)) {
                return false
            }
        }
        index += j
    }
    return true
};

console.log(validUtf8([250, 145, 145, 145, 145]))
console.log(validUtf8([255]))
console.log(validUtf8([197, 130, 1]))

