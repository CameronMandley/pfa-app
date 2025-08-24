# GitHub Branch Protection (configure in Settings → Branches)

Recommended rules for `main`:
- Require a pull request before merging
- Require approvals: 1–2
- Dismiss stale approvals when new commits are pushed
- Require status checks to pass before merging:
  - API CI (tests)
  - App CI (typecheck)
  - Commitlint
- Require linear history (optional)
- Restrict who can push to matching branches (maintainers only)
