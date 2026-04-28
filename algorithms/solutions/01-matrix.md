---
problem: 01 Matrix
difficulty: Medium
topic: Graph (Multi-source BFS)
source: https://leetcode.com/problems/01-matrix/
solved_date: 2026-04-28
---

# 01 Matrix

## Intuition
For each cell, find the distance to the nearest `0`. Instead of BFS-from-every-cell (O((m·n)²)), flip it: seed BFS from all `0`s simultaneously and expand outward. Each `1` is reached at exactly the tick that equals its distance to the nearest `0`.

## Approach
1. Scan grid: push all `0` coordinates into `queue`; mark all `1`s as `-1` (unvisited sentinel).
2. `ticks = 1` — neighbours of `0`s are at distance 1, so start the counter at 1.
3. `while (queue.length)`: snapshot `size`, process level, push newly-reached `-1` cells with `mat[row][col] = ticks`, then `ticks++`.
4. Return `mat` in-place.

## Complexity
- Time: O(m·n) — each cell enqueued and processed at most once.
- Space: O(m·n) — queue worst case.

## Code

```typescript
function updateMatrix(mat: number[][]): number[][] {
    const queue: number[][] = [];

    mat.forEach((row, idx) => {
        row.forEach((col, idy) => {
            if (mat[idx][idy] === 0) {
                queue.push([idx, idy]);
            }
            if (mat[idx][idy] === 1) {
                mat[idx][idy] = -1;
            }
        })
    });

    let ticks = 1;

    while (queue.length) {
        const size = queue.length;

        for (let i=0; i<size; i++) {
            const node = queue.shift();
            const adjacents = [[-1,0], [1,0], [0,-1], [0,1]];
            for (let adjacent of adjacents) {
                const row = node[0] + adjacent[0];
                const col = node[1] + adjacent[1];
                if (
                    (row >= 0 && row < mat.length) &&
                    (col >= 0 && col < mat[0].length) &&
                    (mat[row][col] === -1)
                ) {
                    mat[row][col] = ticks;
                    queue.push([row, col]);
                }
            }
        }

        ticks++;
    }

    return mat;
}
```

## Notes
- **`ticks = 1` not `0`.** Distance is assigned inside the loop at assignment time (not after the level completes). 0-cells are already in the queue at distance 0; their neighbours are distance 1, so initialise to 1.
- **Contrast with Rotting Oranges.** There, `ticks` counted levels *completed* (incremented after the loop). Here, `ticks` is the *value assigned* during the loop — the semantics differ, which is why the starting value differs.
- **`-1` as unvisited sentinel.** Can't use `1` to mean unvisited since `1` is the original cell value. `-1` is safe because all valid distances are non-negative.
- **In-place output.** No separate distance grid needed; the mutation repurposes the input matrix as the output.
