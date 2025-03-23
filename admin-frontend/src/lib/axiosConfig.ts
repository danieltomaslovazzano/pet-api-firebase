import axios from 'axios';
import { AuthService } from '@/services/authService-old';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
});

// Interceptor de solicitud
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = await AuthService.getToken();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuesta
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Si el error es de autorización y no es ya un reintento
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Intentar obtener un nuevo token
        const newToken = await AuthService.getToken();
        
        // Actualizar el token en la solicitud original
        originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
        
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        // Si falla, hacer logout
        await AuthService.logout();
        window.location.href = '/login';
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;