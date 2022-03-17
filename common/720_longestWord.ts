function longestWord(words: string[]): string {
    // 直接使用hash表
    let set: Set<string> = new Set<string>()
    words.sort((a: string, b: string): number => {
        let sub = a.length - b.length;
        if (sub == 0) {
            if(a > b){
                return 1
            }else if(a < b){
                return -1
            }
            return 0
        }
        return sub;
    })
    let ans :string = "";
    words.forEach(element => {
        if (element.length == 1 || set.has(element.substring(0, element.length - 1))) {
            set.add(element)
            if(element.length > ans.length || (element.length == ans.length && element < ans)){
                ans = element
            }
        }
    })
    return ans
};

console.log(longestWord(["a", "banana", "app", "appl", "ap", "apply", "apple"]))