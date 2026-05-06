---
problem: Construct Binary Tree from Preorder and Inorder Traversal
difficulty: Medium
topic: Binary Tree
source: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
solved_date: 2026-05-06
---

# Construct Binary Tree from Preorder and Inorder Traversal

## Intuition

`preorder[0]` is always the root. Locating that value in `inorder` splits the array into left and right subtrees. Recurse on each half, shifting off the front of `preorder` each time to advance to the next root.

## Approach

1. Base case: empty `inorder` → return `null`.
2. Shift `preorder[0]` as the current root value.
3. Find its index in `inorder` — everything left is the left subtree, everything right is the right subtree.
4. Recurse left with `inorder.slice(0, curIdx)`, right with `inorder.slice(curIdx + 1)`.
5. Return the constructed node.

## Complexity

- Time: O(n²) — `indexOf` and `shift` are each O(n) per call
- Space: O(n²) — `slice` creates new arrays at each level

## Code

```typescript
function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    function dfs(preorder: number[], inorder: number[]): TreeNode | null {
        if (!inorder.length) return null;

        const curVal = preorder.shift();
        const curIdx = inorder.indexOf(curVal);

        const node = new TreeNode(curVal);
        node.left = dfs(preorder, inorder.slice(0, curIdx));
        node.right = dfs(preorder, inorder.slice(curIdx + 1));

        return node;
    }

    return dfs(preorder, inorder);
}
```

## Notes

- `preorder.shift()` mutates the shared array across all recursive calls — this is intentional. Each recursive call consumes the next root in preorder order.
- Optimal approach: hashmap `{ val -> inorderIndex }` + index params instead of `indexOf` + `slice` → O(n) time, O(n) space.
