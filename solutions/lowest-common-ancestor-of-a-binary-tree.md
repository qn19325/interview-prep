---
problem: Lowest Common Ancestor of a Binary Tree
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
solved_date: 2026-05-06
---

# Lowest Common Ancestor of a Binary Tree

## Intuition
Return the node itself when found. If both subtrees return non-null, the current node is the LCA. Otherwise propagate the non-null side up.

## Approach
Single-pass postorder DFS. Base case: return null or the node if it matches p or q. After recursing left and right, if both sides found a target, the current node is the LCA. If only one side did, bubble it up.

## Complexity
- Time: O(n)
- Space: O(h)

## Code

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    function dfs(node: TreeNode | null): TreeNode | null {
        if (!node || node === p || node === q) return node;

        const left = dfs(node.left);
        const right = dfs(node.right);

        if (left && right) return node;

        return left ? left : right;
    }

    return dfs(root);
}
```

## Notes
- If both subtrees return non-null it means p and q were found in different branches — current node is the split point (LCA).
- If only one side returns non-null, either only one target is in this subtree, or the LCA itself was one of the targets (found early via base case).
