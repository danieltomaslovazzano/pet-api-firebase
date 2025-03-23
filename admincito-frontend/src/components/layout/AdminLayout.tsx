import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export default function AdminLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto w-full animate-blur-in">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
