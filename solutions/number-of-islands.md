---
problem: Number of Islands
difficulty: Medium
topic: Graph (DFS on grid)
source: https://leetcode.com/problems/number-of-islands/
solved_date: 2026-04-27
---

# Number of Islands

## Intuition
An island is a maximal 4-connected region of `'1'`s. Scan every cell; whenever you find an unvisited `'1'`, that's a new island — increment the counter, then DFS from it to mark the entire island as visited so the outer scan doesn't re-count it.

Two layers:
- **Outer scan** drives the *count* (one increment per island).
- **DFS** drives the *coverage* (drown every cell of the island so the scan won't trip on it again).

## Approach
Mutate-in-place to track visited: flip every visited `'1'` to `'0'`. The base case (`cell === '0'`) then handles both water and already-visited land in one check.

```
for each cell (i, j):
    if grid[i][j] == '1':
        count++
        dfs(i, j)        # drowns the whole island

dfs(r, c):
    if grid[r][c] == '0': return
    grid[r][c] = '0'
    for each of 4 neighbors:
        if in bounds: dfs(neighbor)
```

## Complexity
- Time: O(m·n) — each cell visited at most once across all DFS calls (after drowning, the base case rejects it).
- Space: O(m·n) — recursion stack, worst case a snaking island that fills the grid. No extra data structures, but recursion is not free.

## Code

```typescript
function numIslands(grid: string[][]): number {
    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                count++;
                dfs(grid, [i, j]);
            }
        }
    }
    return count;
};

function dfs(grid: string[][], startNode: number[]) {
    if (grid[startNode[0]][startNode[1]] === "0") {
        return;
    }

    grid[startNode[0]][startNode[1]] = "0";

    const adjacents = [[-1, 0], [1, 0], [0, -1], [0, 1]];

    for (let adjacent of adjacents) {
        const row = adjacent[0] + startNode[0];
        const col = adjacent[1] + startNode[1];
        if (
            (row >= 0 && row < grid.length) &&
            (col >= 0 && col < grid[0].length)
        ) {
            dfs(grid, [row, col]);
        }
    }
}
```

## Notes
- **Outer scan vs DFS recursion.** First-time confusion: which layer increments the count? The DFS is one *exploration* — it covers a single island. The outer scan is what *finds new islands*. Counter belongs at the outer level, not inside DFS.
- **Mutation as visited mark.** Same trick as Flood Fill — flipping `'1'` → `'0'` makes the base case do double duty (rejects water and already-visited land). Costs the input, saves O(m·n) space on a separate `visited` set. Always ask the interviewer first whether mutation is allowed.
- **Recursion has space cost.** Stalled on this — instinct said "no allocation = O(1) space." Recursion stack grows with depth. Worst case for grid DFS is O(m·n).
- **Open question for interview:** if mutation is *not* allowed, swap to a `Set<string>` of `"r,c"` keys. Same time, same space class.
