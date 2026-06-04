#!/usr/bin/env node
/**
 * build-tokens — sinh `src/theme.ts` (antd ThemeConfig) và `src/styles/tokens.css` (CSS variables)
 * từ MỘT nguồn duy nhất: `tokens.json`. Chạy: `npm run tokens` (hoặc `--check` để chỉ kiểm, không ghi).
 *
 * Mục tiêu: theme.ts và tokens.css KHÔNG BAO GIỜ lệch nhau (vd radius input 4 vs 8) vì cả hai
 * đều phái sinh từ cùng một file. Đừng sửa tay hai file output đó.
 */
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

export const ROOT = fileURLToPath(new URL('..', import.meta.url));
const TS_HEADER = '// AUTO-GENERATED từ tokens.json bởi scripts/build-tokens.mjs — KHÔNG sửa tay. Chạy `npm run tokens`.';
const CSS_HEADER = '/* AUTO-GENERATED từ tokens.json bởi scripts/build-tokens.mjs — KHÔNG sửa tay. Chạy `npm run tokens`. */';

/** Đọc tokens.json và trả về { themeTs, tokensCss }. */
export function render() {
  const T = JSON.parse(fs.readFileSync(`${ROOT}/tokens.json`, 'utf8'));

  const themeTs = `${TS_HEADER}
import type { ThemeConfig } from 'antd';

/**
 * GHN theme cho <ConfigProvider> của antd. Vanilla Ant Design mặc định màu XANH — config này biến
 * nó thành GHN, nên BẮT BUỘC (đã áp ở GhnConfigProvider/main.tsx). Mọi giá trị đến từ tokens.json.
 */
export const ghnTheme: ThemeConfig = {
  token: {
    colorPrimary: '${T.brand.primary}',
    colorSuccess: '${T.brand.success}',
    colorWarning: '${T.brand.warning}',
    colorError: '${T.brand.error}',
    colorInfo: '${T.brand.info}',
    colorLink: '${T.brand.link}',
    borderRadius: ${T.radius.base},
    sizeUnit: ${T.sizeUnit},
    // Figma inputs/controls cao ${T.controlHeight}px; chỉnh controlHeight mặc định của antd cho khớp.
    controlHeight: ${T.controlHeight},
    fontFamily: "${T.fontStack}",
  },
  components: {
    // Input & Select dùng cùng bo góc mặc định ${T.radius.base}px như nút/card để giao diện đồng đều.
    Input: { borderRadius: ${T.radius.input} },
    Select: { borderRadius: ${T.radius.select} },
    Tag: { borderRadiusSM: ${T.radius.tag} },
  },
};
`;

  const primitiveLines = (obj, prefix) =>
    Object.entries(obj).map(([k, v]) => `  --ghn-primitive-${prefix}-${k}: ${v};`).join('\n');
  const primitives = [
    primitiveLines(T.primitive.color, 'color'),
    primitiveLines(T.primitive.spacing, 'spacing'),
    primitiveLines(T.primitive.radius, 'radius'),
    primitiveLines(T.primitive.font, 'font'),
  ].join('\n');
  const brandLines = (keys) => keys.map((k) => `  --ghn-brand-${k}: ${T.brand[k]};`).join('\n');

  const root = `:root {
${primitives}
${brandLines(['primary', 'success', 'warning', 'error', 'info', 'link'])}
  --ghn-radius-base: ${T.radius.base}px;
  --ghn-size-unit: ${T.sizeUnit}px;
  --ghn-component-input-radius: ${T.radius.input}px;
  --ghn-component-select-radius: ${T.radius.select}px;
  --ghn-component-tag-radius: ${T.radius.tag}px;
}`;
  const dark = `[data-theme="dark"] {
${primitives}
  --ghn-brand-primary: ${T.dark['brand-primary']};
  --ghn-brand-info: ${T.dark['brand-info']};
  --ghn-brand-link: ${T.dark['brand-link']};
  --ghn-radius-base: ${T.dark['radius-base']}px;
}`;
  const tokensCss = `${CSS_HEADER}\n${root}\n${dark}\n`;

  return { themeTs, tokensCss };
}

export const OUT = {
  theme: `${ROOT}/src/theme.ts`,
  tokens: `${ROOT}/src/styles/tokens.css`,
};

// ---------- CLI ----------
if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) {
  const { themeTs, tokensCss } = render();
  const check = process.argv.includes('--check');
  if (check) {
    const diffs = [];
    if (fs.readFileSync(OUT.theme, 'utf8') !== themeTs) diffs.push('src/theme.ts');
    if (fs.readFileSync(OUT.tokens, 'utf8') !== tokensCss) diffs.push('src/styles/tokens.css');
    if (diffs.length) {
      console.error(`✗ Lệch nguồn token: ${diffs.join(', ')} không khớp tokens.json. Chạy \`npm run tokens\`.`);
      process.exit(1);
    }
    console.log('✓ theme.ts + tokens.css khớp tokens.json');
  } else {
    fs.writeFileSync(OUT.theme, themeTs);
    fs.writeFileSync(OUT.tokens, tokensCss);
    console.log('✓ generated src/theme.ts + src/styles/tokens.css from tokens.json');
  }
}
