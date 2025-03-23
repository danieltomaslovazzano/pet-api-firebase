import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Users, 
  LayoutDashboard, 
  Settings, 
  Menu, 
  ChevronRight,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useAuth } from '@/lib/auth';

const navItems = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'Usuarios', path: '/users', icon: Users },
  { name: 'Configuración', path: '/settings', icon: Settings },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  return (
    <aside 
      className={cn(
        "h-screen bg-card border-r border-border transition-all duration-300 ease-in-out flex flex-col",
        isOpen ? "w-64" : "w-20"
      )}
    >
      {/* Sidebar Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        <div className={cn("flex items-center", !isOpen && "justify-center")}>
          <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold">
            A
          </div>
          {isOpen && <span className="ml-3 text-lg font-medium">Admin</span>}
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleSidebar}
          className="hidden md:flex"
        >
          {isOpen ? <ChevronRight size={18} /> : <Menu size={18} />}
        </Button>
      </div>
      
      {/* Sidebar Navigation */}
      <nav className="mt-5 px-2 flex-1">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200",
                    isActive 
                      ? "bg-primary text-primary-foreground" 
                      : "text-foreground hover:bg-muted"
                  )}
                >
                  <item.icon size={20} className={cn("flex-shrink-0", !isOpen && "mx-auto")} />
                  {isOpen && <span className="ml-3">{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      {/* Logout Button */}
      <div className="p-2 mt-auto border-t border-border">
        <Button
          variant="ghost"
          className={cn(
            "w-full flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-200 text-destructive hover:bg-destructive/10",
            !isOpen && "justify-center"
          )}
          onClick={handleLogout}
        >
          <LogOut size={20} className={cn("flex-shrink-0", !isOpen && "mx-auto")} />
          {isOpen && <span className="ml-3">Cerrar Sesión</span>}
        </Button>
      </div>
    </aside>
  );
} 