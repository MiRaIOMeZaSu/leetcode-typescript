function uniqueMorseRepresentations(words: string[]): number {
    let pivot: number = 'a'.charCodeAt(0)
    let table = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
    let set: Set<string> = new Set<string>();
    for (let index = 0; index < words.length; index++) {
        let word = words[index]
        let post = []
        for (let j = 0; j < word.length; j++) {
            post.push(table[word.charCodeAt(j) - pivot])
        }
        set.add(post.join(""))
    }
    return set.size;
};