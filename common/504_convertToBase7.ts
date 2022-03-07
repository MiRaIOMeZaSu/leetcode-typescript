function convertToBase7(num: number): string {
    if(num == 0){
        return "0"
    }
    let ans: string = ""
    let currNum: number = num
    currNum = Math.abs(num)
    while (currNum > 0) {
        let rest = currNum % 7
        ans = rest.toString().concat(ans)
        currNum = (currNum - rest) / 7
    }
    if (num < 0) {
        ans = "-".concat(ans)
    }
    return ans;
};

console.log(convertToBase7(100))
console.log(convertToBase7(-7))
console.log(convertToBase7(0))
console.log(convertToBase7(-1))
console.log(convertToBase7(70))