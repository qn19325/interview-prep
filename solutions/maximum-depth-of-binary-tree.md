---
problem: Maximum Depth of Binary Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/maximum-depth-of-binary-tree/
solved_date: 2026-05-05
---

# Maximum Depth of Binary Tree

## Intuition
Post-order DFS — let each subtree report its own depth, then the current node is `1 +` whichever side is deeper.

## Approach
Base case: `null` returns `0`. Recurse on left and right, then return `1 + Math.max(left, right)`. The depth bubbles up naturally; no counter needed.

## Complexity
- Time: O(n) — every node visited once.
- Space: O(h) — recursion stack, where h is the tree height. O(n) worst case on a skewed tree.

## Code

```typescript
function maxDepth(root: TreeNode | null): number {
    if (root === null) return 0;

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return 1 + Math.max(left, right);
};
```

## Notes
- Depth is returned up the call stack, not accumulated in a counter. Each frame contributes `1`; `Math.max` picks the deeper path.
