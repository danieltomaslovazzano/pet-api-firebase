import { User, BackendUser, FirebaseTimestamp } from '@/types/user';
import { PaginatedResponse } from '@/types/api';

/**
 * Normaliza un timestamp de Firebase a una fecha ISO
 */
export const normalizeTimestamp = (timestamp: FirebaseTimestamp | string | undefined): string => {
  if (!timestamp) return new Date().toISOString();
  
  if (typeof timestamp === 'string') return timestamp;
  
  if ('_seconds' in timestamp) {
    return new Date(timestamp._seconds * 1000).toISOString();
  }
  
  return new Date().toISOString();
};

/**
 * Normaliza un usuario del backend al formato del frontend
 */
export const normalizeUser = (backendUser: BackendUser | any): User => {
  if (!backendUser) return {} as User;
  
  // Extraer el departamento, ya sea del campo directo o de los metadatos
  const department = backendUser.department || backendUser.metadata?.department;
  
  // Base metadata incluye departamento si existe
  const baseMetadata = {
    ...(backendUser.metadata || {}),
    ...(department ? { department } : {})
  };
  
  return {
    id: backendUser.id || '',
    email: backendUser.email || '',
    displayName: backendUser.name || null,
    phoneNumber: backendUser.phone || null,
    photoURL: backendUser.photoURL || null,
    role: backendUser.role || 'user',
    status: backendUser.status || 'disabled',
    emailVerified: !!backendUser.emailVerified,
    phoneVerified: backendUser.phoneVerified ?? false,
    provider: (backendUser.origin || 'password') as any,
    createdAt: normalizeTimestamp(backendUser.createdAt),
    updatedAt: normalizeTimestamp(backendUser.updatedAt),
    lastLoginAt: backendUser.lastLoginAt || null,
    metadata: baseMetadata
  };
};

/**
 * Adapta un array de usuarios o una respuesta paginada del backend 
 * al formato de respuesta paginada del frontend
 */
export const adaptUserResponse = (data: any): PaginatedResponse<User> => {
  // Si ya es una respuesta paginada
  if (data && typeof data === 'object' && 'items' in data) {
    return {
      items: (data.items || []).map(normalizeUser),
      total: data.total || data.items?.length || 0,
      page: data.page || 1,
      limit: data.limit || data.items?.length || 10,
      totalPages: data.totalPages || 1
    };
  }
  
  // Si es un array de usuarios
  if (Array.isArray(data)) {
    return {
      items: data.map(normalizeUser),
      total: data.length,
      page: 1,
      limit: data.length,
      totalPages: 1
    };
  }
  
  // Respuesta por defecto si no hay datos válidos
  return {
    items: [],
    total: 0,
    page: 1,
    limit: 10,
    totalPages: 0
  };
};

/**
 * Adapta un objeto de usuario del frontend al formato del backend
 */
export const adaptUserToBackend = (user: Partial<User> & { department?: string }): Partial<BackendUser> => {
  // Extraer el departamento desde metadata si existe
  const department = user.metadata?.department || user.department;

  const backendUser: Partial<BackendUser> = {
    email: user.email,
    name: user.displayName || undefined,
    phone: user.phoneNumber || undefined,
    photoURL: user.photoURL || undefined,
    role: user.role,
    status: user.status,
    emailVerified: user.emailVerified,
    phoneVerified: user.phoneVerified,
    origin: user.provider,
    department
  };
  
  // Elimina propiedades undefined
  return Object.fromEntries(
    Object.entries(backendUser).filter(([_, v]) => v !== undefined)
  );
}; 