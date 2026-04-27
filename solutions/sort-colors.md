---
problem: Sort Colors
difficulty: Medium
topic: Two Pointers
source: https://leetcode.com/problems/sort-colors/
solved_date: 2026-04-27
---

# Sort Colors

## Intuition
Only three distinct values, so a counting pass + overwrite pass produces the sort in O(n). Trades a second pass for simplicity.

## Approach
1. Pass 1: count occurrences of `0`, `1`, `2`.
2. Pass 2: overwrite the array in three contiguous regions sized by the counts.

## Complexity
- Time: O(n) — two linear passes.
- Space: O(1).

## Code

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let num0s = 0;
    let num1s = 0;
    let num2s = 0;

    for (let num of nums) {
        if (num===0) num0s++;
        if (num===1) num1s++;
        if (num===2) num2s++;
    }

    let counter=0;
    let bound = num0s;

    while (counter < bound) {
        nums[counter] = 0;
        counter++;
    }

    bound = counter + num1s;

    while (counter < bound) {
        nums[counter] = 1;
        counter++;
    }

    bound = counter + num2s;

    while (counter < bound) {
        nums[counter] = 2;
        counter++;
    }
};
```

## Notes
- Two-pass solution. Correct, but doesn't satisfy the **one-pass follow-up** which is the interview-worthy version.
- **One-pass — Dutch National Flag** (three-pointer partition):
  - `lo` = end of 0s region, `hi` = start of 2s region, `mid` = scanner.
  - Invariant: `[0, lo)` is 0s · `[lo, mid)` is 1s · `[mid, hi]` is unknown · `(hi, n)` is 2s.
  - At `nums[mid]`: if 0 → swap with `nums[lo]`, `lo++`, `mid++`; if 1 → `mid++`; if 2 → swap with `nums[hi]`, `hi--` (don't advance `mid` — the swapped-in value is unseen).
  - Loop while `mid <= hi`.
- Why `mid` doesn't advance on 2-swap: the value pulled in from `hi` came from the unknown region, so it still needs classification. On a 0-swap, the value pulled from `lo` came from the *1s region* (`[lo, mid)`), so it's already classified — safe to advance `mid`.
