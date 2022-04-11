function solve(n:number){
    // 除了首位,其他位都可以为零
    let ans = 1
    // 选择数量
    for (let index = 10; 10 - index < n; index--) {
        ans *= index
    }
    ans /=10
    ans *= 9
    return ans
}

function countNumbersWithUniqueDigits(n: number): number {
    let ans = 1;
    for (let index = 1; index <= n; index++) {
        ans += solve(index)
    }
    return ans
};

countNumbersWithUniqueDigits(2)