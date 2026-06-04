import { useState } from 'react';
import { AppLayout } from './components/layout/AppLayout';
import { LoginScreen } from './examples/LoginScreen';
import { DashboardScreen } from './examples/DashboardScreen';
import { CreateOrderScreen } from './examples/CreateOrderScreen';

/**
 * Demo điều hướng giữa các màn hình ví dụ (Login → Tổng quan ⇄ Tạo đơn).
 * Đây chỉ là VÍ DỤ minh hoạ GHN DS — xoá `src/examples/` + thay file này khi dựng app của bạn.
 * State-based routing cho gọn; dự án thật nên dùng router (react-router…).
 */
export default function App() {
  const [authed, setAuthed] = useState(false);
  const [view, setView] = useState('dashboard');

  if (!authed) return <LoginScreen onLogin={() => setAuthed(true)} />;

  return (
    <AppLayout active={view} onNavigate={setView} onLogout={() => setAuthed(false)}>
      {view === 'create-order' ? (
        <CreateOrderScreen onDone={() => setView('dashboard')} />
      ) : (
        <DashboardScreen onCreate={() => setView('create-order')} />
      )}
    </AppLayout>
  );
}
