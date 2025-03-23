// lib/context/auth-context.jsx
"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { getCurrentUser } from '@/lib/api/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        setLoading(false);
        
        // Redirigir a login si no es una ruta pública
        if (!pathname.startsWith('/auth/')) {
          router.push('/auth/login');
        }
        return;
      }
      
      try {
        const userData = await getCurrentUser();
        setUser(userData);
        
        // Comprobar si es un administrador
        const isAdmin = userData.role === 'admin';
        
        // Si no es admin y está intentando acceder al panel, redirigir
        if (!isAdmin && !pathname.startsWith('/auth/')) {
          router.push('/auth/login');
        }
      } catch (error) {
        console.error('Error getting current user:', error);
        localStorage.removeItem('authToken');
        if (!pathname.startsWith('/auth/')) {
          router.push('/auth/login');
        }
      } finally {
        setLoading(false);
      }
    };
    
    checkAuth();
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    router.push('/auth/login');
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);