<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Cody Choules — Resume

Interactive resume site for [codychoules.com](https://codychoules.com).

## Run locally

**Prerequisites:** Node.js

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`

## Build

`npm run build` outputs static assets to `dist/`.

## Site version

The page footer shows **v0.1** (and later **0.10**, **0.11**, …) plus the date/time of the last version bump. Version data lives in `site-version.json` and updates when you push.

**Recommended:** from this directory, use `npm run push -- origin main` so the version bumps, commits, and pushes in one step.

**Optional:** `npm run install-hooks` installs a pre-push hook for plain `git push` (may require pushing twice; see [docs/SITE_VERSION.md](docs/SITE_VERSION.md)).
