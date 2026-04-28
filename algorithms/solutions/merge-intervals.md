---
problem: Merge Intervals
difficulty: Medium
topic: Array, Sorting
source: https://leetcode.com/problems/merge-intervals/
solved_date: 2026-04-22
---

# Intuition
Intervals pattern — sort first so overlapping intervals are adjacent.

# Approach
Sort by start time. Push the first interval into the result. Loop through remaining intervals: if the current interval's start is greater than the last result's end, no overlap — push it. Otherwise, extend the last result's end to the max of both ends.

# Complexity
- Time complexity: O(n log n) — dominated by sort
- Space complexity: O(n) — result array

# Code
```typescript
function merge(intervals: number[][]): number[][] {
    let res: number[][] = [];

    intervals.sort((a, b) => a[0] - b[0]);

    res.push(intervals[0])

    for (let i=1; i<intervals.length; i++) {
        const prevInterval = res[res.length-1];
        const curInterval = intervals[i];

        if (prevInterval[1] < curInterval[0]) {
            res.push(curInterval)
            continue;
        }
            
        prevInterval[1] = Math.max(prevInterval[1], curInterval[1]);
    }

    return res;
};
```

# Notes
Mark to redo. Mutates the result array in-place when merging (prevInterval is a reference) — intentional but easy to miss.
