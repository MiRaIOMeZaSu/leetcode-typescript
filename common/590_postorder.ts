/**
 * Definition for node.
 * class Node {
 *     val: number
 *     children: Node[]
 *     constructor(val?: number) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.children = []
 *     }
 * }
 */

function solve(node: Node, arr: number[]) {
    node.children.array.forEach(subNode => {
        solve(subNode, arr)
    });
    arr.push(node.val)
}

function postorder(root: Node | null): number[] {
    // 后序遍历
    // 先深入再加入
    let ans: number[] = []
    if (root == null) {
        return ans
    }
    solve(root, ans)
    return ans
};