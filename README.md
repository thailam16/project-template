# GHN · Vibe Coding Template

Template khởi đầu cho các dự án **vibe coding** tại GHN. **Tự chứa, gọn, chia sẻ được** — không phụ
thuộc repo nào khác. Đã ghim sẵn theme, icon, branding và **toàn bộ tài liệu GHN** để AI (Claude Code,
Codex, Cursor…) sinh UI **đúng chuẩn GHN ngay từ đầu**.

- **Stack:** Vite 6 + React 19 + TypeScript
- **UI:** **Ant Design v6** (`antd` chính chủ từ npm) — theme lại thành GHN qua `ConfigProvider`
- **Icon:** FontAwesome 6 Pro (đã nhúng `public/fonts/fa-*.ttf`)
- **Branding:** logo GHN sẵn trong `public/`
- **Tài liệu GHN:** `ghn-docs/ai/guide.md` — hướng dẫn đầy đủ (text, AI đọc) cho 82 component & nền tảng
- **Luật cho AI:** `AGENTS.md` (+ `CLAUDE.md` trỏ về nó)

## Bắt đầu

```bash
npm install        # cài antd + react + vite (kéo từ npm)
npm run dev        # http://localhost:5173
npm run build      # tsc --noEmit && vite build
npm run typecheck
```

> Không cần repo `ant-design` cạnh bên — mọi thứ đã nằm trong thư mục này.

## Dùng làm template

1. Copy / chia sẻ cả thư mục này cho dự án mới (zip hoặc tạo repo từ nó).
2. `npm install`, đổi `name` trong `package.json`.
3. **Xoá màn hình khởi đầu** (`src/App.tsx` + phần `.page`/`.welcome-card` trong `src/styles/app.css`) và dựng UI của bạn.
4. Để AI làm việc: nó sẽ tự đọc `AGENTS.md`. Cứ mô tả màn hình cần dựng — ràng buộc đã được cài sẵn.

## Quy ước (tóm tắt — chi tiết ở `AGENTS.md`)

- **Component** từ `antd` (Ant Design v6). Không trộn thư viện UI khác; icon không dùng `@ant-design/icons`.
- **Theme GHN bắt buộc:** app bọc `<ConfigProvider theme={ghnTheme}>` (`src/theme.ts`) — antd mặc định màu xanh.
- **Không hardcode** màu/px/radius/font — dùng token `var(--ghn-*)` (`src/styles/tokens.css` + `semantic.css`).
- **Icon:** chỉ FontAwesome 6 Pro qua `<Icon/>` (Regular mặc định) — `src/components/common/Icon.tsx`.
- Chỉ font **Inter**; radius mặc định **8px**; control cao **36px**.
- Bề mặt là **soft card** (fill HOẶC border, không cả hai).
- Tài liệu design system đầy đủ (khi nào dùng/KHÔNG dùng, token, a11y): `ghn-docs/ai/guide.md`; props từng component: `ghn-docs/ai/llms-full.txt`; catalog: `ghn-docs/ai/components.json`.

## Cấu trúc

```
.
├── AGENTS.md                # ⭐ luật cho AI (nguồn chuẩn duy nhất)
├── CLAUDE.md                # con trỏ tới AGENTS.md cho Claude Code
├── ghn-docs/ai/             # ⭐ guide.md (hướng dẫn GHN đầy đủ) + components.json + llms-full.txt + recipes.json
├── index.html               # nạp font Inter + root
├── vite.config.ts           # Vite + React thuần
├── public/
│   ├── fonts/fa-*.ttf        # FontAwesome 6 Pro (Solid/Regular/Light/Thin)
│   ├── ghn-logo.svg          # logo đầy đủ
│   └── ghn-icon.svg          # logo icon (favicon)
└── src/
    ├── main.tsx              # ConfigProvider (theme GHN + vi_VN)  ← bắt buộc
    ├── App.tsx               # màn hình khởi đầu (xoá khi bắt đầu)
    ├── theme.ts              # ghnTheme: ThemeConfig
    ├── components/
    │   ├── common/Icon.tsx   # wrapper FontAwesome 6 Pro
    │   └── layout/AppLayout.tsx
    └── styles/               # tokens, semantic, fontawesome, global, app
```

> Dung lượng: bản chia sẻ (không tính `node_modules` — `npm install` tự tạo lại) chỉ ~5MB:
> `public/fonts` (FontAwesome, ~4MB cần cho runtime) + `ghn-docs/ai` (~0.8MB text). Đã bỏ font trùng
> và 80 trang HTML — toàn bộ guidance đã distill vào `ghn-docs/ai/guide.md`.
