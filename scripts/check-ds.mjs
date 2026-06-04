#!/usr/bin/env node
/**
 * check-ds — validator giữ GHN DS layer luôn nhất quán. Chạy: `npm run check-ds`.
 * Kiểm:
 *  1. theme.ts + tokens.css KHỚP tokens.json (chống lệch nguồn, vd radius 4 vs 8).
 *  2. Mọi file JSON trong ghn-docs/ai/ parse được.
 *  3. Không còn chuỗi '@ghn/design-system' trong ai/*.md|*.txt (dự án dùng 'antd').
 *  4. Không có "component ma": catalog không liệt kê component mà vanilla antd không export
 *     (trừ allowlist GHN_CUSTOM — thứ phải tự build).
 *  5. (cảnh báo) Hex màu cứng trong code .ts/.tsx — nên dùng token var(--ghn-*).
 */
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { render, OUT, ROOT } from './build-tokens.mjs';

const require = createRequire(import.meta.url);
const AI = `${ROOT}/ghn-docs/ai`;
const errors = [];
const warnings = [];

// 1) token sync
const { themeTs, tokensCss } = render();
if (fs.readFileSync(OUT.theme, 'utf8') !== themeTs)
  errors.push('src/theme.ts lệch tokens.json — chạy `npm run tokens`.');
if (fs.readFileSync(OUT.tokens, 'utf8') !== tokensCss)
  errors.push('src/styles/tokens.css lệch tokens.json — chạy `npm run tokens`.');

// 2) JSON validity
for (const f of fs.readdirSync(AI).filter((f) => f.endsWith('.json'))) {
  try { JSON.parse(fs.readFileSync(`${AI}/${f}`, 'utf8')); }
  catch (e) { errors.push(`JSON hỏng: ghn-docs/ai/${f} — ${e.message}`); }
}

// 3) no fork import leftover
for (const f of fs.readdirSync(AI).filter((f) => /\.(md|txt)$/.test(f))) {
  if (fs.readFileSync(`${AI}/${f}`, 'utf8').includes('@ghn/design-system'))
    errors.push(`Còn '@ghn/design-system' trong ghn-docs/ai/${f} — dự án dùng 'antd'.`);
}

// 4) ghost components vs vanilla antd
const ex = new Set(Object.keys(require('antd')));
const GHN_CUSTOM = new Set(['command']); // có chủ ý: antd KHÔNG có, phải tự build (vd cmdk)
const cat = JSON.parse(fs.readFileSync(`${AI}/components.json`, 'utf8'));
let entries = Array.isArray(cat) ? cat : cat.components || cat.pages || cat.items;
for (const k of Object.keys(cat)) if (Array.isArray(cat[k]) && cat[k][0]?.slug) entries = cat[k];
const pascal = (s) => s.split(/[-\s]/).map((w) => (w ? w[0].toUpperCase() + w.slice(1) : '')).join('');
for (const e of (entries || []).filter((e) => e.kind === 'component')) {
  const t = e.title.split(/[/(]/)[0].trim();
  const cands = [pascal(e.slug), e.slug, t.replace(/\s+/g, ''), pascal(t), 'QRCode'];
  if (e.slug === 'grid') cands.push('Row', 'Col');
  const hit = cands.some((x) => ex.has(x));
  if (!hit && !GHN_CUSTOM.has(e.slug))
    errors.push(`Component 'ma': '${e.slug}' (${e.title}) không có trong antd và chưa khai báo GHN_CUSTOM.`);
}

// 5) hardcoded hex in code (warn)
const walk = (dir) => {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${d.name}`;
    if (d.isDirectory()) walk(p);
    else if (/\.(tsx?|jsx?)$/.test(d.name) && p !== OUT.theme) {
      const m = fs.readFileSync(p, 'utf8').match(/#[0-9a-fA-F]{3,8}\b/g);
      if (m) warnings.push(`Hex cứng trong ${p.replace(ROOT + '/', '')}: ${[...new Set(m)].join(', ')} — nên dùng token var(--ghn-*).`);
    }
  }
};
walk(`${ROOT}/src`);

warnings.forEach((w) => console.log('⚠ ' + w));
if (errors.length) {
  console.error('\n✗ check-ds THẤT BẠI:');
  errors.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}
console.log(`\n✓ check-ds OK${warnings.length ? ` (${warnings.length} cảnh báo)` : ''}`);
