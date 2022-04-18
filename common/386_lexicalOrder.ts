function solve(list: number[], curr: number, max: number) {
    for (let index = 0; index == 0 || curr % 10 != 0 ; index++) {
        if (curr > max) {
            return;
        } else if (curr != 0) {
            list.push(curr)
        }
        solve(list, curr * 10, max)
        curr += 1
    }
}

function lexicalOrder(n: number): number[] {
    let ans: number[] = new Array();
    solve(ans, 1, n)
    return ans;
};

console.log(lexicalOrder(13))