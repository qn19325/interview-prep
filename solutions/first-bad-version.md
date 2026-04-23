---
problem: First Bad Version
difficulty: Easy
topic: Binary Search
source: https://leetcode.com/problems/first-bad-version/
solved_date: 2026-04-23
---

# Intuition
Find the leftmost `true` in an implicit boolean array — all versions before the first bad one are `false`, all from it onward are `true`. Binary search on the boundary.

# Approach
Standard binary search with 1-indexed bounds (`i=1`, `j=n`). No early exit — let `i` and `j` cross. When the loop exits, `i` is sitting on the first bad version.

# Complexity
- Time complexity: O(log n)
- Space complexity: O(1)

# Code
```typescript []
var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let i=1;
        let j=n;

        while (i <= j) {
            const mid = Math.floor((j+i) / 2)
            if (isBadVersion(mid)) {
                j = mid - 1;
            } else {
                i = mid + 1
            }
        }

        return i;
    };
};
```

# Notes
Key distinction from value-search binary search: no early exit on match. The goal is the boundary between false/true, so you always run to completion and return `i`. Bounds are 1-indexed (`i=1`, `j=n`) — a previous attempt with `i=0, j=n-1` caused `isBadVersion(0)` to be called when version 1 was bad.
