/**
 * Bump site version, commit site-version.json if needed, then run `git push`.
 *
 * Prefer this over plain `git push` so the version bump is included in the
 * same push (pre-push alone may require a second push — see docs/SITE_VERSION.md).
 *
 * Usage: npm run push -- [git push args]
 * Example: npm run push -- origin main
 */

import {spawnSync} from 'child_process';
import path from 'path';
import {fileURLToPath} from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const REPO_ROOT = path.resolve(ROOT, '..');

function run(command, args, options = {}) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    shell: process.platform === 'win32',
    ...options,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('node', [path.join(ROOT, 'scripts', 'bump-site-version.mjs')], {cwd: ROOT});

run('git', ['add', 'site-version.json'], {cwd: ROOT});

const diff = spawnSync('git', ['diff', '--cached', '--quiet', '--', 'site-version.json'], {
  cwd: REPO_ROOT,
  shell: process.platform === 'win32',
});

if (diff.status === 1) {
  run('git', ['commit', '-m', 'chore: bump site version'], {cwd: REPO_ROOT});
}

const pushArgs = process.argv.slice(2);
// --no-verify: pre-push also bumps; skipping avoids double increment
run('git', ['push', '--no-verify', ...pushArgs], {cwd: REPO_ROOT});
