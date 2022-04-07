function solve(s: string) {
    let nextS = s.substring(1, s.length) + s[0]
    return nextS
}
function rotateString(s: string, goal: string): boolean {
    if (s == goal) {
        return true
    }
    let nextS = solve(s)
    while (s != nextS) {
        if (nextS == goal) {
            return true
        }
        nextS = solve(nextS)
    }
    return false
};

console.log(rotateString("abcde", "cdeab"))