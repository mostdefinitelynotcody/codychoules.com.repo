/**
 * Install the repository pre-push hook that bumps site-version.json before each push.
 *
 * Copies scripts/hooks/pre-push into .git/hooks/pre-push (repo root).
 * Does not modify git config.
 *
 * Usage: npm run install-hooks
 */

import {copyFileSync, chmodSync, existsSync, mkdirSync} from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

const RESUME_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO_ROOT = path.resolve(RESUME_ROOT, '..');
const HOOK_SRC = path.join(RESUME_ROOT, 'scripts', 'hooks', 'pre-push');
const HOOK_DEST = path.join(REPO_ROOT, '.git', 'hooks', 'pre-push');

if (!existsSync(path.join(REPO_ROOT, '.git'))) {
  console.error('Not a git repository:', REPO_ROOT);
  process.exit(1);
}

mkdirSync(path.dirname(HOOK_DEST), {recursive: true});
copyFileSync(HOOK_SRC, HOOK_DEST);
chmodSync(HOOK_DEST, 0o755);

console.log('Installed pre-push hook:', HOOK_DEST);
console.log('For a single-step push with version included, use: npm run push');
