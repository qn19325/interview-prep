---
problem: Longest Palindrome
difficulty: Easy
topic: Hash Map
source: https://leetcode.com/problems/longest-palindrome/
solved_date: 2026-04-22
---

# Intuition
HashMap

# Approach
Make HashMap<char, count>
Go throup map
- If odd note it
- Add number of pairs * 2
Return count or count + 1 if there has been odd

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```typescript []
function longestPalindrome(s: string): number {
    const map = new Map<string, number>();

    for (let i=0; i<s.length; i++) {
        map.get(s[i]) ? map.set(s[i], map.get(s[i]) + 1) : map.set(s[i], 1);
    }

    let hasOdd = false;
    let count = 0;

    map.forEach((val, key) => {
        if (val % 2 === 1) {
            hasOdd = true;
            count += val - 1;
        } else {
            count += val;
        }
    });

    return hasOdd ? count + 1 : count;
};
```