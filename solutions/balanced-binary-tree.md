---
problem: Balanced Binary Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/balanced-binary-tree/
solved_date: 2026-05-05
---

# Balanced Binary Tree

## Intuition
Use height (a number) internally to check balance at every node, but the problem asks for a boolean — so a helper sub-function is needed.

## Approach
Bottom-up DFS returns height. At each node, check `|left - right| <= 1` and short-circuit via an outer `isBalanced` flag. The outer function calls the helper and returns the flag.

## Complexity
- Time: O(n)
- Space: O(h)

## Code

```typescript
function isBalanced(root: TreeNode | null): boolean {
    let balanced = true;

    function dfs(root: TreeNode | null): number {
        if (!root) return 0;

        const left = dfs(root.left);
        const right = dfs(root.right);

        balanced = !balanced ? balanced : Math.abs(left - right) <= 1;

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return balanced;
}
```

## Notes
- Sub-function needed because internal return type (number for height) differs from problem return type (boolean).
- Outer variable pattern: answer isn't the root's return value.
