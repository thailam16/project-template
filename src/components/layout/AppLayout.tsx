import type { ReactNode } from 'react';
import { Avatar, Button } from 'antd';
import { Icon } from '../common/Icon';

/**
 * App shell — sidebar (GHN branding + nav) + scrollable content pane.
 *
 * Controlled: cha truyền `active` + `onNavigate` để điều khiển trang đang xem.
 * Border policy (GHN Figma): chỉ một hairline phân tách sidebar/content; bề mặt bên trong là soft
 * card (`.ghn-card`), không viền cứng. Mọi màu/spacing/radius qua token `var(--ghn-*)`.
 */
export interface NavItem {
  key: string;
  label: string;
  icon: string;
}

const NAV: NavItem[] = [
  { key: 'dashboard', label: 'Tổng quan', icon: 'chart-simple' },
  { key: 'create-order', label: 'Tạo đơn', icon: 'plus' },
  { key: 'orders', label: 'Đơn hàng', icon: 'box' },
  { key: 'customers', label: 'Khách hàng', icon: 'users' },
  { key: 'settings', label: 'Cài đặt', icon: 'gear' },
];

export interface AppLayoutProps {
  active: string;
  onNavigate: (key: string) => void;
  onLogout?: () => void;
  children: ReactNode;
}

export function AppLayout({ active, onNavigate, onLogout, children }: AppLayoutProps) {
  return (
    <div className="ghn-app">
      <aside className="ghn-sidebar">
        <div className="ghn-sidebar__brand">
          <img src="/ghn-logo.svg" alt="GHN" height={28} />
        </div>

        <nav className="ghn-sidebar__nav" aria-label="Điều hướng chính">
          {NAV.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`ghn-nav-item${active === item.key ? ' is-active' : ''}`}
              aria-current={active === item.key ? 'page' : undefined}
              onClick={() => onNavigate(item.key)}
            >
              <Icon name={item.icon} tone={active === item.key ? 'primary' : 'muted'} />
              <span className="ghn-nav-item__label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="ghn-sidebar__footer">
          <div className="ghn-sidebar__user">
            <Avatar size={32}>GHN</Avatar>
            <div className="ghn-sidebar__user-info">
              <strong>Điều phối viên</strong>
              <span>dieuphoi@ghn.vn</span>
            </div>
            {onLogout && (
              <Button
                type="text"
                size="small"
                aria-label="Đăng xuất"
                icon={<Icon name="arrow-right-from-bracket" tone="muted" />}
                onClick={onLogout}
              />
            )}
          </div>
        </div>
      </aside>

      <main className="ghn-content">{children}</main>
    </div>
  );
}

export default AppLayout;
