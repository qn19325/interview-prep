---
problem: Path Sum III
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/path-sum-iii/
solved_date: 2026-05-06
---

# Path Sum III

## Intuition

Count all downward paths summing to `targetSum`. Paths don't need to start at root or end at a leaf. Brute force: restart a DFS from every node as a potential path start, tracking the running sum.

## Approach

1. `dfsy` visits every node — for each, kicks off `dfs` to count paths starting there.
2. `dfs(node, state)` accumulates a running sum from the current path start.
3. When `state === targetSum`, increment `res`.
4. Recurse into both children.

## Complexity

- Time: O(n²) — `dfsy` visits n nodes, each starts an O(n) `dfs`
- Space: O(n) — recursion stack depth

## Code

```typescript
function pathSum(root: TreeNode | null, targetSum: number): number {
    let res: number = 0;

    function dfs(node: TreeNode | null, state: number): void {
        if (!node) return;

        state += node.val;

        if (state === targetSum) res++;

        dfs(node.left, state);
        dfs(node.right, state);
    }

    function dfsy(node: TreeNode | null): void {
        if (!node) return;

        dfs(node, 0);

        dfsy(node.left);
        dfsy(node.right);
    }

    dfsy(root);

    return res;
}
```

## Notes

- Optimal approach: prefix sum + hashmap. Track `prefixSum -> count`; at each node check if `curSum - targetSum` exists in the map. Single O(n) pass.
