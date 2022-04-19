function shortestToChar(s: string, c: string): number[] {
    // 从前至后,从后至前
    let arr :number[] = new Array(s.length).fill(Number.MAX_SAFE_INTEGER);
    let lastIndex = -1;
    for (let index = 0; index < s.length; index++) {
        if(s[index] == c){
            lastIndex = index;
        }
        if(lastIndex!=-1){
            arr[index] = index - lastIndex;
        }
    }
    lastIndex = -1;
    for (let index = s.length - 1; index >= 0; index--) {
        if(s[index] == c){
            lastIndex = index;
        }
        if(lastIndex!=-1){
            arr[index] = Math.min(arr[index],lastIndex - index);
        }
    }
    return arr;
};