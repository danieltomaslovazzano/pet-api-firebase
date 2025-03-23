import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User as FirebaseUser
} from 'firebase/auth';
import { auth } from './firebase';

interface User {
  id: string;
  email: string | null;
  name?: string | null;
  role: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  signIn: async () => {},
  signInWithGoogle: async () => {},
  signOut: async () => {},
});

const formatUser = (user: FirebaseUser): User => {
  return {
    id: user.uid,
    email: user.email,
    name: user.displayName,
    role: 'user', // Por defecto, todos los usuarios son 'user'. Esto se puede actualizar según tus necesidades
  };
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Escuchar cambios en el estado de autenticación
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        const formattedUser = formatUser(firebaseUser);
        setUser(formattedUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setError(null);
      setLoading(true);
      const { user: firebaseUser } = await signInWithEmailAndPassword(auth, email, password);
      setUser(formatUser(firebaseUser));
    } catch (err) {
      console.error('Error signing in:', err);
      setError('Error al iniciar sesión. Por favor, verifica tus credenciales.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signInWithGoogle = async () => {
    try {
      setError(null);
      setLoading(true);
      const provider = new GoogleAuthProvider();
      const { user: firebaseUser } = await signInWithPopup(auth, provider);
      setUser(formatUser(firebaseUser));
    } catch (err) {
      console.error('Error signing in with Google:', err);
      setError('Error al iniciar sesión con Google. Por favor, intenta de nuevo.');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setError(null);
      setLoading(true);
      await firebaseSignOut(auth);
      setUser(null);
    } catch (err) {
      console.error('Error signing out:', err);
      setError('Error al cerrar sesión');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider 
      value={{
        user,
        loading,
        error,
        signIn,
        signInWithGoogle,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
} 