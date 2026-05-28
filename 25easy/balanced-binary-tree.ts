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

function isBalanced(root: TreeNode | null): boolean {
    let balanced = true
    function dfs(root: TreeNode | null): number {
        if (!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);

        balanced = !balanced ? balanced : Math.abs(left - right) <= 1;

        return 1 + Math.max(left, right)
    }

    dfs(root)

    return balanced
};