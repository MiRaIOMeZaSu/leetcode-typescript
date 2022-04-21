let aArr :string[] = ["a"]

function getASqueuence(count:number):string{
    if(count < aArr.length){
        return aArr[count]
    }
    for (let index = aArr.length; index <= count; index++) {
        aArr.push(aArr[index - 1] + "a")
    }
    return aArr[count]
}

function toGoatLatin(sentence: string): string {
    let stringBuilder:string[] = new Array()
    let arr = sentence.split(" ")
    let set: Set<string> = new Set<string>()
    let str = "aioueAIOUE"
    for (let index = 0; index < str.length; index++) {
        set.add(str.charAt(index))
    }
    for (let index = 0; index < arr.length; index++) {
        let str = arr[index]
        if(!set.has(str[0])){
            // 辅音
            stringBuilder.push(str.substring(1))
            stringBuilder.push(str[0])
        }else{
            stringBuilder.push(str)
        }
        stringBuilder.push("ma")
        stringBuilder.push(getASqueuence(index))
        stringBuilder.push(" ")
    }
    stringBuilder.pop()
    return stringBuilder.join("")
};

console.log(toGoatLatin("I speak Goat Latin"))