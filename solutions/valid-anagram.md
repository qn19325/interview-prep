---
problem: Valid Anagram
difficulty: Easy
topic: Hash Map, String
source: https://leetcode.com/problems/valid-anagram/
solved_date: 2026-04-22
---

# Intuition
Two approaches: HashMap frequency count, or sort both strings and compare. HashMap is O(n) time vs O(n log n) for sort.

# Approach
HashMap — build frequency maps for both strings in a single pass, then compare. Early exit if lengths differ.

# Complexity
- Time complexity: O(n)
- Space complexity: O(1) — at most 26 lowercase letter keys

# Code
```typescript
function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) {
        return false;
    }

    const sMap = new Map<string, number>();
    const tMap = new Map<string, number>();

    for (let i=0; i<s.length; i++) {
        sMap.get(s[i]) ? sMap.set(s[i], sMap.get(s[i]) + 1) : sMap.set(s[i], 1);
        tMap.get(t[i]) ? tMap.set(t[i], tMap.get(t[i]) + 1) : tMap.set(t[i], 1);
    }

    let res = true;

    sMap.forEach((val, key) => {
        const tCount = tMap.get(key);
        if (!tCount || val !== tCount) {
            res = false;
        }
    })

    return res
};
```

# Notes
Could simplify to a single map: increment for s, decrement for t, then check all values are 0. Saves one map and one iteration.
