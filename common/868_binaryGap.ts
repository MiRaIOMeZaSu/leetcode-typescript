let set :Map<number,number> = new Map<number,number>()
let num = 1
for (let index = 0; index < 32; index++) {
    set.set(num,index)
    num *= 2
}

function binaryGap(n: number): number {
    let ans = 0
    let last = n;
    let curr = last & (last - 1)
    let lastIndex = -1
    while(last !=  curr){
        let currIndex = set.get(last - curr)
        last = curr
        curr = last & (last - 1)
        if(currIndex == undefined){
            currIndex = -1
        }
        if(lastIndex == -1){
            lastIndex = currIndex
            continue
        }
        ans = Math.max(ans,currIndex - lastIndex)
        lastIndex = currIndex
    }
    return ans 
};

console.log(binaryGap(22))