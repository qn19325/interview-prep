---
problem: Product of Array Except Self
difficulty: Medium
topic: Array
source: https://leetcode.com/problems/product-of-array-except-self/
solved_date: 2026-04-21
redo: true
---

# Product of Array Except Self

## Intuition

## Approach

## Complexity

- **Time:** O(n)
- **Space:** O(n)

## Code

```typescript
function productExceptSelf(nums: number[]): number[] {
    let initialisedArr: number[] = [];

    for (let i=0; i<nums.length; i++) {
        initialisedArr.push(1);
    }

    let left = 1;
    for (let i=0; i<nums.length; i++) {
        initialisedArr[i] *= left;
        left *= nums[i];
    }

    let right = 1;
    for (let i=nums.length-1; i>=0; i--) {
        initialisedArr[i] *= right;
        right *= nums[i];
    }

    return initialisedArr;
};
```

## Notes

Marked for redo. Left/right prefix product approach — no division used.
