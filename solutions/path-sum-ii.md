---
problem: Path Sum II
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/path-sum-ii/
solved_date: 2026-05-06
---

# Path Sum II

## Intuition
Backtracking DFS: build the current path as we go down, check the sum at each leaf, pop on the way back up.

## Approach
Push each node onto a `state` array. At a leaf, compute the sum and push a copy to results if it matches `targetSum`. After recursing into both children, pop the node to restore state for the parent's branch.

## Complexity
- Time: O(n²) — O(n) nodes × O(n) copy per valid path
- Space: O(h) recursion stack + O(n) for results

## Code

```typescript
function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    const res: number[][] = [];

    function dfs(node: TreeNode | null, state: number[]): void {
        if (!node) return;

        state.push(node.val);

        if (!node.left && !node.right) {
            const sum = state.reduce((a, b) => a + b, 0);
            if (sum === targetSum) res.push([...state]);
        }

        dfs(node.left, state);
        dfs(node.right, state);
        state.pop();
    }

    dfs(root, []);

    return res;
}
```

## Notes
- Track running sum instead of reducing at each leaf to get O(n) time per node.
