// 首先构造树
class MyNode {
    childCounts: number[]
    children: MyNode[]
    parentIndex: number
    constructor(index: number) {
        this.parentIndex = index
        this.childCounts = []
        this.children = []
    }
}

function countChild(node: MyNode): number {
    let ans = 1
    for (let index = 0; index < node.children.length; index++) {
        node.childCounts[index] = countChild(node.children[index])
        ans += node.childCounts[index]
    }
    return ans
}

function countHighestScoreNodes(parents: number[]): number {
    let ans = 0
    let max = -1
    // 构造后再计数
    let root = new MyNode(-1)
    let table = new Array(parents.length)
    table[0] = root
    for (let index = 1; index < parents.length; index++) {
        table[index] = new MyNode(parents[index])
    }
    for (let index = 1; index < parents.length; index++) {
        table[table[index].parentIndex].children.push(table[index])
    }
    countChild(root)
    for (let i = 0; i < parents.length; i++) {
        let node = table[i]
        let parentsCount = parents.length - 1
        let temp = 1
        for (let j = 0; j < node.childCounts.length; j++) {
            parentsCount -= node.childCounts[j]
            temp *= node.childCounts[j]
        }
        if (parentsCount != 0) {
            temp *= parentsCount
        }
        if (temp == max) {
            ans += 1
        } else if (temp > max) {
            ans = 1
            max = temp
        }
    }
    return ans
};

console.log(countHighestScoreNodes([-1, 2, 0]))
console.log(countHighestScoreNodes([-1, 2, 0, 2, 0]))