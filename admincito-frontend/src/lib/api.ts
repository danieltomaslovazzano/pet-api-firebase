import axios from 'axios';
import { auth } from './firebase';
import { ApiError, ApiResponse } from '@/types/api';

// Obtener la URL base de la API desde las variables de entorno o usar un valor predeterminado
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

console.log('API Base URL configurada:', API_BASE_URL);

// Tipos personalizados para manejar errores de Axios
interface AxiosErrorResponse {
  data?: any;
  status?: number;
  statusText?: string;
  headers?: Record<string, string>;
}

interface CustomAxiosError extends Error {
  response?: AxiosErrorResponse;
  request?: any;
  isAxiosError?: boolean;
}

class ApiService {
  private api;
  private static instance: ApiService;

  private constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }

  private async getAuthToken(): Promise<string | null> {
    const user = auth.currentUser;
    if (!user) return null;
    return user.getIdToken();
  }

  private setupInterceptors(): void {
    // Request interceptor
    this.api.interceptors.request.use(
      async (config: any) => {
        const token = await this.getAuthToken();
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        
        // Asegurarse de que no haya '/v1' en la URL
        if (config.url) {
          config.url = config.url.replace('/v1/', '/').replace('/v1', '/');
        }
        
        // Log the full URL being requested
        console.log(`REQUEST: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, { 
          params: config.params,
          data: config.data
        });
        
        return config;
      },
      (error: any) => {
        console.error('Request error:', error);
        return Promise.reject(error);
      }
    );

    // Response interceptor
    this.api.interceptors.response.use(
      (response: any) => {
        console.log(`RESPONSE from ${response.config.url}:`, {
          status: response.status,
          statusText: response.statusText,
          data: response.data
        });
        return response;
      },
      (error: any) => {
        console.error('Response error:', error);
        
        if (!(error instanceof Error)) {
          return Promise.reject({ 
            success: false, 
            error: { 
              message: 'An unknown error occurred',
              code: 'UNKNOWN_ERROR'
            } 
          });
        }

        // Tratar el error como un error personalizado de Axios
        const axiosError = error as CustomAxiosError;
        
        const apiError: ApiError = {
          message: error.message,
          code: 'API_ERROR',
          details: axiosError.response?.data as Record<string, any>,
        };

        // Log detailed error information
        console.error('API Error:', {
          error: apiError,
          response: axiosError.response,
          request: axiosError.request,
          url: (error as any).config?.url || 'URL desconocida'
        });

        if (axiosError.response?.status === 401) {
          // Handle unauthorized access
          auth.signOut();
          window.location.href = '/login';
        }

        return Promise.reject({ success: false, error: apiError });
      }
    );
  }

  public async get<T>(url: string, params?: Record<string, any>): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.get<T>(url, { params });
      return { success: true, data: response.data };
    } catch (error) {
      return error as ApiResponse<T>;
    }
  }

  public async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.post<T>(url, data);
      return { success: true, data: response.data };
    } catch (error) {
      return error as ApiResponse<T>;
    }
  }

  public async put<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.put<T>(url, data);
      return { success: true, data: response.data };
    } catch (error) {
      return error as ApiResponse<T>;
    }
  }

  public async patch<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.patch<T>(url, data);
      return { success: true, data: response.data };
    } catch (error) {
      return error as ApiResponse<T>;
    }
  }

  public async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.api.delete<T>(url);
      return { success: true, data: response.data };
    } catch (error) {
      return error as ApiResponse<T>;
    }
  }
}

export const api = ApiService.getInstance(); 