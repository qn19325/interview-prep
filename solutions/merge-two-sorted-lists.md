---
problem: Merge Two Sorted Lists
difficulty: Easy
topic: Linked List
source: https://leetcode.com/problems/merge-two-sorted-lists/
solved_date: 2026-04-29
---

# Merge Two Sorted Lists

## Intuition
Recursively pick the smaller head, wire its `.next` to the merged result of the remaining lists, and return it. The structure mirrors the problem: one step of work, then trust the recursive call handles the rest.

## Approach
Recursive pointer rewiring. Base cases: if either list is null, return the other. Recursive case: pick the smaller head, set `head.next = merge(head.next, other)`, return head.

## Complexity
- Time: O(n + m)
- Space: O(n + m) — call stack depth

## Code
```typescript
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2;
    if (!list2) return list1;

    if (list1.val <= list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
}
```

## Notes
Return the current node (not `node.next`) after wiring — the node itself is the head of the merged sublist.
