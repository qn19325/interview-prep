---
problem: Reverse Linked List
difficulty: Easy
topic: Linked List
source: https://leetcode.com/problems/reverse-linked-list/
solved_date: 2026-04-29
---

# Reverse Linked List

## Intuition
Recurse to the end, then rewire pointers on the way back up. The new head (the last node) is returned from the base case and passed through every level unchanged — the actual rewiring happens locally at each node.

## Approach
Recursive pointer rewiring. Base case: `!head || !head.next` → return head (empty list or single node). Recursive case: recurse on `head.next`, then `head.next.next = head`, `head.next = null`, return `newHead`.

## Complexity
- Time: O(n)
- Space: O(n) — call stack depth

## Code
```typescript
function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;

    const newHead = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newHead;
}
```

## Notes
`newHead` never changes after the base case returns — it's just a handle for the new head, passed up unchanged. The chain gets built by each level's local rewiring.
