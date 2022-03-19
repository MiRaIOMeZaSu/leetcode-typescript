class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

function tree2str(root: TreeNode | null): string {
    // 深度优先
    if (root == null) {
        return ""
    }
    let ans: string = root.val.toString()
    let left = tree2str(root.left)
    let right = tree2str(root.right)
    if (left.length == 0 && right.length == 0) {
        return ans
    }
    left = `(${left})`
    if (right.length > 0) {
        right = `(${right})`
    }
    return ans + left + right
};