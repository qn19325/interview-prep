---
problem: Same Tree
difficulty: Easy
topic: Binary Tree
source: https://leetcode.com/problems/same-tree/
solved_date: 2026-05-05
---

# Same Tree

## Intuition
Two trees are identical if every corresponding node has the same value and the same structure. Check structure first (both null, or one null), then value, then recurse.

## Approach
Base cases: both null → `true` (structure matches); one null → `false` (structure differs). Then check `p.val === q.val` and recurse on both left and right pairs.

## Complexity
- Time: O(n) — visits every node once in the worst case (identical trees).
- Space: O(h) — recursion stack height.

## Code

```typescript
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    if (!p && !q) return true;
    if (!p || !q) return false;

    const left = isSameTree(p.left, q.left);
    const right = isSameTree(p.right, q.right);

    return p.val === q.val && left && right;
};
```

## Notes
- Structural checks before value check — avoids a null-dereference on `p.val` or `q.val`.
- Short-circuits: if `left` is false, `right` is never evaluated (JS `&&` semantics). Could inline the calls into the return for the same effect.
