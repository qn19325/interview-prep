---
problem: Lowest Common Ancestor of a Binary Search Tree
difficulty: Easy
topic: Binary Search Tree
source: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
solved_date: 2026-05-07
---

# Lowest Common Ancestor of a Binary Search Tree

## Intuition
Use the BST property to prune: if both targets are less than the current node, the LCA must be in the left subtree; if both are greater, go right. Otherwise the current node is the split point and is the LCA.

## Approach
Recurse with the BST value comparisons to direct the search. When neither condition fires — values split across the node, or the node equals one of the targets — return the current node immediately.

## Complexity
- Time: O(h) — O(log n) balanced, O(n) worst case
- Space: O(h)

## Code

```typescript
function lowestCommonAncestor(node: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    if (!node || node === p || node === q) return node;

    if (p.val < node.val && q.val < node.val) {
        return lowestCommonAncestor(node.left, p, q);
    }
    if (p.val > node.val && q.val > node.val) {
        return lowestCommonAncestor(node.right, p, q);
    }

    return node;
};
```

## Notes
- When neither `if` fires, one target is on each side (or equals node) — node is guaranteed to be the LCA, no need to recurse both sides.
- The generic binary tree LCA (without BST property) requires exploring both subtrees and checking `left && right`.
