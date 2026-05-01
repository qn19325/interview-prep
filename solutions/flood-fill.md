---
problem: Flood Fill
difficulty: Easy
topic: Graph (DFS on grid)
source: https://leetcode.com/problems/flood-fill/
solved_date: 2026-04-27
---

# Flood Fill

## Intuition
Recolor the connected region of same-valued cells reachable from `(sr, sc)` via 4-directional moves. Classic DFS on a grid: visit a cell, recolor it, recurse on neighbors. The recolor itself acts as the "visited" mark — once a cell holds the new color, the base case stops re-entering it.

## Approach
Capture `startVal = image[sr][sc]` before mutating anything (otherwise the first recolor changes what "matches" means). Recursive `dfs(r, c)`:

**Base case (combined):**
- `image[r][c] !== startVal` → wrong region, bail
- `image[r][c] === color` → already filled, bail (also handles the pathological `startVal === color` input that would otherwise loop forever)

**Work:** set `image[r][c] = color`.

**Recurse:** for each of the 4 neighbors `(r±1, c)` and `(r, c±1)`, bounds-check then recurse.

## Complexity
- Time: O(m·n) — each cell is visited at most once (after recoloring, the base case rejects it).
- Space: O(m·n) — recursion stack worst case is a snaking same-color region that fills the grid.

## Code

```typescript
function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    dfs(image, color, image[sr][sc], [sr, sc]);
    return image;
};

function dfs(image: number[][], color: number, startVal: number, node: number[]) {
    if (image[node[0]][node[1]] !== startVal || image[node[0]][node[1]] === color) {
        return;
    }

    image[node[0]][node[1]] = color;

    const adjacents = [[0,-1], [0,1], [-1,0], [1,0]];

    for (let adjacent of adjacents) {
        const row = node[0] + adjacent[0];
        const col = node[1] + adjacent[1];

        if (
            (0 <= row && row < image.length) &&
            (0 <= col && col < image[0].length)
        ) {
            dfs(image, color, startVal, [row, col]);
        }
    }
}
```

## Notes
- **Rows vs cols slip.** First pass had `row < image[0].length` and `col < image.length` — the dimensions were swapped. `image.length` is rows; `image[0].length` is cols.
- **The `startVal === color` trap.** If the caller passes the same color the cell already has, every cell still matches `startVal` after the recolor (because the recolor is a no-op), so neighbors recurse back into each other indefinitely. Solved by adding `image[r][c] === color` to the base case — handled per-cell rather than as an outer guard, but functionally fine.
- **Recolor as visited mark.** No separate `visited` set needed — the mutation itself is the signal. Only works because the problem actively wants the mutation; in problems like Number of Islands you'd either flip `1`s to `0`s (destructive) or keep a `visited` set.
- First DFS written. The recursive shape — base case → work → recurse on neighbors — generalises to most grid traversal problems.
