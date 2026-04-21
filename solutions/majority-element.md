---
problem: Majority Element
difficulty: Easy
topic: Sorting
source: https://leetcode.com/problems/majority-element/
solved_date: 2026-04-21
---

# Majority Element

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
    nums.sort();
    return nums[Math.floor(nums.length / 2)]
};
```

## Notes

Is HashMap + return when count is greater than 2 a better solution?
