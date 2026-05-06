---
problem: Binary Tree Right Side View
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/binary-tree-right-side-view/
solved_date: 2026-05-06
---

# Binary Tree Right Side View

## Intuition
The rightmost visible node at each depth is the last one visited if we traverse right-last. Track depth → value in a map so later (rightward) nodes overwrite earlier ones.

## Approach
DFS left-first, pre-set `res[depth]` based on which child exists before recursing. Because we visit the left subtree first and the right subtree second, right-subtree nodes overwrite left-subtree nodes at the same depth.

## Complexity
- Time: O(n)
- Space: O(h)

## Code

```typescript
function rightSideView(root: TreeNode | null): number[] {
    if (!root) return [];

    const res = new Map<number, number>();
    res.set(0, root.val);

    function dfs(node: TreeNode | null, state: number): void {
        if (!node) return;

        const newDepth = 1 + state;
        if (node.right) {
            res.set(newDepth, node.right.val);
        } else if (node.left) {
            res.set(newDepth, node.left.val);
        }

        dfs(node.left, newDepth);
        dfs(node.right, newDepth);
    }

    dfs(root, 0);

    return Array.from(res.values());
}
```

## Notes
- Bug: pre-setting depth values based on a node's children can be overwritten incorrectly. E.g. tree `1→(2→(4,5), 3→(7))` — node 2 sets depth 2 = 5, then node 3 sets depth 2 = 7, but the correct answer is 5 (rightmost visible).
- Correct approach: DFS right-first and only set `res[depth]` on first visit (`if (!res.has(depth))`), or use BFS and take the last node per level.
