---
problem: Search in Rotated Sorted Array
difficulty: Medium
topic: Binary Search
source: https://leetcode.com/problems/search-in-rotated-sorted-array/
solved_date: 2026-04-24
---

# Intuition
After rotation, one half of the array is always sorted. Use that to decide which half the target could be in.

# Approach
Converging pattern: `left < right`. Each iteration, determine which half is sorted (`nums[left] < nums[mid]` → left sorted, else right sorted). Check if the target falls in the sorted half using explicit boundary checks for `left` and `right` before narrowing. If target is in the sorted half, discard the other; otherwise discard the sorted half.

# Complexity
- Time complexity: O(log n)
- Space complexity: O(1)

# Code
```typescript []
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;
        if (nums[left] === target) return left;
        if (nums[right] === target) return right;

        if (nums[left] < nums[mid]) {
            if (target < nums[mid] && target > nums[left]) {
                right = mid;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target < nums[right]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
    }

    return nums[left] === target ? left : -1;
};
```

# Notes
The `nums[left]` and `nums[right]` early checks handle the boundary cases cleanly, making the inner conditions safe to use strict inequalities (`>`, `<`). Without them, the conditions need to be inclusive (`>=`, `<=`) to avoid skipping endpoint values.
