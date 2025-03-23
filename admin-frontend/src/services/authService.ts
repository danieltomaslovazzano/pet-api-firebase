// src/services/authService.ts
import apiService from './apiService';
import { auth } from '@/lib/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail as firebaseSendPasswordReset
} from 'firebase/auth';

interface LoginResponse {
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  email: string;
  displayName?: string;
}

interface UserData {
  name: string;
  email: string;
  password: string;
  role?: string;
  phone?: string;
  status?: string;
}

const authService = {
  // Iniciar sesión con email y contraseña
  login: async (email: string, password: string) => {
    try {
      // Intenta iniciar sesión con Firebase Auth
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Obtiene el token para usar en las solicitudes API
      const token = await user.getIdToken();
      
      // También se puede hacer la solicitud al backend para obtener información adicional
      const response = await apiService.post<LoginResponse>('/auth/login', { email, password });
      
      // Guardar token en localStorage
      localStorage.setItem('authToken', token);
      
      return { user, token, additionalData: response };
    } catch (error) {
      console.error('Error en inicio de sesión:', error);
      throw error;
    }
  },
  
  // Cerrar sesión
  logout: async () => {
    try {
      // Cerrar sesión en Firebase Auth
      await signOut(auth);
      
      // También notificar al backend
      if (auth.currentUser) {
        await apiService.post('/auth/logout', {});
      }
      
      // Eliminar token de localStorage
      localStorage.removeItem('authToken');
      
      return { success: true };
    } catch (error) {
      console.error('Error en cierre de sesión:', error);
      throw error;
    }
  },

  // Registrar un nuevo usuario
  registerUser: async (userData: UserData) => {
    try {
      // Crear usuario en Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
      const user = userCredential.user;
      
      // Enviar datos adicionales al backend
      const response = await apiService.post('/users/signup', {
        id: user.uid,
        name: userData.name,
        email: userData.email,
        role: userData.role || 'user',
        phone: userData.phone || '',
        status: userData.status || 'active',
      });
      
      return { user, additionalData: response };
    } catch (error) {
      console.error('Error en registro de usuario:', error);
      throw error;
    }
  },
  
  // Enviar correo de restablecimiento de contraseña
  sendPasswordResetEmail: async (email: string) => {
    try {
      // Usar la API del backend para mantener consistencia
      await apiService.post('/auth/reset-password', { email });
      return { success: true };
    } catch (error) {
      console.error('Error al enviar correo de restablecimiento:', error);
      throw error;
    }
  },
  
  // Forzar cierre de sesión de un usuario específico
  forceLogout: async (userId: string) => {
    try {
      await apiService.post(`/auth/force-logout/${userId}`, {});
      return { success: true };
    } catch (error) {
      console.error('Error al forzar cierre de sesión:', error);
      throw error;
    }
  },
  
  // Obtener información adicional del usuario desde Firebase Auth
  getUserFirebaseInfo: async (userId: string) => {
    try {
      const response = await apiService.get(`/auth/user-info/${userId}`);
      return response;
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      throw error;
    }
  },
  
  // Actualizar estado del usuario (activar/desactivar)
  updateUserStatus: async (userId: string, isDisabled: boolean) => {
    try {
      const response = await apiService.put(`/auth/user-status/${userId}`, { disabled: isDisabled });
      return response;
    } catch (error) {
      console.error('Error al actualizar estado del usuario:', error);
      throw error;
    }
  }
};

export default authService;