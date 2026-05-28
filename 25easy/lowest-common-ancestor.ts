// Definition for a binary tree node.
class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}

function lowestCommonAncestor(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const res: TreeNode[][] = [] 
	function dfs(node: TreeNode | null, state: TreeNode[]) {
        if (!node) return;

        const newState = [...state, node]
        if (node === p || node === q) {
            res.push(newState)
        }

        if (node.val > p.val && node.val > q.val) {
            dfs(node.left, newState)
        } else if (node.val < p.val && node.val < q.val) {
            dfs(node.right, newState)
        } else {
            dfs(node.left, newState);
            dfs(node.right, newState)
        }
    }

    dfs(node, []);

    for (let i=res[0].length; i>=0; i--) {
        if (res[1].includes(res[0][i])) {
            return res[0][i]
        }
    }

    return null
};