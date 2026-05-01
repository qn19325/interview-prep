---
problem: Time Based Key-Value Store
difficulty: Medium
topic: Binary Search
source: https://leetcode.com/problems/time-based-key-value-store/
solved_date: 2026-04-24
---

# Time Based Key-Value Store

## Intuition
Each key maps to a list of (timestamp, value) pairs arriving in strictly increasing timestamp order. `get` must return the value with the largest timestamp ≤ the query — a classic "find rightmost position ≤ target" binary search.

## Approach
Store each key's entries in a `Map<number, string>`. Since `set` is always called with strictly increasing timestamps and JS `Map` preserves insertion order, `Array.from(cur.keys())` already comes out sorted — no explicit sort needed.

Binary search the keys array for the largest timestamp ≤ query. Loop invariant: narrow [i, j] until i == j. After the loop, `keys[i]` is the candidate — return its value if ≤ timestamp, otherwise check i-1.

## Complexity
- Time: O(n) per `get` (dominated by `Array.from` key extraction), O(1) per `set`
- Space: O(n) total entries

## Code

```typescript
type time = Map<number, string>;
class TimeMap {
    private map: Map<string, time>;

    constructor() {
        this.map = new Map<string, time>();
    }
    
    set(key: string, value: string, timestamp: number): void {
        const cur = this.map.get(key);
        if (cur) {
            cur.set(timestamp, value)
        } else {
            const map = new Map<number, string>();
            map.set(timestamp, value);
            this.map.set(key, map);
        }
    }

    get(key: string, timestamp: number): string {
        const cur = this.map.get(key);

        if (!cur) {
            return "";
        }

        const keys = Array.from(cur.keys());

        let i = 0;
        let j = keys.length - 1;

        while (i < j) {
            const mid = Math.floor((i + j) / 2);
            
            if (keys[mid] === timestamp) {
                return cur.get(keys[mid]);
            }

            if (timestamp < keys[mid]) {
                j = mid;
            } else {
                i = mid + 1;
            }
        }

        if (keys[i] <= timestamp) {
            return cur.get(keys[i]);
        }

        if (keys[i-1] <= timestamp) {
            return cur.get(keys[i-1]);
        }

        return "";
    }
}
```

## Notes
- JS `Map` preserves insertion order, so keys from `Array.from(cur.keys())` are already sorted given strictly increasing timestamps — explicit `.sort()` is unnecessary overhead.
- True O(log n) `get` would require replacing the inner Map with an array of `[timestamp, value]` tuples, so binary search runs directly without extracting keys first.
