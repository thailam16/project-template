import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GhnConfigProvider } from './components/GhnConfigProvider';
import App from './App';
import './styles/index.css';
import './styles/app.css';

// GhnConfigProvider áp theme GHN + locale vi_VN + context message/notification/modal.
// Luôn bọc app trong nó — đừng tự gọi ConfigProvider lẻ (dễ quên brand → ra antd xanh).
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GhnConfigProvider>
      <App />
    </GhnConfigProvider>
  </StrictMode>,
);
