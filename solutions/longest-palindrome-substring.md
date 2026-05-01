---
problem: Longest Palindromic Substring
difficulty: Medium
topic: Two Pointers
source: https://leetcode.com/problems/longest-palindromic-substring/
solved_date: 2026-04-22
---

# Intuition
Is this sliding window or 2 pointers?

# Approach
Loop array
- Extend string whilst left elem === cur
- Extend string whilst right elem === cur
- Extend string whilst left elem === right elem
Current Longest = Max(currentLongest or current)

# Complexity
- Time complexity:
O(n²) — expand-around-center runs O(n) per character

- Space complexity:
O(n) — string building; O(1) if tracking indices only

# Code
```typescript []
function longestPalindrome(s: string): string {
    let curLongest = "";

    for (let i=0; i<s.length; i++) {
        let cur = s[i];
        let start = i-1;
        let end = i+1;

        while (start >= 0 && s[start] === cur[0]) {
            cur = `${s[start]}${cur}`;
            start--;
        }

        while (end < s.length && s[end] === cur[cur.length-1]) {
            cur = `${cur}${s[end]}`;
            end++;
        }

        while (start >= 0 && end < s.length && s[start] === s[end]) {
            cur = `${s[start]}${cur}${s[end]}`;
            start--;
            end++;
        }

        curLongest = cur.length > curLongest.length ? cur : curLongest;
    }

    return curLongest
};
```