---
problem: Combination Sum
difficulty: Medium
topic: Backtracking
source: https://leetcode.com/problems/combination-sum/
solved_date: 2026-04-30
---

# Combination Sum

## Intuition
Any combination that sums to target can be built by repeatedly choosing a candidate and recursing. Allowing the same index to be chosen again handles unlimited reuse. Moving to `i + 1` on the skip branch prevents duplicate combinations.

## Approach
Backtracking with a `start` index. Two recursive branches per call: (1) include `candidates[start]` again, (2) skip to `start + 1`. Prune when `curTotal > target`; record when `curTotal === target`.

## Complexity
- Time: O(n^t/m) where t = target, m = minimum candidate value
- Space: O(t/m) recursion depth

## Code
```typescript
function combinationSum(candidates: number[], target: number): number[][] {
    const res: number[][] = [];

    function recurse(curCombo: number[], curTotal: number, curIdx: number): void {
        if (curTotal === target) {
            res.push([...curCombo]);
            return;
        }
        if (curTotal > target || curIdx >= candidates.length) return;

        curCombo.push(candidates[curIdx]);
        recurse(curCombo, curTotal + candidates[curIdx], curIdx);
        curCombo.pop();

        recurse(curCombo, curTotal, curIdx + 1);
    }

    recurse([], 0, 0);
    return res;
}
```

## Notes
Choose → explore → unchoose template. Same `curIdx` = reuse; `curIdx + 1` = move on. See [[algorithms]] Backtracking section.
