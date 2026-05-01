---
problem: Longest Substring Without Repeating Characters
difficulty: Medium
topic: Sliding Window
source: https://leetcode.com/problems/longest-substring-without-repeating-characters/
solved_date: 2026-04-23
---

# Intuition
Sliding Window

# Approach
Maintain substring content in Set
While Set doesn't have the next character expand window right
While Set has the next character close window from left

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```typescript []
function lengthOfLongestSubstring(s: string): number {
    const map = new Set<string>();

    let longest = 0;
    let i=0;
    let j=0;

    for (let i=0; i<s.length; i++) {
        while (j < s.length && !map.has(s[j])) {
            map.add(s[j]);
            j++;
        }

        longest = Math.max(longest, map.size);
        map.delete(s[i])
    }

    return longest
};
```