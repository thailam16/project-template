#!/usr/bin/env node
/**
 * sync-ds — đồng bộ "GHN DS layer" từ template này sang một project đã tạo trước đó, để nó nhận
 * các bản vá (token, guide, Icon, rules…) mà không phải copy tay từng file.
 *
 * Dùng: `node scripts/sync-ds.mjs <đường-dẫn-project-đích>`  (hoặc `npm run sync-ds -- <path>`)
 *
 * Chỉ copy lớp design system; KHÔNG đụng code ứng dụng của đích (App.tsx, package.json, vite.config…).
 * Sau khi chạy, hãy `git diff` ở project đích để review trước khi commit.
 */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const ROOT = fileURLToPath(new URL('..', import.meta.url));

// Các file/thư mục cấu thành DS layer (an toàn để ghi đè ở đích).
const DS_LAYER = [
  'tokens.json',
  'scripts/build-tokens.mjs',
  'scripts/check-ds.mjs',
  'eslint.config.js',
  'AGENTS.md',
  'CLAUDE.md',
  'src/theme.ts',
  'src/components/common/Icon.tsx',
  'src/components/GhnConfigProvider.tsx',
  'src/styles/tokens.css',
  'src/styles/semantic.css',
  'src/styles/fontawesome.css',
  'src/styles/global.css',
  'src/styles/index.css',
  'public/fonts',
  'public/ghn-logo.svg',
  'public/ghn-icon.svg',
  'ghn-docs',
];

const target = process.argv[2];
if (!target) {
  console.error('Thiếu đường dẫn đích.\n  node scripts/sync-ds.mjs <project-đích>');
  process.exit(1);
}
const dest = fs.realpathSync(target);
if (!fs.statSync(dest).isDirectory()) {
  console.error(`Không phải thư mục: ${dest}`);
  process.exit(1);
}
if (dest === fs.realpathSync(ROOT)) {
  console.error('Đích trùng chính template này — bỏ qua.');
  process.exit(1);
}

let copied = 0;
for (const rel of DS_LAYER) {
  const from = `${ROOT}/${rel}`;
  if (!fs.existsSync(from)) continue;
  const to = `${dest}/${rel}`;
  fs.mkdirSync(to.slice(0, to.lastIndexOf('/')), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
  copied++;
  console.log('  ✓ ' + rel);
}
console.log(`\n✓ Đã đồng bộ ${copied} mục DS layer → ${dest}`);
console.log('→ Chạy `git diff` ở project đích để review, rồi `npm run tokens && npm run check-ds`.');
