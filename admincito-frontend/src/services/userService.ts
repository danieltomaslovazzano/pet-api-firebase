import { api } from '@/lib/api';
import { PaginatedResponse, ApiResponse } from '@/types/api';
import { User, UserQueryParams, UpdateUserData } from '@/types/user';

// La base URL para las API de usuarios
const BASE_URL = '/admin/users';

export const userService = {
  // Obtener lista paginada de usuarios
  getUsers: async (params?: UserQueryParams): Promise<ApiResponse<PaginatedResponse<User>>> => {
    console.log(`Fetching users with params:`, params);
    const url = BASE_URL;
    console.log(`✅ Calling API endpoint: ${url}`);
    try {
      const response = await api.get<PaginatedResponse<User>>(url, params);
      console.log('👍 getUsers response:', response);
      return response;
    } catch (error) {
      console.error('👎 getUsers error:', error);
      throw error;
    }
  },

  // Obtener un usuario por ID
  getUserById: async (id: string): Promise<ApiResponse<User>> => {
    console.log(`Fetching user with ID: ${id}`);
    const url = `${BASE_URL}/${id}/details`;
    console.log(`✅ Calling API endpoint: ${url}`);
    try {
      const response = await api.get<User>(url);
      console.log('👍 getUserById response:', response);
      return response;
    } catch (error) {
      console.error('👎 getUserById error:', error);
      throw error;
    }
  },

  // Actualizar un usuario
  updateUser: async (id: string, data: UpdateUserData): Promise<ApiResponse<User>> => {
    const url = `${BASE_URL}/${id}`;
    console.log(`✅ Calling API endpoint: ${url}`, data);
    try {
      const response = await api.patch<User>(url, data);
      console.log('👍 updateUser response:', response);
      return response;
    } catch (error) {
      console.error('👎 updateUser error:', error);
      throw error;
    }
  },

  // Eliminar un usuario
  deleteUser: async (id: string): Promise<ApiResponse<void>> => {
    const url = `${BASE_URL}/${id}`;
    console.log(`✅ Calling API endpoint: ${url}`);
    try {
      const response = await api.delete<void>(url);
      console.log('👍 deleteUser response:', response);
      return response;
    } catch (error) {
      console.error('👎 deleteUser error:', error);
      throw error;
    }
  },

  // Cambiar el estado de un usuario
  toggleUserStatus: async (id: string, status: User['status']): Promise<ApiResponse<User>> => {
    const url = `${BASE_URL}/${id}/status`;
    console.log(`✅ Calling API endpoint: ${url}`, { status });
    try {
      const response = await api.patch<User>(url, { status });
      console.log('👍 toggleUserStatus response:', response);
      return response;
    } catch (error) {
      console.error('👎 toggleUserStatus error:', error);
      throw error;
    }
  },

  // Verificar el email de un usuario
  verifyEmail: async (id: string): Promise<ApiResponse<User>> => {
    const url = `${BASE_URL}/${id}/verify-email`;
    console.log(`✅ Calling API endpoint: ${url}`);
    try {
      const response = await api.post<User>(url);
      console.log('👍 verifyEmail response:', response);
      return response;
    } catch (error) {
      console.error('👎 verifyEmail error:', error);
      throw error;
    }
  },

  // Verificar el teléfono de un usuario
  verifyPhone: async (id: string): Promise<ApiResponse<User>> => {
    const url = `${BASE_URL}/${id}/verify-phone`;
    console.log(`✅ Calling API endpoint: ${url}`);
    try {
      const response = await api.post<User>(url);
      console.log('👍 verifyPhone response:', response);
      return response;
    } catch (error) {
      console.error('👎 verifyPhone error:', error);
      throw error;
    }
  },

  // Cambiar el rol de un usuario
  changeRole: async (id: string, role: User['role']): Promise<ApiResponse<User>> => {
    const url = `${BASE_URL}/${id}/role`;
    console.log(`✅ Calling API endpoint: ${url}`, { role });
    try {
      const response = await api.patch<User>(url, { role });
      console.log('👍 changeRole response:', response);
      return response;
    } catch (error) {
      console.error('👎 changeRole error:', error);
      throw error;
    }
  },

  // Restablecer la contraseña de un usuario
  resetPassword: async (id: string): Promise<ApiResponse<{ message: string }>> => {
    const url = `${BASE_URL}/${id}/reset-password`;
    console.log(`✅ Calling API endpoint: ${url}`);
    try {
      const response = await api.post<{ message: string }>(url);
      console.log('👍 resetPassword response:', response);
      return response;
    } catch (error) {
      console.error('👎 resetPassword error:', error);
      throw error;
    }
  }
}; 