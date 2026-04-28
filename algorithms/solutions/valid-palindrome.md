---
problem: Valid Palindrome
difficulty: Easy
topic: Two Pointers, String
source: https://leetcode.com/problems/valid-palindrome/
solved_date: 2026-04-22
---

# Intuition
Two pointers from both ends — clean the string first then compare inward.

# Approach
Lowercase and strip non-alphanumeric with regex, then walk inward with two pointers. Return false on first mismatch.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n) — new string from replace (could avoid with in-place pointer skipping)

# Code
```typescript
function isPalindrome(s: string): boolean {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");

    let i = 0;
    let j = s.length-1;

    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};
```

# Notes
Need to learn to write regex from scratch. O(1) space variant: skip non-alnum chars inline with the pointers instead of pre-cleaning the string.
