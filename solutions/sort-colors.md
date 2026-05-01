---
problem: Sort Colors
difficulty: Medium
topic: Two Pointers
source: https://leetcode.com/problems/sort-colors/
solved_date: 2026-04-27 ↩ redo 2026-04-27
---

# Sort Colors

## Intuition
Three distinct values means a 3-way partition. Maintain four contiguous regions — settled 0s, settled 1s, unknown, settled 2s — and shrink the unknown region one element at a time. Dutch National Flag.

## Approach
Three pointers: `lo` = end of 0s region, `hi` = start of 2s region, `mid` = scanner walking the unknown region.

**Invariant** (holds at every loop check):
- `[0, lo)` → all 0s
- `[lo, mid)` → all 1s
- `[mid, hi]` → unknown
- `(hi, n)` → all 2s

At `nums[mid]`:
- `0` → swap with `nums[lo]`, `lo++`, `mid++` (value pulled from `lo` came from the 1s region — already classified, safe to advance `mid`)
- `1` → `mid++`
- `2` → swap with `nums[hi]`, `hi--` (do **not** advance `mid` — the value pulled from `hi` came from the unknown region, still needs classification)

Loop while `mid <= hi`. When the unknown region empties, the four settled regions cover the array.

## Complexity
- Time: O(n) — single pass; each step shrinks the unknown region.
- Space: O(1).

## Code

```typescript
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
    let lo = 0;
    let mid = 0;
    let hi = nums.length - 1;

    while (mid <= hi) {
        if (nums[mid] === 0) {
            const temp = nums[mid];
            nums[mid] = nums[lo];
            nums[lo] = temp;
            lo++;
            mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            const temp = nums[mid];
            nums[mid] = nums[hi];
            nums[hi] = temp;
            hi--;
        }
    }
};
```

## Notes
- **`mid` is a scanner, not a midpoint.** Initial slip: `mid = (lo+hi)/2` borrowed from binary-search muscle memory. Here `mid` walks the unknown region from the left, so `mid = lo = 0` at the start.
- The asymmetry (advance `mid` on 0-swap, hold `mid` on 2-swap) follows directly from the invariant: the value that gets pulled into `mid`'s slot is *classified* on a 0-swap (came from the 1s region) but *unclassified* on a 2-swap (came from the unknown region).
- Earlier two-pass counting solution worked but missed the interview-worthy one-pass variant.
