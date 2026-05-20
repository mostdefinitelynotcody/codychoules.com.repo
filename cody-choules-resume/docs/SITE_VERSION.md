# Site version footer

The resume site shows a version and push timestamp at the bottom of the page, for example:

**v0.1 · pushed May 20, 2026, 12:00 AM** on `/`  
**v1.1 · pushed May 20, 2026, 12:00 AM** on `/dev`

## How versioning works

| Field | File | Meaning |
|-------|------|---------|
| `revision` | `site-version.json` | Integer bumped on every git push; suffix for both channels |
| `pushedAt` | `site-version.json` | ISO-8601 UTC time when the version was last bumped |

Display rules (decimal-style increments, not semver):

| Page | Format | Example (`revision` 11) |
|------|--------|-------------------------|
| Production (`/`) | `0.{revision}` | `0.11` |
| Dev (`/dev`) | `1.{revision}` | `1.11` (one major step ahead of production) |

Dev does not use a separate bump: it reads the same `revision` and shows `1.{revision}` instead of `0.{revision}`.

| Push # | `revision` | Production | Dev |
|--------|------------|------------|-----|
| Initial (committed baseline) | `1` | `0.1` | `1.1` |
| 2nd | `2` | `0.2` | `1.2` |
| 10th | `10` | `0.10` | `1.10` |
| 11th | `11` | `0.11` | `1.11` |

The UI reads `site-version.json` at build time. Deployed GitHub Pages builds use whatever is committed on `main` when CI runs.

## Updating the version

### Recommended: `npm run push`

From `cody-choules-resume/`:

```bash
npm run push -- origin main
```

This script:

1. Runs `scripts/bump-site-version.mjs` (increments `revision`, sets `pushedAt` to now)
2. Commits `site-version.json` if it changed
3. Runs `git push` with any arguments you pass after `--`

Use this when you want the bump commit included in **one** push. The script passes `--no-verify` to `git push` so the optional pre-push hook does not bump a second time.

### Git pre-push hook (optional)

Install once after cloning:

```bash
npm run install-hooks
```

This copies `scripts/hooks/pre-push` into `.git/hooks/pre-push` at the repo root.

On every `git push`, the hook bumps the version and commits. If it created a commit, the hook **stops** the push so you can run `git push` again (or use `npm run push` instead to avoid two steps).

Skip the hook for a single push with:

```bash
git push --no-verify
```

### Manual bump

```bash
node scripts/bump-site-version.mjs
git add site-version.json
git commit -m "chore: bump site version"
```

Preview the next version without writing:

```bash
node scripts/bump-site-version.mjs --dry-run
```

## Changing the initial version

Edit `site-version.json` directly:

- Set `revision` so `0.{revision}` matches the version you want (e.g. `1` → `0.1`).
- Set `pushedAt` to an ISO-8601 string (e.g. `2026-05-20T15:30:00.000Z`).

Commit that file; the next push will increment from there.

## Source files

| Path | Role |
|------|------|
| `site-version.json` | Canonical version data (committed) |
| `scripts/bump-site-version.mjs` | Bump logic and formatting |
| `scripts/git-push.mjs` | Bump + commit + push in one step |
| `scripts/install-git-hooks.mjs` | Installs pre-push hook |
| `scripts/hooks/pre-push` | Hook template |
| `src/siteVersion.ts` | Types and display helpers |
| `src/components/SiteVersionFooter.tsx` | Footer UI |
