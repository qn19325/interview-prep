---
problem: Binary Search
difficulty: Easy
topic: Binary Search
source: https://leetcode.com/problems/binary-search/
solved_date: 2026-04-24
---

# Intuition
Halve the search space each iteration by comparing the midpoint to the target.

# Approach
Converging pattern: `left < right` loop, so the loop exits when `left === right` — one candidate remains. Move `left = mid + 1` when target is to the right (mid is definitively not the answer); `right = mid` when target is to the left or equal (mid stays in play). Return early on exact match. After the loop, check `nums[left]`.

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

        if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid;
        } else {
            return mid;
        }
    }

    return nums[left] === target ? left : -1;
};
```

# Notes
Converging pattern (`left < right`): loop exits with `left === right`, one candidate to check. Key asymmetry: `left = mid + 1` (mid ruled out) vs `right = mid` (mid stays in play). This keeps the invariant that the target is always within `[left, right]`.
