import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App as AntdApp, ConfigProvider } from 'antd';
import viVN from 'antd/locale/vi_VN';
import { ghnTheme } from './theme';
import App from './App';
import './styles/index.css';
import './styles/app.css';

// `ghnTheme` is what turns vanilla antd into GHN (brand colours + Inter + radii) — it is required.
// `AntdApp` supplies message/notification/modal context bound to the theme.
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={ghnTheme} locale={viVN}>
      <AntdApp>
        <App />
      </AntdApp>
    </ConfigProvider>
  </StrictMode>,
);
