---
problem: First Bad Version
difficulty: Easy
topic: Binary Search
source: https://leetcode.com/problems/first-bad-version/
solved_date: 2026-04-24
---

# Intuition
Find the leftmost `true` in an implicit boolean array — all versions before the first bad one return `false`, all from it onward return `true`. Binary search on the boundary.

# Approach
Converging pattern: `left < right`. When `isBadVersion(mid)` is true, mid might be the first bad — keep it in play with `right = mid`. When false, mid is definitely good, so `left = mid + 1`. Loop exits with `left === right` on the first bad version.

# Complexity
- Time complexity: O(log n)
- Space complexity: O(1)

# Code
```typescript []
var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let left = 1;
        let right = n;

        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        return left;
    };
};
```

# Notes
Left-boundary variant of the converging pattern. No early return — you want the *first* match, not just any match. After the loop, `left === right` — just return `left`. Bounds are 1-indexed (`left=1`, `right=n`).
