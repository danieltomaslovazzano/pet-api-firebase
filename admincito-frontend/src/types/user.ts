import { QueryParams } from './api';

export type UserRole = 'admin' | 'moderator' | 'user' | 'editor';
export type UserStatus = 'active' | 'disabled' | 'blocked' | 'pending' | 'suspended' | 'inactive';
export type AuthProvider = 'password' | 'google.com' | 'google' | 'facebook' | 'apple';
export type Department = 'Engineering' | 'Marketing' | 'Sales' | 'Design' | 'Finance' | 'Customer Support' | 'Customer Success' | 'Product' | 'Content' | 'Operations' | string;

export interface FirebaseTimestamp {
  _seconds: number;
  _nanoseconds: number;
}

export interface User {
  id: string;
  email: string;
  displayName: string | null;  // Corresponde a 'name' en el backend
  phoneNumber: string | null;  // Corresponde a 'phone' en el backend
  photoURL: string | null;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  phoneVerified: boolean;
  provider: AuthProvider;  // Corresponde a 'origin' en el backend
  createdAt: string;
  updatedAt: string;
  lastLoginAt: string | null;
  metadata?: {
    lastToken?: string;
    lastTokenAt?: string;
    department?: Department;
    [key: string]: any;
  };
}

export interface UserQueryParams extends QueryParams {
  role?: UserRole;
  status?: UserStatus;
  provider?: AuthProvider;
  verified?: boolean;
  department?: Department;
}

export interface UpdateUserData extends Partial<Omit<User, 'id' | 'createdAt' | 'updatedAt'>> {
  // Campos adicionales específicos para actualización
  password?: string;
  department?: Department;
}

// Tipo alternativo para backend, utilizado para mapeo
export interface BackendUser {
  id: string;
  email: string;
  name?: string;
  phone?: string;
  photoURL?: string;
  role?: UserRole;
  status?: UserStatus;
  emailVerified?: boolean;
  phoneVerified?: boolean;
  origin?: string;
  createdAt?: string | FirebaseTimestamp;
  updatedAt?: string | FirebaseTimestamp;
  lastLoginAt?: string;
  isBlocked?: boolean;
  department?: Department;
  metadata?: Record<string, any>;
} 