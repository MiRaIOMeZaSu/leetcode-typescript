function hasAlternatingBits(n: number): boolean {
    let next = n >> 1
    let and = next | n
    if((and & (and + 1)) == 0 && (next & n) ==0 ){
        return true
    }
    return false
};