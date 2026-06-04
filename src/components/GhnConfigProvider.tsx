import type { ReactNode } from 'react';
import { App as AntdApp, ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { ghnTheme } from '../theme';

/**
 * Bọc toàn bộ ứng dụng GHN: áp theme GHN (`ghnTheme`) + locale `vi_VN` + context
 * message/notification/modal của antd, trong MỘT chỗ.
 *
 * Dùng component này thay vì tự gọi `<ConfigProvider>` ở từng nơi — để KHÔNG BAO GIỜ quên brand
 * GHN (vanilla antd mặc định màu xanh). `ghnTheme` được generate từ `tokens.json`.
 */
export function GhnConfigProvider({ children }: { children: ReactNode }) {
  return (
    <ConfigProvider theme={ghnTheme} locale={viVN}>
      <AntdApp>{children}</AntdApp>
    </ConfigProvider>
  );
}

export default GhnConfigProvider;
