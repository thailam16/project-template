// AUTO-GENERATED từ tokens.json bởi scripts/build-tokens.mjs — KHÔNG sửa tay. Chạy `npm run tokens`.
import type { ThemeConfig } from 'antd';

/**
 * GHN theme cho <ConfigProvider> của antd. Vanilla Ant Design mặc định màu XANH — config này biến
 * nó thành GHN, nên BẮT BUỘC (đã áp ở GhnConfigProvider/main.tsx). Mọi giá trị đến từ tokens.json.
 */
export const ghnTheme: ThemeConfig = {
  token: {
    colorPrimary: '#ff5200',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#006fad',
    colorLink: '#006fad',
    borderRadius: 8,
    sizeUnit: 4,
    // Figma inputs/controls cao 36px; chỉnh controlHeight mặc định của antd cho khớp.
    controlHeight: 36,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  components: {
    // Input & Select dùng cùng bo góc mặc định 8px như nút/card để giao diện đồng đều.
    Input: { borderRadius: 8 },
    Select: { borderRadius: 8 },
    Tag: { borderRadiusSM: 2 },
  },
};
