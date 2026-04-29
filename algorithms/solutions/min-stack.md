---
problem: Min Stack
difficulty: Medium
topic: Stack
source: https://leetcode.com/problems/min-stack/
solved_date: 2026-04-29
---

# Min Stack

## Intuition
Track the current minimum at every stack level using a parallel min-stack. Each push records whether a new minimum is being introduced; each pop removes from the min-stack only when the popped value was the current minimum.

## Approach
Two stacks: `stack` (all values) and `min` (running minimums). On `push`: always push to `stack`; push to `min` only when `val <= min top` (use `<=` not `<` to correctly handle duplicate minimums). On `pop`: pop from `stack`; if the popped value equals `min` top, pop `min` too.

## Complexity
- Time: O(1) all operations
- Space: O(n)

## Code
```typescript
class MinStack {
    private stack: number[];
    private min: number[];

    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val: number): void {
        if (!this.min.length || val <= this.min[this.min.length - 1]) {
            this.min.push(val);
        }
        this.stack.push(val);
    }

    pop(): void {
        const val = this.stack.pop();
        if (this.min[this.min.length - 1] === val) {
            this.min.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.min[this.min.length - 1];
    }
}
```

## Notes
Pattern: **Stack — parallel min-stack**. Use `<=` not `<` when pushing to min-stack so duplicate minimums are each recorded and removed independently.
