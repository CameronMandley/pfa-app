# Contributing Guidelines

We use **trunk-based development** with **Conventional Commits**.

## Branching
- Default branch: `main`
- Work off short-lived branches from `main`, e.g. `feat/simulator-impact-copy`.
- Rebase onto `main` before merging (no long-lived branches).

## Commits — Conventional Commits
Format: `<type>(scope)!: short summary`

Types: `feat|fix|docs|refactor|perf|test|build|ci|chore`  
Examples:
- `feat(simulator): add impact suggestions`
- `fix(budgets): correct ATS rounding`
- `refactor(api): extract plaid client factory`
- `chore(ci): add commitlint`

## Pull Requests
- 1–3 reviewers; small PRs (<300 lines) whenever possible.
- Linked issue or checklist of acceptance criteria.
- Title must follow Conventional Commits (CI enforces).

## CI Gates
- Lint & tests must pass.
- Commit messages validated by **commitlint**.

## Local hooks (optional)
- Node present? You can enable local commit message checks:

### For Node repos (pfa-app)
```bash
bash scripts/setup-husky.sh
```

### For Python repo (pfa-api)
We enforce commit style in CI. If you want a local hook, run the Node variant above in this repo too.
