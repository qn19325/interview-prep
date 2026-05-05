---
problem: Symmetric Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/symmetric-tree/
solved_date: 2026-05-05
---

# Symmetric Tree

## Intuition
A tree is symmetric if its left and right subtrees are mirror images. Mirror means: outer children match each other, inner children match each other.

## Approach
A helper `mirror(left, right)` compares two nodes that should be reflections of each other. Base cases: both null → `true`; one null → `false`. Then check `left.val === right.val` and recurse: `mirror(left.left, right.right)` (outer pair) and `mirror(left.right, right.left)` (inner pair). The main function calls `mirror(root.left, root.right)`.

## Complexity
- Time: O(n) — every node visited once.
- Space: O(h) — recursion stack height.

## Code

```typescript
function isSymmetric(root: TreeNode | null): boolean {
    function mirror(left: TreeNode | null, right: TreeNode | null): boolean {
        if (!left && !right) return true;
        if (!left || !right) return false;

        return left.val === right.val && mirror(left.left, right.right) && mirror(left.right, right.left);
    }
    return mirror(root.left, root.right);
};
```

## Notes
- A helper is needed because `isSymmetric` takes one node, but the comparison requires two — one from each side.
- The mirroring in the recursive calls is the key: outer pair is `left.left / right.right`; inner pair is `left.right / right.left`. Keep the pairing consistent or results will be wrong.
