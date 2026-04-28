---
problem: Rotting Oranges
difficulty: Medium
topic: Graph (Multi-source BFS)
source: https://leetcode.com/problems/rotting-oranges/
solved_date: 2026-04-28
---

# Rotting Oranges

## Intuition
All rotten oranges rot their neighbours simultaneously each tick — that's exactly BFS level-by-level expansion. Seed the queue with every rotten orange upfront (multi-source BFS) so they all expand in the same tick, rather than running separate BFS instances and comparing depths.

## Approach
1. Scan grid once: push all `2`s into `queue`, count `freshCount` of `1`s.
2. `while (queue.length && freshCount > 0)` — stop as soon as fresh oranges are exhausted (avoids an extra tick on the final iteration).
3. Inside the loop, snapshot `size = queue.length` before the inner loop so adding new nodes mid-iteration doesn't corrupt the level boundary.
4. Shift each node, check 4-neighbours; when a neighbour is `1`, set it to `2`, decrement `freshCount`, push to queue.
5. Increment `ticks` after each full level.
6. Return `-1` if `freshCount > 0` (unreachable fresh oranges), else `ticks`.

## Complexity
- Time: O(m·n) — each cell is enqueued and processed at most once.
- Space: O(m·n) — queue worst case holds all cells.

## Code

```typescript
function orangesRotting(grid: number[][]): number {
    const queue: number[][] = [];
    let freshCount = 0;
    let ticks = 0;

    grid.forEach((row, idx) => {
        row.forEach((col, idy) => {
            const cell = grid[idx][idy];
            if (cell === 1) {
                freshCount++;
            }
            if (cell === 2) {
                queue.push([idx, idy]);
            }
        })
    })
    
    while (queue.length && freshCount > 0) {
        const size = queue.length;
        for (let i=0; i<size; i++) {
            const node = queue.shift();
            const adjacents = [[-1,0], [1,0], [0,-1], [0,1]];

            for (let adjacent of adjacents) {
                const row = adjacent[0] + node[0];
                const col = adjacent[1] + node[1];

                if (
                    (row >= 0 && row < grid.length) &&
                    (col >= 0 && col < grid[0].length) &&
                    (grid[row][col] === 1)
                ) {
                    grid[row][col] = 2;
                    queue.push([row, col])
                    freshCount--;
                }
            }
        }
        ticks++;
    }

    return freshCount > 0 ? -1 : ticks;
};
```

## Notes
- **Multi-source BFS vs separate BFS per source.** Running individual BFS instances would give each rotten orange its own "clock", making it impossible to model simultaneous spreading. Seeding all sources at once is the key insight.
- **`const size = queue.length` before inner loop.** Using `queue.length` directly in `for (i < queue.length)` with `queue.shift()` shrinks the bound each iteration, exiting early and missing nodes in the current tick.
- **`&& freshCount > 0` in while condition.** Without it, the loop runs one extra iteration after the last batch of oranges is freshly rotted (they don't spread, but `ticks++` still fires), producing an off-by-one.
- **In-place mutation as visited mark.** Setting `grid[row][col] = 2` prevents re-enqueueing; no separate `visited` set needed.
- **`-1` detection.** Unreachable fresh oranges (isolated by `0`s) leave `freshCount > 0` at the end.
- First BFS written. Pattern: seed queue with all sources → snapshot level size → expand neighbours → increment ticks after each level.
