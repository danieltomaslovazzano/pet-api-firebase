// src/services/apiService.ts
'use client';

import { Auth, getAuth } from 'firebase/auth';
import axios, { AxiosError } from 'axios';

// URL base de la API
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

console.log('API_BASE_URL:', API_BASE_URL); // Debug log

// Obtener instancia de auth
const auth: Auth = getAuth();

// Crear instancia base de axios con configuración
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  // Añadir timeout y validación de status
  timeout: 10000,
  validateStatus: (status) => status >= 200 && status < 300,
});

// Interceptor para agregar el token de autenticación
api.interceptors.request.use(
  async (config) => {
    try {
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken(true); // Forzar refresh del token
        config.headers.Authorization = `Bearer ${token}`;
        
        console.log('Request config:', {
          url: config.url,
          method: config.method,
          headers: {
            ...config.headers,
            Authorization: 'Bearer [TOKEN]' // No logear el token real
          }
        });
      } else {
        console.warn('No hay usuario autenticado');
      }
      
      return config;
    } catch (error) {
      console.error('Error en interceptor de request:', error);
      return Promise.reject(error);
    }
  },
  (error) => {
    console.error('Error en interceptor de request:', error);
    return Promise.reject(error);
  }
);

// Interceptor para manejar errores de respuesta
api.interceptors.response.use(
  (response) => {
    console.log('Response success:', {
      url: response.config.url,
      status: response.status,
      data: response.data
    });
    return response;
  },
  (error: AxiosError) => {
    // Log detallado del error
    console.error('Error en la respuesta:', {
      url: error.config?.url,
      status: error.response?.status,
      data: error.response?.data,
      message: error.message,
      stack: error.stack
    });
    
    if (error.response?.status === 401) {
      // Token expirado o inválido
      console.log('Token inválido o expirado, redirigiendo a login...');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('authToken');
        window.location.href = '/auth/login';
      }
    } else if (error.response?.status === 403) {
      // Error de permisos
      console.error('Error de permisos:', error.response.data);
      throw new Error('No tienes permisos para realizar esta acción');
    } else if (error.code === 'ECONNABORTED') {
      throw new Error('La conexión ha tardado demasiado. Por favor, inténtalo de nuevo.');
    } else if (!error.response) {
      throw new Error('No se pudo conectar con el servidor. Por favor, verifica tu conexión.');
    }
    
    throw error;
  }
);

// Exportar métodos para hacer peticiones
const apiService = {
  get: async <T>(url: string, params = {}): Promise<T> => {
    try {
      const response = await api.get<T>(url, { params });
      return response.data;
    } catch (error) {
      console.error(`Error en GET ${url}:`, error);
      throw error;
    }
  },
  
  post: async <T>(url: string, data = {}): Promise<T> => {
    try {
      const response = await api.post<T>(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error en POST ${url}:`, error);
      throw error;
    }
  },
  
  put: async <T>(url: string, data = {}): Promise<T> => {
    try {
      const response = await api.put<T>(url, data);
      return response.data;
    } catch (error) {
      console.error(`Error en PUT ${url}:`, error);
      throw error;
    }
  },
  
  delete: async <T>(url: string): Promise<T> => {
    try {
      const response = await api.delete<T>(url);
      return response.data;
    } catch (error) {
      console.error(`Error en DELETE ${url}:`, error);
      throw error;
    }
  },
};

export default apiService;