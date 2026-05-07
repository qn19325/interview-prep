---
problem: Kth Smallest Element in a BST
difficulty: Medium
topic: Binary Search Tree
source: https://leetcode.com/problems/kth-smallest-element-in-a-bst/
solved_date: 2026-05-07
---

# Kth Smallest Element in a BST

## Intuition
In-order traversal of a BST yields values in ascending order. Collecting values until the array reaches length k gives the kth smallest at index k-1.

## Approach
DFS in-order (left → current → right), pushing to a shared state array. Check `state.length === k` at entry and before each push to prune once k elements are collected.

## Complexity
- Time: O(h + k) — stops as soon as k elements are found
- Space: O(h + k)

## Code

```typescript
function kthSmallest(root: TreeNode | null, k: number): number {
    function dfs(node: TreeNode | null, state: number[]): number[] {
        if (!node || state.length === k) return [];
        dfs(node.left, state);
        if (state.length < k) state.push(node.val);
        dfs(node.right, state);

        return state;
    }
    return dfs(root, [])[k - 1];
};
```

## Notes
- Guard before `state.push` is necessary — left recursion may fill the array to k before the current node is visited.
- Pass the same array reference down; do not spread/copy on each call.
