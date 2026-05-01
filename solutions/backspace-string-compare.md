---
problem: Backspace String Compare
difficulty: Easy
topic: Stack
source: https://leetcode.com/problems/backspace-string-compare/
solved_date: 2026-04-29
---

# Backspace String Compare

## Intuition
Simulate the typed result of each string using a stack: push characters, pop on `#`. Compare the two final stacks.

## Approach
Two stacks, one per string. Iterate with a shared index (both strings processed independently per iteration). Pop on `#`, push otherwise. After the loop, compare lengths then element-by-element. Popping an empty stack returns `undefined` (JS) — safe, models a backspace with nothing to delete.

## Complexity
- Time: O(n + m)
- Space: O(n + m)

## Code
```typescript
function backspaceCompare(s: string, t: string): boolean {
    let i = 0;
    const sStack: string[] = [];
    const tStack: string[] = [];

    while (i < s.length || i < t.length) {
        if (i < s.length) {
            s[i] === '#' ? sStack.pop() : sStack.push(s[i]);
        }
        if (i < t.length) {
            t[i] === '#' ? tStack.pop() : tStack.push(t[i]);
        }
        i++;
    }

    if (sStack.length !== tStack.length) return false;

    for (let j = 0; j < sStack.length; j++) {
        if (sStack[j] !== tStack[j]) return false;
    }

    return true;
}
```

## Notes
Pattern: **Stack — simulate typed output**. Push chars, pop on `#`. Compare resulting stacks.
