/**
 * Bump the public site version and record the push timestamp.
 *
 * Version format: 0.{revision} on /, 1.{revision} on /dev (same revision integer).
 *   - revision 11 → production 0.11, dev 1.11
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

/** @param {number} revision @param {'production' | 'dev'} [channel] */
function formatSiteVersion(revision, channel = 'production') {
  const major = channel === 'dev' ? 1 : 0;
  return `${major}.${revision}`;
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
  const fromProd = formatSiteVersion(current.revision);
  const toProd = formatSiteVersion(next.revision);
  const fromDev = formatSiteVersion(current.revision, 'dev');
  const toDev = formatSiteVersion(next.revision, 'dev');

  if (DRY_RUN) {
    console.log(`Would bump ${fromProd} → ${toProd} (dev ${fromDev} → ${toDev}) at ${next.pushedAt}`);
    return;
  }

  writeFileSync(VERSION_FILE, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  console.log(`Site version bumped: ${fromProd} → ${toProd} (dev ${fromDev} → ${toDev}) (${next.pushedAt})`);
}

main();
