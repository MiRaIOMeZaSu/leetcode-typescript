function findRestaurant(list1: string[], list2: string[]): string[] {
    let ans: string[] = []
    let minSumIndex = Number.MAX_SAFE_INTEGER
    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length && i + j <= minSumIndex; j++) {
            if (list1[i] == list2[j]) {
                if (i + j < minSumIndex) {
                    ans = [list1[i]]
                    minSumIndex = i + j
                } else {
                    ans.push(list1[i])
                }
            }
        }
    }
    return ans
};