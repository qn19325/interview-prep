---
problem: Two Sum
difficulty: Easy
topic: Hash Map
source: https://leetcode.com/problems/two-sum/
solved_date: 2026-04-20
---

# Two Sum

## Intuition

HashMap — store each number's index, then scan for the complement.

## Approach

Build a full map of `num → index` first, then loop once more looking for `target - nums[i]`. The concern about duplicate values overwriting themselves is resolved by the two-pass approach: the map retains the *last* index for any duplicate, and the forward scan finds the *first* index of the search value — the `i !== foundIdx` guard handles the edge case where they'd collide on the same element.

## Complexity

- **Time:** O(n) — two linear passes
- **Space:** O(n) — map stores up to n entries

## Code

```typescript
function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();

    nums.forEach((num, idx) => {
        map.set(num, idx);
    });

    let solution: number[];

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            const foundIdx = map.get(diff);

            if (i !== foundIdx) {
                solution = [i, foundIdx];
                break;
            }
        }
    }

    return solution;
}
```

## Notes

- Could be done in one pass: insert into map *after* checking for the complement. Avoids the duplicate-index edge case entirely and halves the constant factor.
- Space complexity is O(n) — the map holds at most n entries.
