// src/services/userService.ts
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import apiService from './apiService';

// User interface based on the expected response
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
  status?: string;
  createdAt: string | any;
  updatedAt: string | any;
  lastLoginAt?: string | null;
  emailVerified?: boolean;
  isBlocked?: boolean;
  providerData?: Array<{
    providerId: string;
    [key: string]: any;
  }>;
  // Firebase Auth additional fields
  displayName?: string;
  phoneNumber?: string;
  photoURL?: string;
  metadata?: {
    creationTime?: string;
    lastSignInTime?: string;
    lastRefreshTime?: string;
    passwordUpdatedAt?: string;
  };
  tenantId?: string;
  customClaims?: { [key: string]: any };
  multiFactor?: {
    enrolledFactors: Array<{
      uid: string;
      displayName?: string;
      factorId: string;
      enrollmentTime: string;
    }>;
  };
  languages?: string[];
}

export interface UserFilters {
  searchTerm?: string;
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  lastLoginStart?: string | Date;
  lastLoginEnd?: string | Date;
  origin?: string;
  dateRangeStart?: string | Date;
  dateRangeEnd?: string | Date;
  hasPhone?: boolean;
  isVerified?: boolean;
}

interface BulkActionResponse {
  success: boolean;
  message: string;
  affectedUsers: string[];
}

interface BulkActionRequest {
  userIds: string[];
  action: 'delete' | 'disable' | 'enable' | 'changeRole' | 'forceLogout';
  role?: string;
}

interface InviteUserRequest {
  email: string;
  role: string;
}

interface InviteUserResponse {
  success: boolean;
  message: string;
  invitationId: string;
}

interface BlockUserRequest {
  blockedUserId: string;
}

interface BlockUserResponse {
  success: boolean;
  message: string;
}

interface UpdateRoleRequest {
  role: string;
}

interface UpdateRoleResponse {
  success: boolean;
  message: string;
  user: User;
}

interface DeleteUserResponse {
  success: boolean;
  message: string;
}

interface GetUsersResponse {
  users: User[];
  total: number;
  page: number;
  limit: number;
}

interface UpdateStatusResponse {
  success: boolean;
  message: string;
  user: User;
}

interface ForceLogoutResponse {
  success: boolean;
  message: string;
}

interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

