// components/layout/admin-layout.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/lib/context/auth-context";
import { Menu, X, Home, Users, PawPrint, Building, Palette, Settings, LogOut, ChevronDown } from 'lucide-react';

export default function AdminLayout({ children }) {
  const { user, logout, loading } = useAuth();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Si está cargando o no hay usuario, no mostrar nada aún
  if (loading || !user) {
    return null;
  }

  const navItems = [
    { icon: Home, label: "Dashboard", href: "/dashboard" },
    { icon: PawPrint, label: "Mascotas", href: "/pets" },
    { icon: Users, label: "Usuarios", href: "/users" },
    { icon: Building, label: "Organizaciones", href: "/organizations" },
    { icon: Palette, label: "Tema", href: "/theme" },
    { icon: Settings, label: "Configuración", href: "/settings" },
  ];

  const NavLink = ({ item, mobile = false }) => {
    const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
    
    return (
      <Link href={item.href} 
        onClick={mobile ? () => setOpen(false) : undefined}
        className={`flex items-center gap-2 px-3 py-2 rounded-md 
          ${isActive 
            ? "bg-slate-100 text-slate-900 dark:bg-slate-800 dark:text-slate-100 font-medium" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50 dark:text-slate-400 dark:hover:text-slate-100 dark:hover:bg-slate-800"}`}
      >
        <item.icon size={mobile ? 18 : 16} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden bg-white dark:bg-slate-950">
      {/* Sidebar para pantallas grandes */}
      <aside className="hidden md:flex md:w-64 flex-col border-r border-slate-200 dark:border-slate-800">
        <div className="p-4 border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-xl font-bold">PetConnect Admin</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center">
                {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium">{user.name || 'Usuario'}</p>
                <p className="text-xs text-slate-500">{user.email}</p>
              </div>
            </div>
            <Button variant="ghost" size="icon" onClick={logout}>
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header móvil */}
        <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between p-4 md:hidden">
          <div className="flex items-center">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
                  <h1 className="text-xl font-bold">PetConnect Admin</h1>
                  <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                    <X size={24} />
                  </Button>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                  {navItems.map((item) => (
                    <NavLink key={item.href} item={item} mobile />
                  ))}
                </nav>
                <div className="p-4 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-slate-300 flex items-center justify-center">
                      {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium">{user.name || 'Usuario'}</p>
                      <p className="text-xs text-slate-500">{user.email}</p>
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full mt-4 justify-start" onClick={logout}>
                    <LogOut size={18} className="mr-2" />
                    Cerrar sesión
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <h1 className="text-xl font-bold ml-2">PetConnect</h1>
          </div>
        </header>

        {/* Contenido principal */}
        <main className="flex-1 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}