
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


function findTarget(root: TreeNode | null, k: number): boolean {
    if (root == null) {
        return false;
    }
    // 存储所有值及数量
    let map: Map<number, number> = new Map<number, number>()
    let stack = new Array<TreeNode>()
    stack.push(root)
    while (stack.length > 0) {
        let pviot = stack.pop()
        if (pviot == null || pviot == undefined) {
            continue
        }
        let pres = map.get(pviot.val)
        if (pres == undefined) {
            pres = 0
        }
        map.set(pviot.val, pres + 1)
        if (pviot.left != null) {
            stack.push(pviot.left)
        }
        if (pviot.right != null) {
            stack.push(pviot.right)
        }
    }
    let flag = false
    map.forEach((count,key) =>{
        if(map.has(k - key)){
            if(key == k - key ){
                flag = flag || (count > 1)
                return
            }
            flag = true
        }
    })
    return flag
};