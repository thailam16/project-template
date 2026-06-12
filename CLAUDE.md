# Dự án dùng GHN Design System

**Luật sinh/sửa UI: đọc `AGENTS.md`** (nguồn chuẩn duy nhất).

Tóm tắt bất biến: dùng **Ant Design v6 chính chủ** (`npm install antd --save`, import từ `antd`);
app **bắt buộc** bọc `<GhnConfigProvider>` (`src/components/GhnConfigProvider.tsx`) để ra brand GHN
(antd mặc định màu xanh); màu/spacing/radius/font qua token `var(--ghn-*)` — nguồn token DUY NHẤT là
`tokens.json` (`npm run tokens` sinh `theme.ts`+`tokens.css`, đừng sửa tay 2 file đó); chỉ font Inter;
icon chỉ FontAwesome 6 Pro (Regular mặc định) qua `<Icon/>`; bề mặt là soft card (fill HOẶC border,
không cả hai); cần **biểu đồ** → CHỈ dùng **Apache ECharts** (`echarts` + `echarts-for-react`) với
theme GHN chung (`registerGhnEchartsTheme()` + `theme="ghn"`) + accessibility (`aria.enabled`), không dùng chart lib khác (xem mục
Chart trong `AGENTS.md`). Tài liệu đầy đủ (khi nào dùng/KHÔNG dùng, token, a11y) ở `ghn-docs/ai/guide.md`; catalog
`ghn-docs/ai/components.json`; props/API đọc thẳng types `antd`. Trước khi giao: `npm run check-ds && npm run lint`.
