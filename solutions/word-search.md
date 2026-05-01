---
problem: Word Search
difficulty: Medium
topic: Graph / Backtracking
source: https://leetcode.com/problems/word-search/
solved_date: 2026-04-28
---

# Word Search

## Intuition

Find a path of adjacent cells whose concatenated values spell the word. DFS from every cell matching `word[0]`; at each step, try all 4 neighbours that match the next character. Mark cells in-place to prevent reuse within the current path, restore on backtrack.

## Approach

1. Iterate every cell — if it matches `word[0]`, mark it `#` and call DFS.
2. DFS receives current position and `curWord` (characters matched so far).
3. Base case (success): `curWord === word` → return `true`.
4. For each of 4 neighbours within bounds: if it matches `word[curWord.length]`, mark `#`, recurse, restore on return.
5. If no neighbour leads to success, return `false`.
6. Restore the starting cell after each DFS call in the outer loop.

## Complexity

- Time: O(m · n · 4^L) where L = word length
- Space: O(L) recursion stack

## Code

```typescript
function exist(board: string[][], word: string): boolean {
    for (let idx = 0; idx < board.length; idx++) {
        for (let idy = 0; idy < board[0].length; idy++) {
            if (board[idx][idy] === word[0]) {
                const orig = board[idx][idy];
                board[idx][idy] = "#";
                if (dfs(board, [idx, idy], word, word[0])) return true;
                board[idx][idy] = orig;
            }
        }
    }
    return false;
}

function dfs(board: string[][], start: number[], word: string, curWord: string): boolean {
    if (curWord === word) return true;

    const adjacents = [[-1,0],[1,0],[0,-1],[0,1]];

    for (const adjacent of adjacents) {
        const row = start[0] + adjacent[0];
        const col = start[1] + adjacent[1];

        if (
            row >= 0 && row < board.length &&
            col >= 0 && col < board[0].length &&
            board[row][col] === word[curWord.length]
        ) {
            const orig = board[row][col];
            board[row][col] = "#";
            if (dfs(board, [row, col], word, curWord + word[curWord.length])) return true;
            board[row][col] = orig;
        }
    }

    return false;
}
```

## Notes

- In-place marking (`#`) avoids a separate visited set. The restore step is the backtrack — without it, one path's marks would corrupt subsequent paths.
- `curWord` accumulation is equivalent to passing an index into `word`; either works.
