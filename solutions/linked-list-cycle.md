---
problem: Linked List Cycle
difficulty: Easy
topic: Linked List
source: https://leetcode.com/problems/linked-list-cycle/
solved_date: 2026-04-29
---

# Linked List Cycle

## Intuition
Detect whether any node is revisited during traversal. Node values can repeat legitimately — what matters is revisiting the same memory reference.

## Approach
Two solutions:

**Hash Set (O(n) space):** Store each node reference as you traverse. If `set.has(node)` before adding, a cycle exists.

**Floyd's Cycle Detection (O(1) space):** Slow pointer moves 1 step, fast moves 2. If they ever point to the same node, a cycle exists. If fast reaches null, no cycle.

## Complexity
- Time: O(n) both
- Space: O(n) hash set · O(1) Floyd's

## Code
```typescript
// Floyd's
function hasCycle(head: ListNode | null): boolean {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head.next;

    while (slow && fast) {
        if (slow === fast) return true;
        slow = slow.next;
        if (!fast.next) return false;
        fast = fast.next.next;
    }

    return false;
}
```

## Notes
JS/TS Sets compare objects by reference, not value — `set.add(node)` stores the pointer, making the hash set approach straightforward.
