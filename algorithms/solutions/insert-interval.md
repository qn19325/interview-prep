---
problem: Insert Interval
difficulty: Medium
topic: Array
source: https://leetcode.com/problems/insert-interval/
solved_date: 2026-04-20
---

# Insert Interval

## Intuition

Fumbled my way through this one, had the right intuition though.

## Approach

3 states:
- No overlap — current interval ends before new interval starts: collect as-is
- Overlap — merge by taking the min low and max high across all overlapping intervals
- No overlap — current interval starts after new interval ends: collect as-is

## Complexity

- **Time:** O(n)
- **Space:** O(n)

## Code

```typescript
function insert(intervals: number[][], newInterval: number[]): number[][] {
    if (!intervals.length) {
        return [newInterval];
    }

    let i = 0;
    let newIntervals: number[][] = [];

    // When the current interval is less than the new interval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        newIntervals.push(intervals[i]);
        i++;
    }

    const curIntervalLow = intervals[i];
    const newLow = curIntervalLow ? Math.min(curIntervalLow[0], newInterval[0]) : newInterval[0];

    // When the current interval and the new interval overlap
    while (i < intervals.length && !(intervals[i][1] < newInterval[0] || intervals[i][0] > newInterval[1])) {
        i++;
    }

    const curIntervalHigh = intervals[i-1];
    const newHigh = curIntervalHigh ? Math.max(curIntervalHigh[1], newInterval[1]) : newInterval[1];

    newIntervals.push([newLow, newHigh])

    // When the current interval is greater than the new interval
    while (i < intervals.length && intervals[i][0] > newInterval[1]) {
        newIntervals.push(intervals[i]);
        i++;
    }

    return newIntervals;
};
```

## Notes

- The third `while` condition `intervals[i][0] > newInterval[1]` is always true by the time it runs — the second loop already advanced past everything overlapping. Can simplify to `while (i < intervals.length)`.
- `curIntervalHigh = intervals[i-1]` is subtle: it relies on `i` having advanced during the overlap loop. A more readable alternative merges inline as it goes:
  ```typescript
  let lo = newInterval[0], hi = newInterval[1];
  while (i < intervals.length && intervals[i][0] <= hi) {
      lo = Math.min(lo, intervals[i][0]);
      hi = Math.max(hi, intervals[i][1]);
      i++;
  }
  newIntervals.push([lo, hi]);
  ```
