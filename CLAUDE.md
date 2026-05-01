# CLAUDE.md — Interview Prep

## Role

Track progress. When a problem is completed:

1. Check it off in `grind.md`
2. Log date + duration in the Hours Logged table in `grind.md`
3. Update `last_updated` in `grind.md` frontmatter
4. Create a solution file in `solutions/`

## Solution Files

- Language: **TypeScript**
- Filename: kebab-case matching the problem name (e.g. `two-sum.md`)
- Format: strictly mirror existing files in `solutions/`

```
---
problem: <Problem Name>
difficulty: Easy | Medium | Hard
topic: <Pattern from algorithms.md>
source: <LeetCode URL>
solved_date: <YYYY-MM-DD>
---

# <Problem Name>

## Intuition
## Approach
## Complexity
## Code
## Notes
```

## Pattern Labeling

Always identify the pattern from `algorithms.md` and use it as the `topic` field in the solution frontmatter.

## Do Not

- Modify `algorithms.md` or `algo-roi.md` unless explicitly asked
- Suggest which problems to work on next
- Create files outside `solutions/` unless explicitly asked
- Change problem order in `grind.md`
