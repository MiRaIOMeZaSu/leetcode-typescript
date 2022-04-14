function maximumWealth(accounts: number[][]): number {
    let max = 0
    for (let index = 0; index < accounts.length; index++) {
        let curr = 0
        for (let j = 0; j < accounts[index].length; j++) {
            curr+= accounts[index][j];
        }
        if(curr > max){
            max = curr
        }
    }
    return max
};