---
problem: Determine if Two Events Have Conflict
difficulty: Easy
topic: Array
source: https://leetcode.com/problems/determine-if-two-events-have-conflict/
solved_date: 2026-04-21
---

# Determine if Two Events Have Conflict

## Intuition
Interval problem — check if two intervals overlap.

## Approach
Define non-overlap first (easier — only two cases):
- A ends before B starts, OR
- B ends before A starts

Negate both conditions to get the overlap rule:
- A starts before or when B ends, AND
- B starts before or when A ends

String comparison works directly because times are in `"HH:MM"` format — lexicographic order matches chronological order.

## Complexity
- Time: O(1)
- Space: O(1)

## Code
```typescript
function haveConflict(event1: string[], event2: string[]): boolean {
    return event1[0] <= event2[1] && event2[0] <= event1[1];
}
```

## Notes
- Core interval overlap pattern: `a.start <= b.end && b.start <= a.end` — derive by negating non-overlap, not by enumerating overlap cases.
- Applies to all interval problems (Meeting Rooms, Merge Intervals, Insert Interval).
