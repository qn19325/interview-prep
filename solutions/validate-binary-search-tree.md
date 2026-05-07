---
problem: Validate Binary Search Tree
difficulty: Medium
topic: Binary Search Tree
source: https://leetcode.com/problems/validate-binary-search-tree/
solved_date: 2026-05-07
---

# Validate Binary Search Tree

## Intuition
A node's value must fall within a valid range determined by its ancestors — not just be greater than its left child or less than its right child. Pass min/max bounds down the recursion so every node is validated against the full constraint.

## Approach
DFS with a `(min, max)` window. Going left tightens the max to the current node's value; going right tightens the min. Return false as soon as any node falls outside its window.

## Complexity
- Time: O(n)
- Space: O(h)

## Code

```typescript
function isValidBST(root: TreeNode | null): boolean {
    function dfs(node: TreeNode | null, min: number, max: number): boolean {
        if (!node) return true;

        const left = dfs(node.left, min, node.val);
        const right = dfs(node.right, node.val, max);

        return left && right && node.val > min && node.val < max;
    }

    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}
```

## Notes
- Strict inequalities (`>` / `<`) — equal values are not valid in a BST by definition.
