import { App as AntdApp, Button, Checkbox, Form, Input, Typography } from 'antd';
import { Icon } from '../components/common/Icon';

const { Title, Text } = Typography;

/**
 * Màn hình ví dụ: Đăng nhập. Split layout — panel thương hiệu (nền cam GHN) + thẻ form mềm.
 * Tuân thủ DS: component từ `antd`, icon qua `<Icon/>`, màu/spacing qua token `var(--ghn-*)`.
 */
const FEATURES = [
  { icon: 'truck-fast', text: 'Tạo & điều phối vận đơn trong vài giây' },
  { icon: 'location-dot', text: 'Theo dõi hành trình realtime toàn quốc' },
  { icon: 'circle-check', text: 'Đối soát COD minh bạch, tự động' },
];

export function LoginScreen({ onLogin }: { onLogin: () => void }) {
  const { message } = AntdApp.useApp();

  return (
    <div className="login">
      <section className="login__brand">
        <img src="/ghn-logo.svg" alt="GHN" height={36} style={{ alignSelf: 'flex-start' }} />
        <h1>Giao Hàng Nhanh</h1>
        <p>Nền tảng quản lý vận đơn nội bộ — tạo đơn, điều phối và đối soát trên cùng một màn hình.</p>
        <div className="login__features">
          {FEATURES.map((f) => (
            <div className="login__feature" key={f.icon}>
              <Icon name={f.icon} tone="inverse" size={20} />
              <Text style={{ color: 'var(--ghn-on-primary)' }}>{f.text}</Text>
            </div>
          ))}
        </div>
      </section>

      <section className="login__panel">
        <div className="ghn-card login__card">
          <Title level={3} style={{ marginBottom: 'var(--ghn-s4)' }}>
            Đăng nhập
          </Title>
          <Text type="secondary">Dùng tài khoản GHN của bạn để tiếp tục.</Text>

          <Form
            layout="vertical"
            requiredMark={false}
            style={{ marginTop: 'var(--ghn-s24)' }}
            initialValues={{ remember: true }}
            onFinish={() => {
              message.success('Đăng nhập thành công');
              onLogin();
            }}
          >
            <Form.Item
              label="Email / Số điện thoại"
              name="account"
              rules={[{ required: true, message: 'Nhập email hoặc số điện thoại' }]}
            >
              <Input size="large" prefix={<Icon name="user" tone="muted" />} placeholder="ban@ghn.vn" />
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: 'Nhập mật khẩu' }]}
            >
              <Input.Password size="large" prefix={<Icon name="lock" tone="muted" />} placeholder="••••••••" />
            </Form.Item>

            <div className="login__row">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Ghi nhớ đăng nhập</Checkbox>
              </Form.Item>
              <a href="#quen-mat-khau" onClick={(e) => e.preventDefault()}>
                Quên mật khẩu?
              </a>
            </div>

            <Button
              type="primary"
              size="large"
              htmlType="submit"
              block
              icon={<Icon name="arrow-right-from-bracket" tone="inverse" />}
            >
              Đăng nhập
            </Button>
          </Form>
        </div>
      </section>
    </div>
  );
}

export default LoginScreen;
