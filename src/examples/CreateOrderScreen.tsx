import type { ReactNode } from 'react';
import { App as AntdApp, Button, Divider, Form, Input, InputNumber, Radio, Select, Typography } from 'antd';
import { Icon } from '../components/common/Icon';

const { Text } = Typography;
const { TextArea } = Input;

/**
 * Màn hình ví dụ: Tạo đơn vận chuyển. Form bên trái (soft card + divider theo từng khối), thẻ tóm tắt
 * phí sticky bên phải (tính realtime qua Form.useWatch). Control cao 36px, radius 8 — theo theme GHN.
 */
const vnd = (n: number) => (n || 0).toLocaleString('vi-VN') + '₫';

const PROVINCES = ['TP. Hồ Chí Minh', 'Hà Nội', 'Đà Nẵng', 'Cần Thơ', 'Hải Phòng', 'Bình Dương'].map(
  (p) => ({ value: p, label: p }),
);
const PICKUPS = ['Kho Quận 7 — TP.HCM', 'Kho Cầu Giấy — Hà Nội', 'Kho Sơn Trà — Đà Nẵng'].map((p) => ({
  value: p,
  label: p,
}));
const SERVICES: Record<string, { label: string; desc: string; fee: number }> = {
  express: { label: 'Nhanh', desc: 'Giao trong ngày', fee: 35000 },
  standard: { label: 'Chuẩn', desc: 'Giao 1–2 ngày', fee: 25000 },
  saving: { label: 'Tiết kiệm', desc: 'Giao 3–5 ngày', fee: 18000 },
};

function SectionCard({ icon, title, children }: { icon: string; title: string; children: ReactNode }) {
  return (
    <section className="ghn-card form-card">
      <div className="form-card__title">
        <Icon name={icon} tone="primary" />
        {title}
      </div>
      {children}
    </section>
  );
}

export function CreateOrderScreen({ onDone }: { onDone: () => void }) {
  const { message } = AntdApp.useApp();
  const [form] = Form.useForm();

  const service = Form.useWatch('service', form) ?? 'standard';
  const weight = Form.useWatch('weight', form) ?? 0.5;
  const cod = Form.useWatch('cod', form) ?? 0;

  const baseFee = SERVICES[service]?.fee ?? 0;
  const weightFee = Math.max(0, Math.ceil(weight - 1)) * 5000;
  const shippingFee = baseFee + weightFee;

  return (
    <div className="screen">
      <header className="screen__head">
        <div>
          <h1 className="screen__title">Tạo đơn</h1>
          <span className="screen__sub">Nhập thông tin lấy & giao hàng để tạo vận đơn mới.</span>
        </div>
        <Button icon={<Icon name="arrow-left" tone="muted" />} onClick={onDone}>
          Quay lại
        </Button>
      </header>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{ service: 'standard', weight: 0.5, cod: 0 }}
        onFinish={() => {
          message.success('Đã tạo đơn vận chuyển');
          onDone();
        }}
      >
        <div className="order-grid">
          <div className="order-col">
            <SectionCard icon="warehouse" title="Người gửi">
              <Form.Item label="Điểm lấy hàng" name="pickup" rules={[{ required: true, message: 'Chọn kho lấy hàng' }]}>
                <Select options={PICKUPS} placeholder="Chọn kho" />
              </Form.Item>
            </SectionCard>

            <SectionCard icon="user" title="Người nhận">
              <Form.Item label="Họ tên" name="receiver" rules={[{ required: true, message: 'Nhập tên người nhận' }]}>
                <Input prefix={<Icon name="user" tone="muted" />} placeholder="Nguyễn Văn A" />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phone" rules={[{ required: true, message: 'Nhập số điện thoại' }]}>
                <Input prefix={<Icon name="phone" tone="muted" />} placeholder="09xx xxx xxx" />
              </Form.Item>
              <Form.Item label="Tỉnh / Thành phố" name="province" rules={[{ required: true, message: 'Chọn tỉnh/thành' }]}>
                <Select options={PROVINCES} placeholder="Chọn tỉnh/thành" showSearch />
              </Form.Item>
              <Form.Item label="Địa chỉ chi tiết" name="address" rules={[{ required: true, message: 'Nhập địa chỉ' }]}>
                <Input prefix={<Icon name="location-dot" tone="muted" />} placeholder="Số nhà, đường, phường/xã" />
              </Form.Item>
            </SectionCard>

            <SectionCard icon="box" title="Thông tin hàng">
              <Form.Item label="Tên hàng" name="item" rules={[{ required: true, message: 'Nhập tên hàng' }]}>
                <Input placeholder="VD: Áo thun, phụ kiện điện thoại…" />
              </Form.Item>
              <Form.Item label="Khối lượng" name="weight" rules={[{ required: true, message: 'Nhập khối lượng' }]}>
                <InputNumber min={0.1} step={0.1} addonAfter="kg" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item label="Tiền thu hộ (COD)" name="cod" tooltip="Số tiền GHN thu hộ từ người nhận">
                <InputNumber<number>
                  min={0}
                  step={1000}
                  addonAfter="₫"
                  style={{ width: '100%' }}
                  formatter={(v) => `${v}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                  parser={(v) => Number((v ?? '').replace(/\./g, ''))}
                />
              </Form.Item>
              <Form.Item label="Ghi chú" name="note">
                <TextArea rows={2} placeholder="Lưu ý cho shipper (giờ giao, gọi trước…)" />
              </Form.Item>
            </SectionCard>

            <SectionCard icon="truck-fast" title="Dịch vụ giao hàng">
              <Form.Item name="service" noStyle>
                <Radio.Group style={{ display: 'flex', flexDirection: 'column', gap: 'var(--ghn-s8)' }}>
                  {Object.entries(SERVICES).map(([key, s]) => (
                    <Radio key={key} value={key}>
                      <Text strong>{s.label}</Text> — {s.desc} · {vnd(s.fee)}
                    </Radio>
                  ))}
                </Radio.Group>
              </Form.Item>
            </SectionCard>
          </div>

          <aside className="ghn-card order-summary">
            <div className="form-card__title">
              <Icon name="money-bill" tone="primary" />
              Tóm tắt
            </div>
            <div className="summary-row">
              <span>Phí dịch vụ ({SERVICES[service]?.label})</span>
              <span>{vnd(baseFee)}</span>
            </div>
            <div className="summary-row">
              <span>Phụ phí khối lượng</span>
              <span>{vnd(weightFee)}</span>
            </div>
            <Divider style={{ margin: 'var(--ghn-s8) 0' }} />
            <div className="summary-row summary-row--total">
              <span>Tổng phí vận chuyển</span>
              <span style={{ color: 'var(--ghn-primary)' }}>{vnd(shippingFee)}</span>
            </div>
            <div className="summary-row">
              <span>Người nhận trả (COD)</span>
              <span>{vnd(cod)}</span>
            </div>

            <Button
              type="primary"
              block
              size="large"
              htmlType="submit"
              icon={<Icon name="paper-plane" tone="inverse" />}
              style={{ marginTop: 'var(--ghn-s16)' }}
            >
              Tạo đơn
            </Button>
            <Button block icon={<Icon name="floppy-disk" tone="muted" />} style={{ marginTop: 'var(--ghn-s8)' }}>
              Lưu nháp
            </Button>
          </aside>
        </div>
      </Form>
    </div>
  );
}

export default CreateOrderScreen;
