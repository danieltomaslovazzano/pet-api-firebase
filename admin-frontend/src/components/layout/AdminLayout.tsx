"use client"

import React, { ReactNode, useState, useEffect } from "react"
import { Sidebar } from "./Sidebar"
import { useAuth } from "@/contexts/auth-context"
import { usePathname, useRouter } from "next/navigation"

interface AdminLayoutProps {
  children: ReactNode
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { user, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();
  
  // Verificar si la ruta actual es una ruta de autenticación
  const isAuthRoute = pathname?.startsWith('/auth') || pathname === '/';
  
  // Colapsar automáticamente en dispositivos móviles
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarCollapsed(true);
      }
    };
    
    // Configurar el estado inicial y agregar el evento
    window.addEventListener("resize", handleResize);
    handleResize();
    
    // Limpiar el evento
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setSidebarCollapsed(prev => !prev);
  };

  // Si está cargando, mostrar un indicador de carga
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }
  
  // Si es una ruta de autenticación o el usuario no está autenticado y está en una ruta protegida
  if (isAuthRoute || !user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        collapsed={sidebarCollapsed} 
        onToggleCollapse={toggleSidebar}
        user={user} // Pasar el usuario al sidebar para mostrar información
      />
      
      <div className={`transition-all duration-300 ${
        sidebarCollapsed ? 'pl-16' : 'pl-64'
      }`}>
        <main className="p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}