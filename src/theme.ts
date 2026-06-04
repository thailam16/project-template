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
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif",
  },
  components: {
    Input: { borderRadius: 4 },
    Select: { borderRadius: 4 },
    Tag: { borderRadiusSM: 2 },
  },
};
