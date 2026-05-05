---
problem: Subtree of Another Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/subtree-of-another-tree/
solved_date: 2026-05-05
---

# Subtree of Another Tree

## Intuition
At each node, check if the tree rooted there is identical to `subRoot`. If not, recurse into children.

## Approach
Two-function approach: `isSame` is the Phase 1 two-node skeleton (both null → true, one null → false, match values and recurse). `isSubtree` uses `isSame` at each node, then recurses left and right with `||`.

## Complexity
- Time: O(n · m) — `isSame` runs up to O(m) at each of n nodes.
- Space: O(h) — recursion stack depth.

## Code

```typescript
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    function isSame(left: TreeNode | null, right: TreeNode | null): boolean {
        if (!left && !right) return true;
        if (!left || !right) return false;
        return left.val === right.val && isSame(left.left, right.left) && isSame(left.right, right.right);
    }

    if (!root) return false;

    if (isSame(root, subRoot)) return true;

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
```

## Notes
- `isSame` is the two-node DFS helper from Phase 1. Subtree reuses it as a sub-function.
