---
problem: Valid Parentheses
difficulty: Easy
topic: Stack
source: https://leetcode.com/problems/valid-parentheses/
solved_date: 2026-04-29
---

# Valid Parentheses

## Intuition
Opening brackets must be closed in the correct order. A stack naturally enforces LIFO order — push opens, pop and verify on closes.

## Approach
Map each opening bracket to its expected closing bracket. Traverse the string: push opening brackets onto the stack; for closing brackets, pop and check the match. Return `true` only if the stack is empty at the end (no unclosed opens).

Edge: `stack.pop()` on empty returns `undefined`; `map.get(undefined)` is also `undefined`, so a closing bracket with an empty stack correctly returns `false`.

## Complexity
- Time: O(n)
- Space: O(n)

## Code
```typescript
function isValid(s: string): boolean {
    const stack: string[] = []
    const map = new Map<string, string>();

    map.set("{", "}");
    map.set("[", "]");
    map.set("(", ")");

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            stack.push(s[i]);
        } else {
            const val = stack.pop();
            if (s[i] !== map.get(val)) return false;
        }
    }

    return stack.length === 0;
}
```

## Notes
Pattern: **Stack — bracket matching**. Push opens, pop and verify closes. Empty stack at end = valid.
