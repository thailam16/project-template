# Dự án dùng GHN Design System

**Luật sinh/sửa UI: đọc `AGENTS.md`** (nguồn chuẩn duy nhất).

Tóm tắt bất biến: dùng **Ant Design v6 chính chủ** (`npm install antd --save`, import từ `antd`);
app **bắt buộc** bọc `<ConfigProvider theme={ghnTheme}>` (`src/theme.ts`) để ra brand GHN (antd mặc
định màu xanh); màu/spacing/radius/font qua token `var(--ghn-*)` — không hardcode hex/px; chỉ font
Inter; icon chỉ FontAwesome 6 Pro (Regular mặc định) qua `<Icon/>`; bề mặt là soft card (fill HOẶC
border, không cả hai). Tài liệu & nguyên tắc component đầy đủ (khi nào dùng/KHÔNG dùng, token, a11y)
ở `ghn-docs/ai/guide.md`; props từng component ở `ghn-docs/ai/llms-full.txt`; catalog `ghn-docs/ai/components.json`.
