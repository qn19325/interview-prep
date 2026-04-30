---
problem: Majority Element
difficulty: Easy
topic: Sorting
source: https://leetcode.com/problems/majority-element/
solved_date: 2026-04-21
---

# Majority Element ↩ redo (Boyer-Moore Voting)

## Intuition

Sort

## Approach

Sort. Return middle element

## Complexity

- **Time:** O(nlog(n)) (assuming thats complexity of sort)
- **Space:** ?

## Code

```typescript []
function majorityElement(nums: number[]): number {
    let candidate = nums[0];
    let count = 0;

    for (let num of nums) {
        if (count === 0) candidate = num;
        count += num === candidate ? 1 : -1; 
    }

    return candidate;
};
```

## Notes

Redo with Boyer-Moore Majority Vote — O(n) time, O(1) space. Maintain a candidate and a count; increment on match, decrement on mismatch; when count hits zero, replace candidate. See [[algorithms]] Voting / Cancellation pattern.
