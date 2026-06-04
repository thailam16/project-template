import { Button, Table, Tag, Typography } from 'antd';
import type { TableColumnsType } from 'antd';
import { Icon } from '../components/common/Icon';

const { Text } = Typography;

/**
 * Màn hình ví dụ: Tổng quan (Dashboard). KPI dạng soft card + bảng đơn gần đây.
 * Bề mặt là `.ghn-card` (fill + hairline mềm, KHÔNG viền cứng). Trạng thái dùng Tag theo token màu.
 */
const vnd = (n: number) => n.toLocaleString('vi-VN') + '₫';

const KPIS = [
  { icon: 'box', label: 'Đơn hôm nay', value: '124', trend: '+12%', up: true },
  { icon: 'truck-fast', label: 'Đang giao', value: '38', trend: '+5%', up: true },
  { icon: 'circle-check', label: 'Giao thành công', value: '1.840', trend: '+8%', up: true },
  { icon: 'rotate-left', label: 'Hoàn / Huỷ', value: '7', trend: '-2%', up: false },
];

type OrderStatus = 'pending' | 'delivering' | 'done' | 'returned';
const STATUS: Record<OrderStatus, { label: string; color: string }> = {
  pending: { label: 'Chờ lấy hàng', color: 'default' },
  delivering: { label: 'Đang giao', color: 'processing' },
  done: { label: 'Giao thành công', color: 'success' },
  returned: { label: 'Hoàn hàng', color: 'warning' },
};

interface OrderRow {
  key: string;
  code: string;
  receiver: string;
  phone: string;
  dest: string;
  cod: number;
  status: OrderStatus;
  updated: string;
}

const ORDERS: OrderRow[] = [
  { key: '1', code: 'GHN-240615-001', receiver: 'Nguyễn Văn An', phone: '0901 234 567', dest: 'Q.1, TP.HCM', cod: 350000, status: 'delivering', updated: '5 phút trước' },
  { key: '2', code: 'GHN-240615-002', receiver: 'Trần Thị Bình', phone: '0912 345 678', dest: 'Cầu Giấy, Hà Nội', cod: 0, status: 'done', updated: '22 phút trước' },
  { key: '3', code: 'GHN-240615-003', receiver: 'Lê Hoàng Cường', phone: '0987 654 321', dest: 'Hải Châu, Đà Nẵng', cod: 1250000, status: 'pending', updated: '1 giờ trước' },
  { key: '4', code: 'GHN-240615-004', receiver: 'Phạm Mỹ Duyên', phone: '0933 222 111', dest: 'Ninh Kiều, Cần Thơ', cod: 89000, status: 'returned', updated: '2 giờ trước' },
  { key: '5', code: 'GHN-240615-005', receiver: 'Võ Minh Đức', phone: '0945 678 901', dest: 'Thủ Đức, TP.HCM', cod: 540000, status: 'delivering', updated: '3 giờ trước' },
];

const columns: TableColumnsType<OrderRow> = [
  {
    title: 'Mã đơn',
    dataIndex: 'code',
    render: (code: string) => <Text strong style={{ color: 'var(--ghn-primary)' }}>{code}</Text>,
  },
  {
    title: 'Người nhận',
    dataIndex: 'receiver',
    render: (_: string, r) => (
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.3 }}>
        <Text strong>{r.receiver}</Text>
        <Text type="secondary" style={{ fontSize: 'var(--ghn-primitive-font-size-sm)' }}>{r.phone}</Text>
      </div>
    ),
  },
  { title: 'Điểm đến', dataIndex: 'dest' },
  {
    title: 'COD',
    dataIndex: 'cod',
    align: 'right',
    render: (cod: number) => (cod ? vnd(cod) : <Text type="secondary">—</Text>),
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (s: OrderStatus) => <Tag color={STATUS[s].color}>{STATUS[s].label}</Tag>,
  },
  {
    title: 'Cập nhật',
    dataIndex: 'updated',
    render: (t: string) => <Text type="secondary">{t}</Text>,
  },
];

export function DashboardScreen({ onCreate }: { onCreate: () => void }) {
  return (
    <div className="screen">
      <header className="screen__head">
        <div>
          <h1 className="screen__title">Tổng quan</h1>
          <span className="screen__sub">Hôm nay, 15/06 — cập nhật mỗi 5 phút</span>
        </div>
        <Button type="primary" icon={<Icon name="plus" tone="inverse" />} onClick={onCreate}>
          Tạo đơn
        </Button>
      </header>

      <div className="kpi-grid">
        {KPIS.map((k) => (
          <div className="ghn-card kpi" key={k.label}>
            <span className="kpi__icon">
              <Icon name={k.icon} tone="primary" size={20} />
            </span>
            <div className="kpi__body">
              <span className="kpi__label">{k.label}</span>
              <span className="kpi__value">{k.value}</span>
              <span className={`kpi__trend ${k.up ? 'is-up' : 'is-down'}`}>
                <Icon name={k.up ? 'arrow-up' : 'arrow-down'} size={12} />
                {k.trend} so với hôm qua
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="ghn-card table-card">
        <div className="table-card__head">
          <Icon name="box" tone="muted" />
          Đơn gần đây
        </div>
        <Table
          columns={columns}
          dataSource={ORDERS}
          pagination={false}
          size="middle"
          className="ghn-orders-table"
        />
      </div>
    </div>
  );
}

export default DashboardScreen;
