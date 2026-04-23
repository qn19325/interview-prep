---
problem: Find All Anagrams in a String
difficulty: Medium
topic: Sliding Window (Fixed)
source: https://leetcode.com/problems/find-all-anagrams-in-a-string/
solved_date: 2026-04-23
---

# Intuition
Fixed sliding window — window size is always `p.length`. Slide across `s`, comparing frequency maps at each position.

# Approach
Build a frequency map for `p`. Use a persistent `j` pointer to lazily build the first window then add exactly one character per outer iteration. After comparing maps, remove the leftmost character to slide the window forward.

# Complexity
- Time complexity: O(n · |p|) — `compareMaps` iterates over `p`'s characters at each of the n window positions
- Space complexity: O(1) — maps bounded by alphabet size

# Code
```typescript []
function findAnagrams(s: string, p: string): number[] {
    let res: number[] = []

    const sMap = new Map<string, number>();
    const pMap = new Map<string, number>();

    for (let elem of p) {
        const val = pMap.get(elem) + 1 || 1;
        pMap.set(elem, val);
    }

    let j=0;
    
    for (let i=0; i<s.length; i++) {
        while (j - i < p.length && j < s.length) {
            const val = sMap.get(s[j]) + 1 || 1;
            sMap.set(s[j], val);
            j++;
        }

        if (compareMaps(sMap, pMap)) {
            res.push(i);
        }

        const val = sMap.get(s[i])
        if (val > 1) {
            sMap.set(s[i], val - 1)
        } else {
            sMap.delete(s[i]);
        }
    }

    return res;
}

function compareMaps(a: Map<string, number>, b: Map<string, number>): boolean {
    if (a.size !== b.size) {
        return false;
    }

    let same = true;

    a.forEach((val, key) => {
        if (val !== b.get(key)) {
            same = false;
        }
    })

    return same;
}
```

# Notes
**O(n) optimisation — match counter:** Replace `compareMaps` with a `matches` integer tracking how many distinct characters currently satisfy `sMap[c] === pMap[c]`. When `matches === pMap.size` the window is an anagram. Each add/remove updates the counter in O(1) by checking before and after the mutation whether the character crossed its target count. Characters absent from `pMap` are skipped entirely. Eliminates the O(|p|) scan per window.
