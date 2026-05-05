---
problem: Diameter of Binary Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/diameter-of-binary-tree/
solved_date: 2026-05-05
---

# Diameter of Binary Tree

## Intuition
The longest path through a node is `left height + right height`. The answer may pass through any node, not just the root, so track a running max in an outer variable.

## Approach
Bottom-up DFS returns height. At each node, update `result = max(result, left + right)`. The function returns `1 + max(left, right)` for the parent's height calculation.

## Complexity
- Time: O(n)
- Space: O(h)

## Code

```typescript
function diameterOfBinaryTree(root: TreeNode | null): number {
    let result = 0;

    function dfs(root: TreeNode | null): number {
        if (!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);

        result = Math.max(result, left + right);

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return result;
}
```

## Notes
- Classic case where the answer isn't the root's return value — outer variable required.
