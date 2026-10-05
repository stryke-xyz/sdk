#!/usr/bin/env node
// Local-only metadata overlay. Never invokes a package manager or registry.
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const assert = require('node:assert/strict');
const { execFileSync } = require('node:child_process');
const sdk = path.resolve(__dirname, '..');
const [consumerArg, mode = '--apply', originalTargetArg] = process.argv.slice(2);
if (!consumerArg || !['--apply', '--check', '--restore'].includes(mode)) {
  throw Error('Usage: node scripts/local-metadata-override.cjs <consumer-directory> [--apply|--check|--restore] [original-link-target for adopting an existing overlay]');
}
const consumer = path.resolve(consumerArg);
const link = path.join(consumer, 'node_modules/@stryke-xyz/sdk');
const root = path.join(consumer, 'node_modules/.local-sdk-metadata');
const overlay = path.join(root, '@stryke-xyz/sdk');
const recordPath = path.join(root, 'restore.json');
const symbols = ['STONKBROKER', 'AI', 'BONER'];
function verify(directory) {
  const metadata = require(path.join(directory, 'dist/amms'));
  for (const symbol of symbols) {
    const pool = metadata.amms[4663].find(p => p.principleSymbol === symbol);
    assert(pool && pool.isMemePair === false, symbol + ' must not be a meme pair');
  }
  assert.equal(metadata.amms[42161].find(p => p.principleSymbol === 'BOOP').isMemePair, true);
}
assert(fs.lstatSync(link).isSymbolicLink(), 'Expected the consumer SDK to be a pnpm symlink');
if (mode === '--check') {
  verify(fs.realpathSync(link));
  console.log('Corrected metadata verified:', consumer);
  process.exit(0);
}
let record = fs.existsSync(recordPath) ? JSON.parse(fs.readFileSync(recordPath, 'utf8')) : null;
if (mode === '--restore') {
  assert(record, 'No saved original link');
  assert.equal(fs.realpathSync(link), overlay, 'Refusing to replace a link not owned by this helper');
  assert(fs.existsSync(path.resolve(path.dirname(link), record.originalTarget)), 'Original package is unavailable; reinstall dependencies');
  fs.unlinkSync(link);
  fs.symlinkSync(record.originalTarget, link, 'dir');
  console.log('Original installed SDK link restored:', consumer);
  process.exit(0);
}
const currentTarget = fs.readlinkSync(link);
if (fs.realpathSync(link) !== overlay) record = { originalTarget: currentTarget };
if (!record && originalTargetArg) record = { originalTarget: originalTargetArg };
assert(record, 'Existing overlay has no record; supply the previously recorded original link target');
const original = fs.realpathSync(path.resolve(path.dirname(link), record.originalTarget));
assert.notEqual(original, overlay, 'Original must be the installed package, not the overlay');
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'stryke-sdk-metadata-'));
try {
  const dist = path.join(temporary, 'dist');
  execFileSync(process.execPath, [path.join(sdk, 'node_modules/typescript/bin/tsc'), '--outDir', dist], { cwd: sdk, stdio: 'inherit' });
  const compiled = require(path.join(dist, 'amms'));
  const expected = JSON.parse(JSON.stringify(require(path.join(original, 'dist/amms'))));
  for (const symbol of symbols) expected.amms[4663].find(p => p.principleSymbol === symbol).isMemePair = false;
  assert.deepEqual(JSON.parse(JSON.stringify(compiled)), expected, 'Refusing to apply unrelated AMM metadata changes');
  if (!fs.existsSync(overlay)) fs.cpSync(original, overlay, { recursive: true });
  for (const file of ['index.js', 'index.d.ts']) fs.copyFileSync(path.join(dist, 'amms', file), path.join(overlay, 'dist/amms', file));
  const deps = path.join(overlay, 'node_modules');
  fs.mkdirSync(deps, { recursive: true });
  if (!fs.existsSync(path.join(deps, 'viem'))) fs.symlinkSync(fs.realpathSync(path.join(consumer, 'node_modules/viem')), path.join(deps, 'viem'), 'dir');
  fs.writeFileSync(recordPath, JSON.stringify(record, null, 2) + '\n');
  if (fs.realpathSync(link) !== overlay) {
    fs.unlinkSync(link);
    fs.symlinkSync(path.relative(path.dirname(link), overlay), link, 'dir');
  }
  verify(overlay);
  console.log('Local metadata overlay applied:', consumer);
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
