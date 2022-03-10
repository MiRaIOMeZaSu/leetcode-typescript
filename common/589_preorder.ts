
class Node {
    val: number
    children: Node[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}

function solve(node1: Node, arr: number[]) {
    arr.push(node1.val)
    for (let index = 0; index < node1.children.length; index++) {
        solve(node1.children[index], arr)
    }
};

function preorder(root: Node | null): number[] {
    // 前序遍历
    let ans: number[] = []
    if (root == null) {
        return ans
    }
    // 开始前序遍历
    solve(root,ans)
    return ans
};

console.log(preorder(null))