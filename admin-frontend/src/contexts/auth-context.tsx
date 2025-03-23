// src/contexts/auth-context.tsx
'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  User, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  sendPasswordResetEmail,
  confirmPasswordReset,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth';
import { auth } from '../lib/firebase'; // Usamos la configuración existente
import { useRouter } from 'next/navigation'; // App Router usa 'next/navigation'

// Definir la interfaz del usuario
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  error: null,
  login: async () => {},
  loginWithGoogle: async () => {},
  logout: async () => {},
  forgotPassword: async () => {},
  resetPassword: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!auth) return; // Prevenir errores si auth no está disponible
    
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      
      if (firebaseUser) {
        // El usuario está autenticado, obtener el token y guardarlo en localStorage
        const token = await firebaseUser.getIdToken();
        localStorage.setItem('authToken', token);
      } else {
        // El usuario no está autenticado, eliminar el token del localStorage
        localStorage.removeItem('authToken');
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    if (!auth) throw new Error('Firebase Auth no está inicializado');
    
    setError(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Esto redirigirá a la ruta protegida
    } catch (error: any) {
      console.error('Login error:', error);
      setError(getFirebaseErrorMessage(error.code));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogle = async () => {
    if (!auth) throw new Error('Firebase Auth no está inicializado');
    
    setError(null);
    setLoading(true);
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push('/dashboard');
    } catch (error: any) {
      console.error('Google login error:', error);
      setError(getFirebaseErrorMessage(error.code));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    if (!auth) throw new Error('Firebase Auth no está inicializado');
    
    try {
      await signOut(auth);
      router.push('/auth/login');
    } catch (error: any) {
      console.error('Logout error:', error);
      setError(getFirebaseErrorMessage(error.code));
      throw error;
    }
  };

  const forgotPassword = async (email: string) => {
    if (!auth) throw new Error('Firebase Auth no está inicializado');
    
    setError(null);
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (error: any) {
      console.error('Reset password error:', error);
      setError(getFirebaseErrorMessage(error.code));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    if (!auth) throw new Error('Firebase Auth no está inicializado');
    
    setError(null);
    setLoading(true);
    try {
      await confirmPasswordReset(auth, token, newPassword);
    } catch (error: any) {
      console.error('Confirm reset error:', error);
      setError(getFirebaseErrorMessage(error.code));
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Función para obtener mensajes de error de Firebase
  const getFirebaseErrorMessage = (errorCode: string) => {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'El correo electrónico no es válido';
      case 'auth/user-disabled':
        return 'Esta cuenta ha sido deshabilitada';
      case 'auth/user-not-found':
        return 'No existe una cuenta con este correo electrónico';
      case 'auth/wrong-password':
        return 'Contraseña incorrecta';
      case 'auth/email-already-in-use':
        return 'El correo electrónico ya está en uso';
      case 'auth/weak-password':
        return 'La contraseña es demasiado débil';
      case 'auth/operation-not-allowed':
        return 'Operación no permitida';
      case 'auth/account-exists-with-different-credential':
        return 'Ya existe una cuenta con este correo pero con diferentes credenciales';
      case 'auth/expired-action-code':
        return 'El código de acción ha expirado';
      case 'auth/invalid-action-code':
        return 'El código de acción no es válido';
      default:
        return 'Ha ocurrido un error desconocido';
    }
  };

  const value = {
    user,
    loading,
    error,
    login,
    loginWithGoogle,
    logout,
    forgotPassword,
    resetPassword,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <div>Cargando...</div>}
    </AuthContext.Provider>
  );
};