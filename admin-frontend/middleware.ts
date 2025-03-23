// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const token = request.cookies.get('authToken')?.value || '';
  
  // Rutas públicas que no requieren autenticación
  const isPublicPath = path === '/' || 
                       path === '/auth/login' || 
                       path.startsWith('/auth/forgot-password') || 
                       path.startsWith('/auth/reset-password');
  
  // Si no hay token y no es una ruta pública, redirigir al login
  if (!token && !isPublicPath) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }
  
  // Si hay token y es una ruta pública (como login), redirigir al dashboard
  // Excluimos '/' para que no redirija desde la página principal si está autenticado
  if (token && isPublicPath && path !== '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  
  return NextResponse.next();
}

// Configurar en qué rutas debe aplicarse el middleware
export const config = {
  matcher: [
    '/',
    '/auth/:path*',
    '/dashboard',
    '/users',
    '/pets',
    '/organizations',
    '/settings',
    '/admin',
    '/conversations',
    '/products'
  ]
};