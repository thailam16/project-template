# GHN Design System — Luật cho AI (vibe coding)

> Mọi AI agent sinh/sửa UI trong dự án này **PHẢI** tuân theo các ràng buộc bên dưới.
> Đây là nguồn chuẩn duy nhất. `CLAUDE.md` chỉ trỏ về file này.
> Nền tảng: **Ant Design v6** (`antd`, cài từ npm) — được theme lại thành GHN qua `ConfigProvider`.
> Nguyên tắc & cách dùng component GHN: thư mục **`ghn-docs/`** đi kèm ngay trong dự án.

---

## ⛔️ Quy tắc bất biến (đọc trước khi viết bất kỳ dòng nào)

1. **Dùng Ant Design v6 chính chủ.** Cài bằng `npm install antd --save`, rồi `import { Button } from 'antd'`. Không tự dựng lại component đã có (Button, Input, Select, Table, Modal, Form…). Không trộn thư viện UI khác (MUI, Chakra…).
2. **Theme GHN là bắt buộc.** Ant Design mặc định màu xanh — app phải bọc trong `<ConfigProvider theme={ghnTheme}>` (`src/theme.ts`, đã set ở `src/main.tsx`) để ra brand GHN.
3. **Token, không hardcode.** Màu / spacing / radius / font luôn qua `var(--ghn-*)` (CSS) hoặc token `ConfigProvider` (antd). **KHÔNG** hardcode hex, px, radius, font-family.
4. **Chỉ font chữ Inter.** Đã nạp sẵn trong `index.html` + token `--ghn-font`.
5. **Icon: chỉ FontAwesome 6 Pro** (Regular 400 mặc định), dùng qua `<Icon/>` (`src/components/common/Icon.tsx`). Không trộn bộ icon khác (Material, `@ant-design/icons`, emoji…).
6. **Radius mặc định 8px**; input/select 8px, tag 2px; control cao **36px** (đã set trong `theme.ts`).
7. **Tuân thủ design system** mô tả trong `ghn-docs/` (xem mục [Nguồn tham chiếu](#-nguồn-tham-chiếu-cho-ai)).

---

## Imports

- ✅ `import { Button, Input, Table, ConfigProvider, theme } from 'antd'`
- ✅ Locale tiếng Việt: `import viVN from 'antd/locale/vi_VN'` (đã set ở `main.tsx`).
- ✅ Type: `import type { ThemeConfig } from 'antd'`.
- ✅ Icon antd dạng vẽ tay nếu rất cần: KHÔNG — dùng `<Icon/>` (FontAwesome 6 Pro) thay cho `@ant-design/icons`.

## Theming & tokens

- **Bắt buộc** bọc app bằng **`<GhnConfigProvider>`** (`src/components/GhnConfigProvider.tsx`, đã làm sẵn ở `main.tsx`) — nó bọc `ConfigProvider` + `ghnTheme` + locale `vi_VN` + `App` của antd trong một chỗ để **không bao giờ quên brand** (antd mặc định màu xanh). `ghnTheme`: `colorPrimary #ff5200`, `colorInfo/Link #006fad`, `borderRadius 8`, `controlHeight 36`, font Inter, Input/Select radius 8 (đồng bộ mặc định), Tag 2.
- **Nguồn token DUY NHẤT là `tokens.json`** ở gốc dự án. `npm run tokens` sinh ra `src/theme.ts` + `src/styles/tokens.css` (cả hai AUTO-GENERATED — **KHÔNG sửa tay**). Đổi màu/radius/spacing → sửa `tokens.json` rồi chạy lại. `npm run check-ds` kiểm mọi thứ còn đồng bộ.
- Chỉ theme qua **design token + `ConfigProvider`**. Không hardcode.
- Token CSS sẵn dùng (định nghĩa trong `src/styles/tokens.css` + `semantic.css`):
  - Brand: `--ghn-primary`, `--ghn-primary-hover`, `--ghn-primary-active`, `--ghn-primary-soft`, `--ghn-on-primary`
  - Văn bản: `--ghn-text`, `--ghn-text-muted`, `--ghn-placeholder`, `--ghn-text-inverse`
  - Nền/viền: `--ghn-white`, `--ghn-bg-subtle`, `--ghn-border`
  - Trạng thái (+ bộ soft `*-soft-bg/-text/-border`): `--ghn-success`, `--ghn-warning`, `--ghn-error`, `--ghn-info`
  - Spacing (lưới 4): `--ghn-s4 … --ghn-s64`
  - Radius: `--ghn-r-default: 8px`, `--ghn-r-tag: 6px`, `--ghn-r-pill: 999px`, `--ghn-r-card: 12px`
  - Font: `--ghn-font` (Inter), cỡ `--ghn-primitive-font-size-{sm|body|lg|title}` = 12/14/16/18
- Dark mode: `<ConfigProvider theme={{ algorithm: theme.darkAlgorithm, token: { colorPrimary: '#ff5200' } }}>` (import `theme` từ `antd`).

## Icons — bắt buộc

- Bộ icon **DUY NHẤT**: FontAwesome 6 Pro (font cục bộ `public/fonts/fa-*.ttf`: Solid 900 · Regular 400 · Light 300 · Thin 100). Dùng qua `<Icon name="truck-fast" />`.
- **Regular (400) là mặc định.** Solid để nhấn mạnh, Light/Thin cho ngữ cảnh nhẹ — không trộn nhiều trọng lượng trong cùng một cụm.
- Kích thước bám cỡ chữ: **12** (caption) · **16** (body 14) · **20** (body 16) · **24** (tiêu đề).
- Màu qua `tone`: `default` (#09090b) · `muted` (#52525b) · `primary` (#ff5200) · `inverse` (#fafafa). Không hardcode màu icon.
- A11y: icon trang trí → tự `aria-hidden`; icon mang nghĩa / nút chỉ-icon → truyền `label` (thành `aria-label`). Không truyền trạng thái chỉ bằng icon/màu — luôn kèm chữ.
- Glyph khả dụng nằm trong `src/styles/fontawesome.css`. Cần glyph mới → thêm 1 dòng `.fa-<name>::before{content:"\\xxxx"}` (codepoint FA6 Pro) vào file đó.

## Border vs fill — chọn MỘT (chuẩn Figma GHN)

- Bề mặt là **soft card** (hairline + bóng nhẹ qua `.ghn-card`), **không** viền cứng, ưu tiên phân biệt card trên nền bằng màu sắc.
- Một khối có **fill HOẶC border, không cả hai.** Ô giá trị read-only → nền xám (`--ghn-bg-subtle`), không viền. Tag/pill/bubble dùng nền soft, không viền.
- Phân tách trong card bằng **divider line**, không bằng viền bao quanh từng phần tử.
- Khối thông tin dài → cho **collapse**; field hồ sơ → ưu tiên **inline-edit** (click để sửa) thay vì form rời.

## Accessibility

- Mọi phần tử tương tác phải có tên truy cập được (text hiển thị, `aria-label`, hoặc `Form.Item` label).
- `Button` chỉ-icon **bắt buộc** `aria-label`. Không xoá focus outline. Tôn trọng điều hướng bàn phím.

## Branding

- Logo đầy đủ: `public/ghn-logo.svg`. Icon vuông (favicon/spot nhỏ): `public/ghn-icon.svg`.
- Không tự vẽ lại / đổi màu logo. Dùng trực tiếp file SVG.

## 📚 Nguồn tham chiếu cho AI

Khi cần biết khi-nào-dùng / "không nên dùng" / token / props của một component hoặc nguyên tắc nền tảng, **đọc** (đừng đoán). Tất cả là text máy-đọc nằm **trong `ghn-docs/`**, không cần internet:

- **⭐ `ghn-docs/ai/guide.md`** — nguồn chính: mỗi component & nền tảng có *khi nào dùng / KHÔNG dùng*, *nên / không nên*, *design tokens* (`var(--ghn-*)` kèm giá trị), *khả năng tiếp cận*. Nhóm theo: Tổng quan · Hướng dẫn · Nền tảng (màu, kiểu chữ, spacing, icon, motion, elevation, …) · Cơ bản · Bố cục · Điều hướng · Nhập liệu · Hiển thị dữ liệu · Phản hồi.
- **`ghn-docs/ai/components.json`** — catalog: slug, group, status, sections, và mảng `doNotUse` đã điền đầy đủ.
- **Props / API component** — đọc trực tiếp **types trong `node_modules/antd`** (chính xác theo version đã cài) hoặc docs antd. KHÔNG đóng băng API antd trong repo (tránh lệch khi antd nâng cấp).
- **`ghn-docs/ai/recipes.json`** — mẫu UI phổ biến (hộp thoại xác nhận, list+lọc, form, thông báo).
- **`ghn-docs/ai/llms.txt`** — chỉ mục; **`ghn-docs/component-schema.json`** — schema metadata.
- Token đã trích sẵn ở `src/styles/tokens.css` + `semantic.css`; bản đồ icon ở `src/styles/fontawesome.css`.

> ⚠️ `ghn-docs/` là chuẩn GHN distill từ tài liệu trên Ant Design v6, đã chuẩn hoá về **`antd`**.
> Khi mâu thuẫn với hành vi thực tế của `antd` đã cài, ưu tiên nguyên tắc/token GHN và chỉnh qua `ConfigProvider`.

## Cấu trúc dự án

```
.
├── AGENTS.md                # ⭐ luật cho AI (file này — nguồn chuẩn duy nhất)
├── CLAUDE.md                # con trỏ tới AGENTS.md cho Claude Code
├── tokens.json              # ⭐ NGUỒN TOKEN duy nhất → sinh theme.ts + tokens.css
├── ghn-docs/ai/guide.md     # ⭐ hướng dẫn GHN đầy đủ (text, AI đọc) + components.json/recipes.json
├── scripts/
│   ├── build-tokens.mjs     # tokens.json → theme.ts + tokens.css (`npm run tokens`)
│   ├── check-ds.mjs         # validator: token đồng bộ, JSON, component-ma… (`npm run check-ds`)
│   └── sync-ds.mjs          # copy DS layer sang project khác (`npm run sync-ds -- <path>`)
└── src/
    ├── main.tsx             # bọc <GhnConfigProvider> + App  (BẮT BUỘC)
    ├── App.tsx              # màn hình khởi đầu — XOÁ và thay bằng UI của bạn
    ├── theme.ts             # AUTO-GENERATED từ tokens.json — KHÔNG sửa tay
    ├── components/
    │   ├── GhnConfigProvider.tsx # bọc ConfigProvider+theme+locale (đừng quên brand)
    │   ├── common/Icon.tsx       # wrapper FontAwesome 6 Pro (bộ icon duy nhất)
    │   └── layout/AppLayout.tsx  # sidebar (branding) + content shell
    └── styles/
        ├── index.css        # thứ tự import: tokens → semantic → fontawesome → global
        ├── tokens.css       # AUTO-GENERATED từ tokens.json — KHÔNG sửa tay
        ├── semantic.css     # alias semantic (--ghn-primary, --ghn-text-muted, …)
        ├── fontawesome.css  # @font-face + bản đồ glyph FA6 Pro
        ├── global.css       # reset + typography nền
        └── app.css          # style app shell (xoá phần .page/.welcome-card khi tự dựng)
```

## Checklist trước khi giao việc

- [ ] Component import từ `antd` (Ant Design v6); icon qua `<Icon/>` (không `@ant-design/icons`).
- [ ] App được bọc `<GhnConfigProvider>` — brand ra cam GHN, không phải xanh antd.
- [ ] Đổi token? Sửa `tokens.json` + `npm run tokens`; `npm run check-ds` + `npm run lint` sạch.
- [ ] Không có hex/px/radius/font hardcode — tất cả qua `var(--ghn-*)` hoặc token `ConfigProvider`.
- [ ] Nút chỉ-icon có `aria-label`; bề mặt là soft card (không "vừa fill vừa border").
- [ ] `npm run build` và `npm run typecheck` chạy sạch.
