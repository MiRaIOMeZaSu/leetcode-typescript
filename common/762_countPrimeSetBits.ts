let array: boolean[] = new Array(20)

function bitsCount(num: number): number {
    let ans = 0
    while (num > 0) {
        num = num & (num - 1)
        ans++
    }
    return ans
}

function isPrime(num: number): boolean {
    // 使用记忆法
    if (num < 2) {
        return false
    }
    if (array[num] != undefined) {
        return array[num]
    }
    for (let index = 2; index < num; index++) {
        if (num % index == 0) {
            array[num] = false
            return array[num]
        }
    }
    array[num] = true
    return array[num]
}

function countPrimeSetBits(left: number, right: number): number {
    // 期望不需要遍历就能获取数量
    // 10^6
    let ans = 0
    for (let index = left; index <= right; index++) {
        if (isPrime(bitsCount(index))) {
            ans++
        }
    }
    return ans
};

console.log(countPrimeSetBits(6, 10))