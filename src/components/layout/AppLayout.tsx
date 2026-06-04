import { useState, type ReactNode } from 'react';
import { Avatar } from 'antd';
import { Icon } from '../common/Icon';

/**
 * App shell — sidebar (GHN branding + nav) + scrollable content pane.
 *
 * Border policy (GHN Figma): the shell uses a single hairline divider between sidebar and content;
 * surfaces inside the content are soft cards (`.ghn-card`), not hard-bordered boxes. Every colour,
 * spacing and radius below references a `var(--ghn-*)` token — never hardcode hex/px in new screens.
 *
 * This is a starter layout: swap the `NAV` items and the `children` for your own screens.
 */
interface NavItem {
  key: string;
  label: string;
  icon: string;
}

const NAV: NavItem[] = [
  { key: 'home', label: 'Trang chủ', icon: 'house' },
  { key: 'list', label: 'Danh sách', icon: 'table-columns' },
  { key: 'reports', label: 'Báo cáo', icon: 'chart-simple' },
  { key: 'settings', label: 'Cài đặt', icon: 'gear' },
];

export function AppLayout({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('home');

  return (
    <div className="ghn-app">
      <aside className="ghn-sidebar">
        <div className="ghn-sidebar__brand">
          {/* Branding asset shipped in /public — full lockup. Use /ghn-icon.svg for compact spots. */}
          <img src="/ghn-logo.svg" alt="GHN" height={28} />
        </div>

        <nav className="ghn-sidebar__nav" aria-label="Điều hướng chính">
          {NAV.map((item) => (
            <button
              key={item.key}
              type="button"
              className={`ghn-nav-item${active === item.key ? ' is-active' : ''}`}
              aria-current={active === item.key ? 'page' : undefined}
              onClick={() => setActive(item.key)}
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
              <strong>Người dùng GHN</strong>
              <span>user@ghn.vn</span>
            </div>
          </div>
        </div>
      </aside>

      <main className="ghn-content">{children}</main>
    </div>
  );
}

export default AppLayout;
