function nextGreatestLetter(letters: string[], target: string): string {
    // 假如不存在比自己大的则直接取最小
    let ans = letters[letters.length - 1]
    let min = "z"
    for (let index = 0; index < letters.length; index++) {
        let curr = letters[index]
        if (curr < min && curr != target) {
            min = curr
        }
        if (curr > target && curr < ans) {
            ans = curr
        }
    }
    if (ans <= target) {
        return min
    }
    return ans
};

console.log(nextGreatestLetter(["c", "f", "j"], "k"))