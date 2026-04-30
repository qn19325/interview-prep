---
problem: Gas Station
difficulty: Medium
topic: Greedy / One-pass
source: https://leetcode.com/problems/gas-station/
solved_date: 2026-04-30
---

# Gas Station

## Intuition
If total gas >= total cost, a solution is guaranteed to exist. To find it: whenever the running sum goes negative, the current start (and every station before `i`) can't work — skip to `i + 1`.

## Approach
Check existence with totals. Single pass: accumulate `gas[i] - cost[i]`. When sum goes negative, update `start = i + 1` and reset `sum = 0`. Return `start` at the end.

## Complexity
- Time: O(n)
- Space: O(1)

## Code
```typescript
function canCompleteCircuit(gas: number[], cost: number[]): number {
    const totalGas = gas.reduce((a, b) => a + b, 0);
    const totalCost = cost.reduce((a, b) => a + b, 0);

    if (totalCost > totalGas) return -1;

    let start = 0;
    let sum = 0;

    for (let i = 0; i < gas.length; i++) {
        sum += gas[i] - cost[i];
        if (sum < 0) {
            start = i + 1;
            sum = 0;
        }
    }

    return start;
}
```

## Notes
The total check is the existence guarantee. The greedy insight: a negative running sum rules out all stations from current start to `i` in one step. See [[algorithms]] Greedy / One-pass.
