---
topic: Algorithms — Interview Prep
type: prep
last_updated: 2026-04-27
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

### Hashing
- **Hash Map** — Store value→index or char→count for O(1) lookup; count frequencies to compare distributions.
- **Hash Set** — Track seen elements for O(1) existence checks; spot duplicates in one pass.

### Two Pointers
- **Inward** — Left and right pointers moving toward each other; common for sorted-array searches and palindrome checks.
- **Expand from centre** — Start at a centre and grow outward to test symmetry (e.g. expand-around-centre palindromes).

### Sliding Window
- **Variable** — Grow right pointer freely; shrink left when a constraint is violated. Window size changes.
- **Fixed** — Window of fixed size slides one step; add incoming, remove outgoing.

### Intervals
- **Sort + sweep** — Sort by start; merge when `next.start <= current.end`. For inserts, split into before / overlap / after.

### Prefix / Suffix Aggregates
- **Prefix + suffix arrays** — Build left-aggregated and right-aggregated arrays so each index sees the aggregate of all other elements in O(n) (e.g. product-of-array-except-self).

### Greedy / One-pass
- **Running state** — Track running min/max/state without storing history (e.g. min price seen, max profit so far).

### Binary Search

All variants use the **convergence template**: `lo < hi` loop, exits with `lo === hi` (one candidate left). Asymmetry: `lo = mid + 1` rules mid out; `hi = mid` keeps mid in play.

- **Value search** — Find exact target in sorted array. `lo = mid + 1` when `target > nums[mid]`; `hi = mid` when `target < nums[mid]`; early-return on equality. After the loop, check `nums[lo] === target`.
- **Leftmost boundary** — First index where a predicate turns true. `hi = mid` when predicate is true at mid (mid stays); `lo = mid + 1` when false. After the loop, `lo` is the first true index — no post-check needed if at least one true exists.
- **Rightmost ≤ target** — Reframe as "leftmost > target," then step back. `hi = mid` when `arr[mid] > target`; `lo = mid + 1` otherwise. After the loop, check `arr[lo] <= target` (answer is `lo`) else `arr[lo - 1]` (answer is `lo - 1`).
- **Rotated sorted array** — Convergence template with sorted-half branching. Each iteration, decide which half is sorted by comparing `nums[lo]` to `nums[mid]`; if target lies within the sorted half's range, narrow into it (`hi = mid` or `lo = mid + 1`), otherwise discard it. Endpoint guards (check `nums[lo]` / `nums[hi]` against target before narrowing) let the inner inequalities stay strict.

### Partitioning
- **Dutch flag / 3-way** — One-pass partition into three regions using `low / mid / high` pointers; classifies values `<pivot`, `==pivot`, `>pivot` in O(n) time and O(1) extra space.

### Graph / Grid Traversal
- **DFS on grid** — Recursively visit 4-neighbours; track visited via a set or by mutating the grid in place. Natural fit for connected components and flood fill.
- **Multi-source BFS** — Seed the queue with all starting nodes before the first iteration; expand level-by-level using a pre-loop size snapshot (`const size = queue.length`). Tick/step counter increments after each level. Natural fit for simultaneous spreading (e.g. rotting oranges, 0-1 matrix distances). Stop condition: `while (queue.length && targetCount > 0)` avoids an extra tick on the final iteration.

### Voting / Cancellation
- **Boyer-Moore Majority Vote** — Maintain a candidate and a count; increment on match, decrement on mismatch; count hits zero, replace candidate. After one pass, candidate is the majority element (if one exists). O(n) time, O(1) space.

---