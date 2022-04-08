
class Node {
    val: number
    children: Node[]
    constructor(val?: number) {
        this.val = (val === undefined ? 0 : val)
        this.children = []
    }
}


function levelOrder(root: Node | null): number[][] {
    // 简单的队列法
    let queue = new Array()
    let ans: number[][] = new Array()
    if (root == null) {
        return ans
    }
    queue.push([0, root])
    while (queue.length > 0) {
        let [currIndex, pivot] = queue.splice(0, 1)[0]
        for (let index = 0; index < pivot.children.length; index++) {
            queue.push([currIndex + 1, pivot.children[index]])
        }
        if (ans.length <= currIndex) {
            ans.push(new Array())
        }
        ans[currIndex].push(pivot.val)
    }
    return ans
};

