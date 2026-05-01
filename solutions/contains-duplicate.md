---
problem: Contains Duplicate
difficulty: Easy
topic: Hash Set
source: https://leetcode.com/problems/contains-duplicate/
solved_date: 2026-04-21
---

# Contains Duplicate

## Intuition

Got pattern here straight away, initially used HashMap but Set is better

## Approach

Run through array adding elements to a set if not in set, else break and return true

## Complexity

- **Time:** O(n)
- **Space:** O(n)

## Code

```typescript
function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
};
```

## Notes

Pattern: hash set membership check. Early-return on first duplicate found.
