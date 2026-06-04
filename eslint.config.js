import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';

// Ép một phần luật GHN DS bằng lint (xem AGENTS.md). Chạy: `npm run lint`.
export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'ghn-docs', 'scripts', '*.config.js', '*.config.ts'] },
  {
    files: ['src/**/*.{ts,tsx}'],
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // GHN DS: ép dùng đúng nguồn component/icon
      'no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@ant-design/icons',
              message: 'GHN DS: dùng <Icon/> (FontAwesome 6 Pro) thay cho @ant-design/icons.',
            },
          ],
          patterns: [
            {
              group: ['antd/es/*', 'antd/lib/*'],
              message: "GHN DS: import từ 'antd', không import sâu antd/es|antd/lib.",
            },
          ],
        },
      ],
    },
  },
);
