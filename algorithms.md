---
topic: Algorithms — Interview Prep
type: prep
last_updated: 2026-04-20
---

# Algorithms — Interview Prep

## How to Work a Problem

1. **Clarify the goal before writing anything** — read the problem, restate it in your own words, confirm edge cases. Ambiguity is anti-flow and wastes working memory.
2. **Start with brute force** — get it working first, get feedback (does it pass?). A working solution builds confidence; confidence feeds the next step.
3. **Then optimise** — once it works, look for time/space improvements. The working solution gives you a concrete baseline to reason from.
4. **Name the pattern after solving** — e.g. "this was a hashmap frequency count", "this was a sliding window". This is what builds fast recognition across sessions.

The goal of drilling is not to memorise solutions — it's to reach *pattern recognition* speed, so your explicit system isn't overloaded and working memory is free for the novel parts of the problem. See [[flow-states]] for the neuroscience behind this.

---

## Session Duration

Start at 60 minutes, build toward 90 as pattern fluency increases and sessions stop hitting the cognitive ceiling early.

**60 min structure:**
- 10 min — warm-up (1 easy, familiar problem)
- 40 min — new problems (2–3 Easy, one pattern)
- 10 min — review: name patterns, log problems below

**90 min structure (later):**
- 10 min — warm-up
- 60 min — new problems
- 20 min — review and log

## Session Structure

- Warm up on 1–2 easy, familiar problems before tackling new material
- Work one pattern at a time — don't scatter across topics in a single session
- Progress gradually: Easy → Medium within a topic before jumping up
- Log each problem below with its pattern label

---

## Pattern Index

| Pattern | Description |
|---------|-------------|
| Hash Map | Store value→index or char→count for O(1) lookup; count frequencies to compare distributions |
| Hash Set | Track seen elements for O(1) existence checks; spot duplicates in one pass |
| Two Pointers | Left + right pointers moving inward; or expand outward from a centre to test symmetry |
| Sliding Window (variable) | Grow right pointer freely, shrink left when constraint is violated; window size changes |
| Sliding Window (fixed) | Fixed-size window slides one step at a time; add incoming, remove outgoing element |
| Intervals | Sort by start time; merge when `next.start <= current.end`; insert by splitting into before/overlap/after |
| Prefix Products | Build left-product and right-product arrays so each index holds the product of all other elements |
| Greedy / One-pass | Track running state (min price seen, max profit) without storing history |
| Binary Search — value search | Classic: find exact target in sorted array; return index or -1. `lo <= hi`, check mid, move `lo = mid+1` or `hi = mid-1` |
| Binary Search — lowest value | Find the first index where a condition turns true (left boundary). Keep `hi = mid` when true, `lo = mid+1` when false; answer is `lo` after loop |

---