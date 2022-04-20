class Solution {
    max: number
    strings: string[]
    solve(lenght: number, count: number, index: number): number {
        let i = index
        for (; i < this.strings.length;) {
            let currLenght = this.strings[i].length
            let tabCount = 0
            while (tabCount < currLenght && this.strings[i][tabCount] == '\t') {
                tabCount++
            }
            currLenght -= tabCount
            if (tabCount == count + 1) {
                if (this.strings[i].split(".").length > 1) {
                    this.max = Math.max(this.max, lenght + currLenght + 1)
                }
                i = this.solve(lenght + currLenght + 1, tabCount, i + 1)
            } else {
                return i
            }
        }
        // 返回
        return i + 1
    }

    constructor(strings: string[]) {
        this.max = 0
        this.strings = strings
    }
}



function lengthLongestPath(input: string): number {
    let strings: string[] = input.split("\n")
    let ans = 0
    // 构件树
    let solution = new Solution(strings)
    solution.solve(0, -1, 0)
    if (solution.max == 0) {
        return 0
    }
    return solution.max - 1
};

console.log(lengthLongestPath("file1.txt\nfile2.txt\nlongfile.txt"))