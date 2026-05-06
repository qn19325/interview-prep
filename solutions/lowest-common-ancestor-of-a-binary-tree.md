---
problem: Lowest Common Ancestor of a Binary Tree
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/
solved_date: 2026-05-06
---

# Lowest Common Ancestor of a Binary Tree

## Intuition
Find the full root-to-p and root-to-q paths, then walk back from the deepest shared index.

## Approach
DFS twice to collect both paths (as node arrays). Take the shorter path length, then scan from deepest to shallowest comparing node values; the first match is the LCA.

## Complexity
- Time: O(n)
- Space: O(h) recursion + O(h) per path array

## Code

```typescript
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    const res: TreeNode[][] = [];

    function dfs(node: TreeNode | null, state: TreeNode[]): void {
        if (!node) return;
        state.push(node);
        if (node === p || node === q) {
            res.push([...state]);
        }
        dfs(node.left, state);
        dfs(node.right, state);
        state.pop();
    }

    dfs(root, []);

    const minLength = Math.min(res[0].length, res[1].length);
    for (let i = minLength - 1; i >= 0; i--) {
        if (res[0][i].val === res[1][i].val) {
            return res[0][i];
        }
    }

    return null;
}
```

## Notes
- Classic single-pass O(n) alternative: return the node itself when found; if both subtrees return non-null, current node is the LCA; otherwise propagate the non-null side up.
