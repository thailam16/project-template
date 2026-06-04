import { App as AntdApp, Button, Space, Tag, Typography } from 'antd';
import { AppLayout } from './components/layout/AppLayout';
import { Icon } from './components/common/Icon';

const { Title, Paragraph, Text } = Typography;

/**
 * Starter screen — delete everything inside <AppLayout> and build your own.
 *
 * It exists only to demonstrate the GHN conventions in one place:
 *  • components come from `antd` (Ant Design v6), themed to GHN via ConfigProvider in main.tsx
 *  • colour/spacing/radius/font flow through `var(--ghn-*)` tokens — no hardcoded hex/px
 *  • icons are FontAwesome 6 Pro via <Icon> (Regular default), decorative ones are aria-hidden
 *  • surfaces are soft cards (`.ghn-card`), not hard-bordered boxes (fill OR border, not both)
 */
export default function App() {
  const { message } = AntdApp.useApp();

  return (
    <AppLayout>
      <div className="page">
        <header className="page__header">
          <Title level={3} style={{ margin: 0 }}>
            Chào mừng đến với GHN Design System
          </Title>
          <Paragraph type="secondary" style={{ margin: 0 }}>
            Template khởi đầu cho vibe coding — đã ghim sẵn theme, token, icon và branding GHN.
          </Paragraph>
        </header>

        <section className="ghn-card welcome-card">
          <div className="welcome-card__row">
            <Tag color="success">Ổn định</Tag>
            <Tag color="processing">Ant Design v6</Tag>
            <Tag>Inter · radius 8 · FontAwesome 6 Pro</Tag>
          </div>

          <Title level={5} style={{ marginTop: 'var(--ghn-s16)' }}>
            Bắt đầu nhanh
          </Title>
          <ul className="welcome-card__list">
            <li>
              <Icon name="box" tone="primary" />
              <Text>
                Cài <Text code>npm i antd</Text> rồi import component từ <Text code>antd</Text>{' '}
                (Ant Design v6).
              </Text>
            </li>
            <li>
              <Icon name="wand-magic-sparkles" tone="primary" />
              <Text>
                Dùng token <Text code>var(--ghn-*)</Text> cho màu/spacing/radius — không hardcode.
              </Text>
            </li>
            <li>
              <Icon name="icons" tone="primary" />
              <Text>
                Icon qua <Text code>{'<Icon name="..." />'}</Text> (FontAwesome 6 Pro, Regular mặc định).
              </Text>
            </li>
            <li>
              <Icon name="book" tone="primary" />
              <Text>
                Tra cứu quy tắc trong <Text code>AGENTS.md</Text>; tài liệu component ở{' '}
                <Text code>ghn-docs/</Text>.
              </Text>
            </li>
          </ul>

          <Space style={{ marginTop: 'var(--ghn-s8)' }}>
            <Button
              type="primary"
              icon={<Icon name="bolt" tone="inverse" />}
              onClick={() => message.success('Sẵn sàng vibe coding!')}
            >
              Bắt đầu
            </Button>
            <Button
              icon={<Icon name="book" />}
              href="https://github.com"
              target="_blank"
            >
              Tài liệu
            </Button>
            <Button
              type="text"
              aria-label="Làm mới"
              icon={<Icon name="arrows-rotate" tone="muted" />}
            />
          </Space>
        </section>
      </div>
    </AppLayout>
  );
}
