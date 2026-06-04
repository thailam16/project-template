# GHN · Vibe Coding Template

Template khởi đầu cho các dự án **vibe coding** tại GHN. **Tự chứa, gọn, chia sẻ được** — không phụ
thuộc repo nào khác. Đã ghim sẵn theme, icon, branding và **toàn bộ tài liệu GHN** để AI (Claude Code,
Codex, Cursor…) sinh UI **đúng chuẩn GHN ngay từ đầu**.

- **Stack:** Vite 6 + React 19 + TypeScript
- **UI:** **Ant Design v6** (`antd` chính chủ từ npm) — theme thành GHN qua `<GhnConfigProvider>`
- **Token:** một nguồn duy nhất `tokens.json` → sinh `theme.ts` + `tokens.css` (`npm run tokens`)
- **Icon:** FontAwesome 6 Pro (đã nhúng `public/fonts/fa-*.ttf`)
- **Branding:** logo GHN sẵn trong `public/`
- **Tài liệu GHN:** `ghn-docs/ai/guide.md` — hướng dẫn đầy đủ (text, AI đọc) cho 82 component & nền tảng
- **Luật cho AI:** `AGENTS.md` (+ `CLAUDE.md` trỏ về nó), kèm `npm run lint` + `npm run check-ds` để chống lệch

## Bắt đầu

```bash
npm install        # cài antd + react + vite (kéo từ npm)
npm run dev        # http://localhost:5173 (tự chạy `tokens` trước)
npm run build      # sinh token → tsc --noEmit → vite build
npm run typecheck
npm run lint       # ESLint: chặn @ant-design/icons, import sâu antd/es|lib
npm run tokens     # sinh lại theme.ts + tokens.css từ tokens.json
npm run check-ds   # kiểm token đồng bộ, JSON, không sót @ghn, component-ma
```

> Không cần repo `ant-design` cạnh bên — mọi thứ đã nằm trong thư mục này.

### Đổi màu/radius/spacing
Sửa **`tokens.json`** (nguồn duy nhất) → `npm run tokens` (sinh lại `theme.ts` + `tokens.css`). **Đừng sửa tay** hai file đó. `npm run check-ds` đảm bảo chúng không lệch nhau (đây là cách chống sự cố kiểu "radius 4 vs 8").

### Cập nhật DS cho project đã tạo
Nếu bạn đã clone template ra một project và muốn nhận bản vá DS mới (token, guide, Icon, rules):
```bash
npm run sync-ds -- /đường/dẫn/tới/project-đích
```
Chỉ copy lớp design system, không đụng `App.tsx`/`package.json`/config của đích — `git diff` để review.

## Dùng làm template

1. Copy / chia sẻ cả thư mục này cho dự án mới (zip hoặc tạo repo từ nó).
2. `npm install`, đổi `name` trong `package.json`.
3. **Xoá màn hình khởi đầu** (`src/App.tsx` + phần `.page`/`.welcome-card` trong `src/styles/app.css`) và dựng UI của bạn.
4. Để AI làm việc: nó sẽ tự đọc `AGENTS.md`. Cứ mô tả màn hình cần dựng — ràng buộc đã được cài sẵn.

## Quy ước (tóm tắt — chi tiết ở `AGENTS.md`)

- **Component** từ `antd` (Ant Design v6). Không trộn thư viện UI khác; icon không dùng `@ant-design/icons`.
- **Theme GHN bắt buộc:** app bọc `<GhnConfigProvider>` (`src/components/GhnConfigProvider.tsx`) — antd mặc định màu xanh.
- **Không hardcode** màu/px/radius/font — dùng token `var(--ghn-*)`; giá trị gốc ở `tokens.json`.
- **Icon:** chỉ FontAwesome 6 Pro qua `<Icon/>` (Regular mặc định) — `src/components/common/Icon.tsx`.
- Chỉ font **Inter**; radius mặc định **8px**; control cao **36px**.
- Bề mặt là **soft card** (fill HOẶC border, không cả hai).
- Tài liệu đầy đủ (khi nào dùng/KHÔNG dùng, token, a11y): `ghn-docs/ai/guide.md`; catalog: `ghn-docs/ai/components.json`; **props/API component đọc thẳng types `antd`** (không đóng băng trong repo).

## Cấu trúc

```
.
├── AGENTS.md                # ⭐ luật cho AI (nguồn chuẩn duy nhất)
├── CLAUDE.md                # con trỏ tới AGENTS.md cho Claude Code
├── tokens.json              # ⭐ NGUỒN TOKEN duy nhất → sinh theme.ts + tokens.css
├── eslint.config.js         # ép @ant-design/icons + import sâu antd
├── ghn-docs/ai/             # ⭐ guide.md (hướng dẫn GHN đầy đủ) + components.json + recipes.json
├── scripts/
│   ├── build-tokens.mjs      # tokens.json → theme.ts + tokens.css
│   ├── check-ds.mjs          # validator (token đồng bộ, JSON, component-ma…)
│   └── sync-ds.mjs           # copy DS layer sang project khác
├── public/
│   ├── fonts/fa-*.ttf        # FontAwesome 6 Pro (Solid/Regular/Light/Thin)
│   ├── ghn-logo.svg / ghn-icon.svg
└── src/
    ├── main.tsx              # bọc <GhnConfigProvider> + App
    ├── App.tsx               # màn hình khởi đầu (xoá khi bắt đầu)
    ├── theme.ts              # AUTO-GENERATED từ tokens.json — không sửa tay
    ├── components/
    │   ├── GhnConfigProvider.tsx  # bọc ConfigProvider+theme+locale
    │   ├── common/Icon.tsx        # wrapper FontAwesome 6 Pro
    │   └── layout/AppLayout.tsx
    └── styles/               # tokens.css (gen) + semantic, fontawesome, global, app
```

> Dung lượng: bản chia sẻ (không tính `node_modules` — `npm install` tự tạo lại) chỉ ~5MB:
> `public/fonts` (FontAwesome, ~4MB cần cho runtime) + `ghn-docs/ai` (~0.75MB text). Đã bỏ font trùng,
> 80 trang HTML và bảng props antd đông cứng — guidance GHN nằm gọn ở `ghn-docs/ai/guide.md`.
