/**
 * Bump the public site version and record the push timestamp.
 *
 * Version format: 0.{revision}
 *   - revision 1  → 0.1   (first push after initial)
 *   - revision 10 → 0.10  (tenth push)
 *   - revision 11 → 0.11  (eleventh push)
 *
 * Each run increments revision by 1 and sets pushedAt to the current UTC time.
 * The result is written to site-version.json at the project root.
 *
 * Usage:
 *   node scripts/bump-site-version.mjs          # bump (used by git hooks / npm run push)
 *   node scripts/bump-site-version.mjs --dry-run  # print next version without writing
 */

import {readFileSync, writeFileSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const VERSION_FILE = path.join(ROOT, 'site-version.json');
const DRY_RUN = process.argv.includes('--dry-run');

/** @param {number} revision */
function formatSiteVersion(revision) {
  return `0.${revision}`;
}

function loadVersion() {
  const raw = readFileSync(VERSION_FILE, 'utf8');
  const data = JSON.parse(raw);
  if (typeof data.revision !== 'number' || data.revision < 1) {
    throw new Error(`${VERSION_FILE}: "revision" must be a positive integer`);
  }
  if (typeof data.pushedAt !== 'string' || Number.isNaN(Date.parse(data.pushedAt))) {
    throw new Error(`${VERSION_FILE}: "pushedAt" must be a valid ISO-8601 date string`);
  }
  return data;
}

function bump() {
  const current = loadVersion();
  const next = {
    revision: current.revision + 1,
    pushedAt: new Date().toISOString(),
  };
  return {current, next};
}

function main() {
  const {current, next} = bump();
  const from = formatSiteVersion(current.revision);
  const to = formatSiteVersion(next.revision);

  if (DRY_RUN) {
    console.log(`Would bump ${from} → ${to} at ${next.pushedAt}`);
    return;
  }

  writeFileSync(VERSION_FILE, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  console.log(`Site version bumped: ${from} → ${to} (${next.pushedAt})`);
}

main();
