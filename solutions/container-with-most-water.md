---
problem: Container With Most Water
difficulty: Medium
topic: Two Pointers
source: https://leetcode.com/problems/container-with-most-water/
solved_date: 2026-04-27
---

# Container With Most Water

## Intuition
Two pointers, shrinking inward. Area is bounded by the shorter wall, so the longer wall offers no upside until the shorter one moves — always advance the shorter side.

## Approach
Start `i` and `j` at the two ends. Track `maxWater = max(maxWater, (j - i) * min(h[i], h[j]))`. Move the pointer at the shorter wall inward; if equal, either move works.

## Complexity
- Time: O(n)
- Space: O(1)

## Code

```typescript
function maxArea(height: number[]): number {
    let i = 0;
    let j = height.length - 1;
    let maxWater = 0;

    while (i < j) {
        maxWater = Math.max(maxWater, (j - i) * Math.min(height[i], height[j]));
        height[i] <= height[j] ? i++ : j--;
    }

    return maxWater;
};
```

## Notes
- Why move the shorter wall: the area is `width * min(h[i], h[j])`. Width strictly decreases each step, so to ever beat the current max the `min` height must rise — only possible by replacing the shorter wall.
- Greedy proof: any container we skip by advancing the shorter pointer would have width < current and height ≤ current min, so its area is strictly less. Safe to discard.