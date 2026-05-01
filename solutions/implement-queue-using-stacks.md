---
problem: Implement Queue using Stacks
difficulty: Easy
topic: Stack
source: https://leetcode.com/problems/implement-queue-using-stacks/
solved_date: 2026-04-29
---

# Implement Queue using Stacks

## Intuition
Two stacks: an inbox (push target) and an outbox (pop/peek source). Pouring inbox into outbox reverses order, giving FIFO from a LIFO structure. Only pour when the outbox is empty — lazy transfer gives amortized O(1) per operation.

## Approach
- `push`: always push to inbox.
- `pop`/`peek`: if outbox is empty, pour all of inbox into outbox. Then pop/peek from outbox.
- `peek` without pouring: outbox top (`outbox[outbox.length - 1]`) is the front; if outbox is empty, inbox bottom (`inbox[0]`) is the oldest element.
- `empty`: both stacks empty.

## Complexity
- Time: O(1) amortized (`push` O(1); `pop`/`peek` amortized O(1) — each element crosses once)
- Space: O(n)

## Code
```typescript
class MyQueue {
    private inbox: number[];
    private outbox: number[];

    constructor() {
        this.inbox = [];
        this.outbox = [];
    }

    push(x: number): void {
        this.inbox.push(x);
    }

    pop(): number {
        if (!this.outbox.length) {
            while (this.inbox.length) {
                this.outbox.push(this.inbox.pop());
            }
        }
        return this.outbox.pop();
    }

    peek(): number {
        if (this.outbox.length) {
            return this.outbox[this.outbox.length - 1];
        }
        if (this.inbox.length) {
            return this.inbox[0];
        }
        return -1;
    }

    empty(): boolean {
        return this.outbox.length === 0 && this.inbox.length === 0;
    }
}
```

## Notes
Pattern: **Stack — two-stack queue**. Inbox receives pushes; outbox serves pops. Pour only when outbox is empty (lazy transfer) for amortized O(1).
