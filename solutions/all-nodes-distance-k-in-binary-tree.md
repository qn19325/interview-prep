---
problem: All Nodes Distance K in Binary Tree
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/
solved_date: 2026-05-07
---

# All Nodes Distance K in Binary Tree

## Intuition
The tree only allows downward traversal, but we need to move upward toward parents too. Preprocess parent pointers so the tree can be treated as an undirected graph, then DFS from the target.

## Approach
1. DFS the whole tree once, recording each node's parent in a map.
2. DFS again from `target` with a visited set, traversing parent, left, and right at each step.
3. Collect every node reached at exactly depth `k`.

## Complexity
- Time: O(n)
- Space: O(n)

## Code

```typescript
function distanceK(root: TreeNode | null, target: TreeNode | null, k: number): number[] {
    const res: number[] = [];

    const map = new Map<TreeNode, TreeNode | null>();

    function dfs(node: TreeNode | null): void {
        if (!node) return;

        if (node.left && !map.has(node.left)) map.set(node.left, node);
        if (node.right && !map.has(node.right)) map.set(node.right, node);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    const set = new Set<TreeNode>();

    function dfsDepth(node: TreeNode | null, depth: number): void {
        if (!node) return;
        if (set.has(node)) return;

        set.add(node);

        if (depth === k) res.push(node.val);

        dfsDepth(map.get(node), depth + 1);
        dfsDepth(node.left, depth + 1);
        dfsDepth(node.right, depth + 1);
    }

    dfsDepth(target, 0);

    return res;
}
```

## Notes
- `map.get(node)` returns `undefined` for the root (no entry) — `dfsDepth` handles `null | undefined` the same way via the `!node` guard.
- Parent map only needs to be set once per child, hence the `!map.has` guards.
