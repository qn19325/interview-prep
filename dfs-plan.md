---
topic: DFS Study Plan
type: prep
last_updated: 2026-05-05
---

# DFS Study Plan

35 problems across 6 phases. ↩ = redo (already solved).

---

## Phase 1 — Binary Tree, Easy
> Postorder: recurse first, combine on the way back up. No visited tracking.

**Single node** — Maximum Depth, Invert Binary Tree:
```typescript
function dfs(node: TreeNode | null): T {
    if (node === null) return BASE_CASE;

    const left = dfs(node.left);
    const right = dfs(node.right);

    return COMBINE(left, right);
}
```
**Two nodes** — Same Tree, Symmetric Tree (helper), Subtree (isSame helper):
```typescript
function dfs(a: TreeNode | null, b: TreeNode | null): boolean {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;

    return a.val === b.val && dfs(a.LEFT, b.LEFT) && dfs(a.RIGHT, b.RIGHT);
}
```

> Symmetric Tree mirrors the subtrees: `dfs(node.left, node.right)` with `dfs(a.left, b.right) && dfs(a.right, b.left)`.

- [x] [Maximum Depth of Binary Tree](https://leetcode.com/problems/maximum-depth-of-binary-tree/)
- [x] [Same Tree](https://leetcode.com/problems/same-tree/)
- [x] [Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/)
- [x] [Symmetric Tree](https://leetcode.com/problems/symmetric-tree/)
- [x] [Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/)

---

## Phase 2 — Binary Tree, Medium
> Postorder pattern, path tracking, state passing down.

**Bottom-up** — recurse first, combine on the way back up (Diameter, Balanced, LCA, Construct):
```typescript
let result = BASE_CASE; // optional: only when answer isn't the root's return value

function dfs(node: TreeNode | null): T {
    if (node === null) return BASE_CASE;
    const left = dfs(node.left);
    const right = dfs(node.right);
    result = UPDATE(result, left, right); // optional: track cross-subtree answer (e.g. diameter)
    return COMBINE(left, right);
}
```

> Use a helper sub-function when the internal return type differs from what the problem asks for (e.g. Balanced needs `number` internally but returns `boolean`).

**Top-down** — pass state down, act at each node (Path Sum II, Path Sum III, Right Side View):
```typescript
// immutable state — pass a derived value, no backtrack needed (e.g. Right Side View: depth + 1)
function dfs(node: TreeNode | null, state: S): void {
    if (node === null) return;
    dfs(node.left, DERIVE(state, node));
    dfs(node.right, DERIVE(state, node));
}

// mutable state — push before recursing, pop after (e.g. Path Sum II: vals array)
function dfs(node: TreeNode | null, state: S[]): void {
    if (node === null) return;
    state.push(node.val);
    dfs(node.left, state);
    dfs(node.right, state);
    state.pop();
}
```

> Distance K is a two-pass outlier: one pass to build a parent map, then treat the tree as an undirected graph.

- [x] [Diameter of Binary Tree](https://leetcode.com/problems/diameter-of-binary-tree/)
- [x] [Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
- [x] [Path Sum II](https://leetcode.com/problems/path-sum-ii/)
- [x] [Binary Tree Right Side View](https://leetcode.com/problems/binary-tree-right-side-view/)
- [x] [Lowest Common Ancestor of a Binary Tree](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/)
- [x] [Construct Binary Tree from Preorder and Inorder Traversal](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)
- [x] [Path Sum III](https://leetcode.com/problems/path-sum-iii/)
- [x] [All Nodes Distance K in Binary Tree](https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/)

---

## Phase 3 — BST
> Same DFS skeleton; BST ordering as a shortcut.

- [x] [Convert Sorted Array to Binary Search Tree](https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/)
- [x] [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
- [ ] [Lowest Common Ancestor of a BST](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
- [ ] [Kth Smallest Element in a BST](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)
- [ ] [Inorder Successor in BST](https://leetcode.com/problems/inorder-successor-in-bst/)

---

## Phase 4 — Graph DFS
> Explicit visited tracking; no tree guarantee.

- [ ] [Flood Fill](https://leetcode.com/problems/flood-fill/) ↩
- [ ] [Number of Islands](https://leetcode.com/problems/number-of-islands/) ↩
- [ ] [Word Search](https://leetcode.com/problems/word-search/) ↩
- [ ] [Clone Graph](https://leetcode.com/problems/clone-graph/)
- [ ] [Course Schedule](https://leetcode.com/problems/course-schedule/)
- [ ] [Graph Valid Tree](https://leetcode.com/problems/graph-valid-tree/)
- [ ] [Number of Connected Components in an Undirected Graph](https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/)
- [ ] [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
- [ ] [Pacific Atlantic Water Flow](https://leetcode.com/problems/pacific-atlantic-water-flow/)
- [ ] [Accounts Merge](https://leetcode.com/problems/accounts-merge/)
- [ ] [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)

---

## Phase 5 — Backtracking
> Combinatorial spaces: choose → explore → unchoose.

- [ ] [Combination Sum](https://leetcode.com/problems/combination-sum/) ↩
- [ ] [Subsets](https://leetcode.com/problems/subsets/)
- [ ] [Permutations](https://leetcode.com/problems/permutations/)
- [ ] [Letter Combinations of a Phone Number](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)
- [ ] [Generate Parentheses](https://leetcode.com/problems/generate-parentheses/)

---

## Phase 6 — Trie DFS

- [ ] [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
