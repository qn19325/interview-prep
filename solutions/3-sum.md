---
problem: 3Sum
difficulty: Medium
topic: Two Pointers
source: https://leetcode.com/problems/3sum/
solved_date: 2026-04-27
---

# 3Sum

## Intuition
Reduce 3Sum to 2Sum: fix one element and find pairs in the rest that sum to its negation. Sort first to enable two-pointer scanning and to make duplicate skipping trivial (equal values are now adjacent).

## Approach
1. Sort.
2. Outer loop `i` over the array (stop at `n - 2`). Early exit when `nums[i] > 0` — no triplet of sorted positives can sum to zero. Skip `i` when it duplicates the previous value.
3. Inner two-pointer scan on the suffix `[i+1, n-1]` with `target = -nums[i]`.
   - Sum equals target → record, advance both pointers, then skip duplicates on each side.
   - Sum < target → `left++`. Sum > target → `right--`.

## Complexity
- Time: O(n²) — outer n × inner two-pointer n. Sort is O(n log n), dominated.
- Space: O(log n) auxiliary for sort (output not counted).

## Code

```typescript
function threeSum(nums: number[]): number[][] {
    const res: number[][] = [];

    nums.sort((a, b) => a - b);

    for (let i=0; i<nums.length-2; i++) {
        if (nums[i] > 0) break;

        if (i > 0 && nums[i] === nums[i-1]) {
            continue;
        }

        const target = -nums[i];

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[left] + nums[right];

            if (sum === target) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while (nums[left] === nums[left-1] && left < right) {
                    left++;
                }
                while (nums[right] === nums[right+1] && right > left) {
                    right--;
                }
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return res;
};
```

## Notes
- Duplicate handling has two layers: outer `i` skip prevents repeat first-elements; inner skip after a match prevents repeat `(left, right)` pairs given a fixed `i`. Both are needed.
- `nums[i] > 0` early break works only because the array is sorted — once the smallest of three is positive, all three are positive and can't sum to zero.
