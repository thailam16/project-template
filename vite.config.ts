import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

// Plain Vite + React. Ant Design v6 (`antd`, installed from npm) uses CSS-in-JS, so no component
// CSS import is needed — only our token/global stylesheets in src/styles. The GHN brand is applied
// at runtime via <ConfigProvider theme={ghnTheme}> in src/main.tsx.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 5173,
  },
});
