---
problem: Convert Sorted Array to Binary Search Tree
difficulty: Easy
topic: Binary Search Tree
source: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
solved_date: 2026-05-07
---

# Convert Sorted Array to Binary Search Tree

## Intuition
Always picking the middle element as root guarantees the resulting BST is height-balanced, since it splits the remaining elements into two equal halves.

## Approach
Binary divide: compute `mid`, make it the root, recurse on `[lo, mid-1]` for the left subtree and `[mid+1, hi]` for the right subtree.

## Complexity
- Time: O(n)
- Space: O(log n)

## Code

```typescript
function sortedArrayToBST(nums: number[]): TreeNode | null {
    function dfs(nums: number[], lo: number, hi: number): TreeNode | null {
        if (lo > hi) return null;

        const mid = Math.floor((lo + hi) / 2);
        const node = new TreeNode(nums[mid]);

        node.left = dfs(nums, lo, mid - 1);
        node.right = dfs(nums, mid + 1, hi);

        return node;
    }

    return dfs(nums, 0, nums.length - 1);
}
```

## Notes
