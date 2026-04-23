---
problem: Binary Search
difficulty: Easy
topic: Binary Search
source: https://leetcode.com/problems/binary-search/
solved_date: 2026-04-23
---

# Intuition
Classic binary search — halve the search space each iteration by comparing the midpoint to the target.

# Approach
Maintain `i` and `j` as inclusive bounds on the valid search range. Compute `mid` each iteration, narrow the range by moving `i` or `j` past `mid` depending on whether the midpoint is too large or too small. Exit when found or bounds cross.

# Complexity
- Time complexity: O(log n)
- Space complexity: O(1)

# Code
```typescript []
function search(nums: number[], target: number): number {
    let i=0;
    let j=nums.length-1;
    let mid = Math.floor((i+j) / 2);

    while (nums[mid] !== target && i <= j) {
        if (nums[mid] > target) {
            j = mid-1;
        } else {
            i = mid+1;
        } 
        mid = Math.floor((i+j) / 2);
    } 

    return nums[mid] === target ? mid : -1;
};
```

# Notes
`j` must be initialised to `nums.length - 1` (not `nums.length`) to keep both pointers within valid index bounds at all times. Starting at `nums.length` causes `nums[mid]` to be `undefined` when the target exceeds all elements.
