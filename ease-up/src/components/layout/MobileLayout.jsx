import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

export default function MobileLayout() {
  return (
    <div className="app-shell">
      <Outlet />
      <BottomNav />
    </div>
  );
}