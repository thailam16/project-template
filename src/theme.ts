import type { ThemeConfig } from 'antd';

/**
 * GHN theme for antd's <ConfigProvider>.
 *
 * Vanilla Ant Design ships a BLUE default theme — this config is what makes antd look like GHN, so
 * it is REQUIRED (applied in `main.tsx`). Values mirror the GHN design tokens
 * (`../ant-design/dist/tokens/antd-theme.light.ts`); keep them in sync with `src/styles/tokens.css`.
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
    // Figma inputs/controls are 36px tall; align antd's default control height.
    controlHeight: 36,
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  },
  components: {
    // Input & Select dùng cùng bo góc mặc định 8px như nút/card để giao diện đồng đều.
    Input: { borderRadius: 8 },
    Select: { borderRadius: 8 },
    Tag: { borderRadiusSM: 2 },
  },
};