// Mantenemos la API original para compatibilidad
export const UserService = {
  // Fetch users with Firebase authentication
  async getUsers() {
    try {
      return await userService.getUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
};

// Nuevo servicio de usuario con todas las funcionalidades
const userService = {
  // Obtener todos los usuarios (con posibles filtros)
  getUsers: async (filters?: UserFilters): Promise<User[]> => {
    try {
      // Construir query params para los filtros
      let queryString = '';
      if (filters) {
        const params = new URLSearchParams();
        
        // Búsqueda general
        if (filters.searchTerm) {
          params.append('searchTerm', filters.searchTerm);
        }
        
        // Filtros específicos
        if (filters.role && filters.role !== 'all') params.append('role', filters.role);
        if (filters.status && filters.status !== 'all') params.append('status', filters.status);
        if (filters.origin && filters.origin !== 'all') params.append('origin', filters.origin);
        if (filters.dateRangeStart) {
          const startDate = filters.dateRangeStart instanceof Date ? 
            filters.dateRangeStart.toISOString() : 
            filters.dateRangeStart;
          params.append('startDate', startDate);
        }
        if (filters.dateRangeEnd) {
          const endDate = filters.dateRangeEnd instanceof Date ? 
            filters.dateRangeEnd.toISOString() : 
            filters.dateRangeEnd;
          params.append('endDate', endDate);
        }
        if (filters.lastLoginStart) {
          const lastLoginStart = filters.lastLoginStart instanceof Date ? 
            filters.lastLoginStart.toISOString() : 
            filters.lastLoginStart;
          params.append('lastLoginStart', lastLoginStart);
        }
        if (filters.lastLoginEnd) {
          const lastLoginEnd = filters.lastLoginEnd instanceof Date ? 
            filters.lastLoginEnd.toISOString() : 
            filters.lastLoginEnd;
          params.append('lastLoginEnd', lastLoginEnd);
        }
        if (filters.hasPhone) params.append('hasPhone', 'true');
        if (filters.isVerified) params.append('isVerified', 'true');
        
        queryString = `?${params.toString()}`;
      }
      
      // Llamar al endpoint para obtener usuarios
      const response = await apiService.get<User[]>(`/admin/users${queryString}`);
      
      // Asegurarnos de que la respuesta sea un array
      if (Array.isArray(response)) {
        return response;
      }
      
      // Si la respuesta es un objeto con una propiedad data que es un array, devolver ese array
      if (response && Array.isArray((response as any).data)) {
        return (response as any).data;
      }
      
      // Si no es un array ni tiene una propiedad data que sea array, devolver array vacío
      console.warn('La respuesta del API no tiene el formato esperado:', response);
      return [];
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      throw error;
    }
  },
  
  // Obtener un usuario específico por ID
  getUserById: async (userId: string): Promise<User> => {
    try {
      const response = await apiService.get<User>(`/admin/users/${userId}/details`);
      return response;
    } catch (error) {
      console.error(`Error al obtener usuario con ID ${userId}:`, error);
      throw error;
    }
  },
  
  // Actualizar información de un usuario
  updateUser: async (userId: string, userData: Partial<User>): Promise<User> => {
    try {
      const response = await apiService.put<User>(`/admin/users/${userId}`, userData);
      return response as User;
    } catch (error) {
      console.error(`Error al actualizar usuario con ID ${userId}:`, error);
      throw error;
    }
  },
  
  // Actualizar el rol de un usuario
  updateUserRole: async (userId: string, role: string): Promise<UpdateRoleResponse> => {
    try {
      return await apiService.put<UpdateRoleResponse>(`/admin/roles/${userId}`, { role });
    } catch (error) {
      console.error(`Error al actualizar rol del usuario con ID ${userId}:`, error);
      throw error;
    }
  },
  
  // Eliminar un usuario
  deleteUser: async (userId: string): Promise<DeleteUserResponse> => {
    try {
      return await apiService.delete<DeleteUserResponse>(`/admin/users/${userId}`);
    } catch (error) {
      console.error(`Error al eliminar usuario con ID ${userId}:`, error);
      throw error;
    }
  },
  
  // Realizar acciones masivas sobre usuarios
  bulkAction: async (actionData: BulkActionRequest): Promise<BulkActionResponse> => {
    try {
      return await apiService.post<BulkActionResponse>(`/admin/bulk-action`, actionData);
    } catch (error) {
      console.error('Error al realizar acción masiva:', error);
      throw error;
    }
  },
  
  // Invitar a un nuevo usuario
  inviteUser: async (inviteData: InviteUserRequest): Promise<InviteUserResponse> => {
    try {
      return await apiService.post<InviteUserResponse>(`/admin/invite`, inviteData);
    } catch (error) {
      console.error('Error al invitar usuario:', error);
      throw error;
    }
  },
  
  // Bloquear un usuario
  blockUser: async (userId: string, blockedUserId: string): Promise<BlockUserResponse> => {
    try {
      return await apiService.put<BlockUserResponse>(`/users/${userId}/block`, { blockedUserId });
    } catch (error) {
      console.error(`Error al bloquear usuario con ID ${blockedUserId}:`, error);
      throw error;
    }
  },
  
  // Desbloquear un usuario
  unblockUser: async (userId: string, blockedUserId: string): Promise<BlockUserResponse> => {
    try {
      return await apiService.put<BlockUserResponse>(`/users/${userId}/unblock`, { blockedUserId });
    } catch (error) {
      console.error(`Error al desbloquear usuario con ID ${blockedUserId}:`, error);
      throw error;
    }
  },
  
  // Actualizar el estado de un usuario
  updateUserStatus: async (userId: string, status: string): Promise<UpdateStatusResponse> => {
    try {
      return await apiService.put<UpdateStatusResponse>(`/admin/users/${userId}/status`, { status });
    } catch (error) {
      console.error(`Error al actualizar estado del usuario con ID ${userId}:`, error);
      throw error;
    }
  },
  
  // Forzar cierre de sesión de un usuario
  forceLogout: async (userId: string): Promise<ForceLogoutResponse> => {
    try {
      return await apiService.post<ForceLogoutResponse>(`/admin/users/${userId}/force-logout`);
    } catch (error) {
      console.error(`Error al forzar cierre de sesión del usuario con ID ${userId}:`, error);
      throw error;
    }
  },
  
  // Restablecer contraseña de un usuario
  resetPassword: async (userId: string): Promise<ResetPasswordResponse> => {
    try {
      return await apiService.post<ResetPasswordResponse>(`/admin/users/${userId}/reset-password`);
    } catch (error) {
      console.error(`Error al restablecer contraseña del usuario con ID ${userId}:`, error);
      throw error;
    }
  }
};

export default userService;