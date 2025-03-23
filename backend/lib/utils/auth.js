// lib/api/auth.js
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      error.response?.data?.message || 
      'Error al iniciar sesión'
    );
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      error.response?.data?.message || 
      'Error al registrar usuario'
    );
  }
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem('authToken');
  
  if (!token) {
    throw new Error('No hay token de autenticación');
  }
  
  try {
    const response = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.error || 
      error.response?.data?.message || 
      'Error al obtener perfil'
    );
  }
};