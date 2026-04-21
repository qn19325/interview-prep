---
problem: Best Time to Buy and Sell Stock
difficulty: Easy
topic: Two Pointers / Sliding Window
source: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
solved_date: 2026-04-20
---

# Best Time to Buy and Sell Stock

## Intuition

Two pointers — grow the window while profitable, reset the left pointer when the price drops below the buy price.

## Approach

`i` = buy day, `j` = sell day. If `prices[j] - prices[i] < 1` (no profit), move `i` up to `j` (the new lowest so far) and advance `j`. Otherwise track the max profit and advance `j`. This works because if the current sell price is lower than the buy price, it can only be a better buy point — no earlier `i` could beat it.

## Complexity

- **Time:** O(n) — single pass
- **Space:** O(1)

## Code

```typescript
function maxProfit(prices: number[]): number {
    let i = 0;
    let j = 1;
    let maxProf = 0;

    while (i < j && j < prices.length) {
        const curProf = prices[j] - prices[i];

        if (curProf < 1) {
            i = j;
            j++;
        } else {
            maxProf = Math.max(curProf, maxProf);
            j++;
        }
    }

    return maxProf;
}
```

## Notes

- The `curProf < 1` condition handles zero-profit days by resetting `i` — fine here, but worth noting it treats a flat price as "not worth holding". The result is still correct since holding wouldn't improve profit.
- An equivalent single-pointer approach tracks `minPrice` explicitly: `minPrice = Math.min(minPrice, prices[j])`, `maxProf = Math.max(maxProf, prices[j] - minPrice)`. Same complexity, slightly more readable.
