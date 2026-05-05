---
problem: Invert Binary Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/invert-binary-tree/
solved_date: 2026-05-05
---

# Invert Binary Tree

## Intuition
Swap every node's left and right children. Post-order — invert the subtrees first, then swap at the current node.

## Approach
Base case: `null` returns `null`. Recurse on left and right, capturing the inverted subtrees, then assign them in reverse (`root.left = right`, `root.right = left`). Return `root`.

## Complexity
- Time: O(n) — every node visited once.
- Space: O(h) — recursion stack height.

## Code

```typescript
function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.right = left;
    root.left = right;

    return root;
};
```

## Notes
- Capture both subtrees before swapping — avoids reading an already-overwritten child.
- Pre-order works too (swap first, then recurse), but post-order reads more naturally as "build bottom-up."
