function winnerOfGame(colors: string): boolean {
    // 无关选择的策略
    // 只关系数量
    let aCount: number = 0
    let bCount: number = 0
    let a = "A"[0]
    let b = "B"[0]
    for (let index = 0; index < colors.length;) {
        let length = 0
        let j = index
        if (colors[index] == a) {
            for (; j < colors.length && colors[j] == a; j++) {
            }
            length = j - index
            if(length > 2){
                aCount += length - 2
            }
            index = j
        } else {
            for (; j < colors.length && colors[j] == b; j++) {
            }
            length = j - index
            if(length > 2){
                bCount += length - 2
            }
            index = j
        }
    }
    return aCount > bCount
};