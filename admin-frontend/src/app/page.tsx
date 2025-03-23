// src/app/page.tsx
'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';

export default function HomePage() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (user) {
        // Si el usuario está autenticado, redirige al dashboard
        redirect('/dashboard');
      } else {
        // Si el usuario no está autenticado, redirige al login
        redirect('/auth/login');
      }
    }
  }, [user, loading]);

  // Muestra un estado de carga mientras se verifica la autenticación
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
        <p className="mt-4 text-sm text-gray-500">Cargando...</p>
      </div>
    </div>
  );
}