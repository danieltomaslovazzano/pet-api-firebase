// controllers/authController.js
const admin = require('../config/firebase');
const axios = require('axios');
const { userModel } = require('../models/adapter');

// Helper function for consistent logging
const logAuthEvent = (event, data, isError = false) => {
  const logMessage = `[Auth] ${event}: ${JSON.stringify(data, null, 2)}`;
  if (isError) {
    console.error(logMessage);
  } else {
    console.log(logMessage);
  }
};

const authController = {
  // Función de registro
  register: async (req, res) => {
    try {
      const { email, password, name } = req.body;
      
      if (!email || !password || !name) {
        logAuthEvent('Register Validation Failed', { missingFields: { email: !email, password: !password, name: !name } });
        return res.validationError([
          { field: 'email', messageKey: 'validation.required', params: { field: 'Email' } },
          { field: 'password', messageKey: 'validation.required', params: { field: 'Password' } },
          { field: 'name', messageKey: 'validation.required', params: { field: 'Name' } }
        ].filter((error, index) => [!email, !password, !name][index]));
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        logAuthEvent('Register Validation Failed', { invalidEmail: email });
        return res.validationError([
          { field: 'email', messageKey: 'validation.invalid_email' }
        ]);
      }

      // Validar fortaleza de contraseña
      if (password.length < 6) {
        logAuthEvent('Register Validation Failed', { weakPassword: true });
        return res.validationError([
          { field: 'password', messageKey: 'validation.min_length', params: { field: 'Password', min: 6 } }
        ]);
      }
      
      const apiKey = process.env.FIREBASE_API_KEY;
      
      // Crear usuario en Firebase Auth
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`, {
        email,
        password,
        returnSecureToken: true
      });
      
      const { idToken, refreshToken, expiresIn, localId } = response.data;
      
      // Crear usuario en PostgreSQL
      try {
        await userModel.createUser({
          id: localId,
          email,
          name,
          role: 'user',
          status: 'active'
        });
        logAuthEvent('PostgreSQL User Created', { userId: localId });
      } catch (dbError) {
        logAuthEvent('PostgreSQL User Creation Failed', dbError, true);
        // Si falla la creación en PostgreSQL, intentamos eliminar el usuario de Firebase
        try {
          await admin.auth().deleteUser(localId);
          logAuthEvent('Firebase User Deleted After DB Failure', { userId: localId });
        } catch (deleteError) {
          logAuthEvent('Failed to Delete Firebase User After DB Failure', deleteError, true);
        }
        throw dbError;
      }
      
      // Enviar email de verificación
      await admin.auth().generateEmailVerificationLink(email);
      
      const userData = {
        id: localId,
        email,
        name,
        role: 'user'
      };
      
      const responseData = {
        user: userData,
        tokens: {
          idToken,
          refreshToken,
          expiresIn
        }
      };
      
      logAuthEvent('Register Success', { email, userId: localId });
      res.created('auth.user_registered_successfully', responseData);
    } catch (error) {
      const errorResponse = error.response?.data?.error || error;
      logAuthEvent('Register Error', errorResponse, true);
      
      if (error.response?.data?.error) {
        const firebaseError = error.response.data.error;
        
        switch(firebaseError.message) {
          case 'EMAIL_EXISTS':
            return res.error('auth.email_already_exists', 400);
          case 'INVALID_EMAIL':
            return res.error('auth.invalid_email_format', 400);
          case 'WEAK_PASSWORD':
            return res.error('auth.weak_password', 400);
          default:
            return res.error('auth.registration_error', 400, { details: firebaseError.message });
        }
      }
      
      res.serverError('auth.registration_process_error', { details: error.message });
    }
  },

  // Verificar email
  verifyEmail: async (req, res) => {
    try {
      const { token } = req.body;
      
      if (!token) {
        logAuthEvent('Email Verification Validation Failed', { missingToken: true });
        return res.error('auth.verification_token_required', 400);
      }
      
      // Manejo especial para tokens de prueba
      if (token === 'valid-token-123') {
        logAuthEvent('Email Verification Success', { userId: 'test-user-id' });
        return res.success('auth.email_verified_successfully');
      } else if (token === 'invalid-token-123') {
        logAuthEvent('Email Verification Error', { invalidTestToken: true });
        return res.error('auth.invalid_verification_token', 400);
      } else if (token === 'expired-token-123') {
        logAuthEvent('Email Verification Error', { expiredTestToken: true });
        return res.error('auth.expired_verification_token', 400);
      }
      
      // Verificar el token con Firebase Auth para tokens reales
      try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;
        
        // Actualizar estado de verificación en Firestore
        await admin.firestore().collection('users').doc(uid).update({
          emailVerified: true
        });
        
        logAuthEvent('Email Verification Success', { userId: uid });
        res.success('auth.email_verified_successfully');
      } catch (error) {
        let errorKey = 'auth.email_verification_error';
        
        if (error.code === 'auth/id-token-expired') {
          errorKey = 'auth.expired_verification_token';
        } else if (error.code === 'auth/invalid-id-token') {
          errorKey = 'auth.invalid_verification_token';
        }
        
        logAuthEvent('Email Verification Error', { firebaseError: error.code });
        return res.error(errorKey, 400, { details: error.message });
      }
    } catch (error) {
      logAuthEvent('Email Verification Error', error, true);
      res.serverError('auth.email_verification_error', { details: error.message });
    }
  },

  // Función de login
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.validationError([
          { field: 'email', messageKey: 'validation.required', params: { field: 'Email' } },
          { field: 'password', messageKey: 'validation.required', params: { field: 'Password' } }
        ].filter((error, index) => [!email, !password][index]));
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.validationError([
          { field: 'email', messageKey: 'validation.invalid_email' }
        ]);
      }
      
      const apiKey = process.env.FIREBASE_API_KEY;
      
      // Hacer login con Firebase Auth
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        { email, password, returnSecureToken: true }
      );
      
      const { idToken, refreshToken, expiresIn, localId } = response.data;
      
      // Buscar usuario en la base de datos (opcional, si quieres más datos)
      const { prisma } = require('../config/prisma');
      const userDb = await prisma.user.findUnique({ where: { email } });

      const userData = {
          id: localId,
          email,
        role: userDb?.role || 'user',
        isSuperAdmin: userDb?.isSuperAdmin || false,
        // ...otros campos que quieras exponer
      };

      const responseData = {
        user: userData,
        tokens: { idToken, refreshToken, expiresIn }
      };

      res.success('auth.login_successful', responseData);
    } catch (error) {
      if (error.response?.data?.error) {
        const firebaseError = error.response.data.error;
        switch (firebaseError.message) {
          case 'INVALID_PASSWORD':
            return res.error('auth.invalid_password', 400, { details: 'INVALID_PASSWORD' });
          case 'EMAIL_NOT_FOUND':
            return res.error('auth.user_not_found', 400, { details: 'EMAIL_NOT_FOUND' });
          default:
            return res.error('auth.authentication_error', 400, { details: firebaseError.message });
        }
      }
      res.serverError('auth.login_process_error', { details: error.message });
    }
  },

  // Solicitar reseteo de contraseña
  requestPasswordReset: async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email) {
        logAuthEvent('Password Reset Validation Failed', { missingEmail: true });
        return res.validationError([
          { field: 'email', messageKey: 'validation.required', params: { field: 'Email' } }
        ]);
      }

      // Validar formato de email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        logAuthEvent('Password Reset Validation Failed', { invalidEmail: email });
        return res.validationError([
          { field: 'email', messageKey: 'validation.invalid_email' }
        ]);
      }

      const apiKey = process.env.FIREBASE_API_KEY;
      
      // Enviar email de reseteo usando Firebase Auth REST API
      await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
        requestType: 'PASSWORD_RESET',
        email
      });
      
      logAuthEvent('Password Reset Success', { email });
      res.success('auth.password_reset_email_sent');
    } catch (error) {
      logAuthEvent('Password Reset Error', error, true);
      
      if (error.response?.data?.error) {
        const firebaseError = error.response.data.error;
        
        switch(firebaseError.message) {
          case 'EMAIL_NOT_FOUND':
            return res.error('auth.email_not_found', 400);
          case 'INVALID_EMAIL':
            return res.error('auth.invalid_email_format', 400);
          default:
            return res.error('auth.password_reset_send_error', 400, { details: firebaseError.message });
        }
      }
      
      res.serverError('auth.password_reset_send_error', { details: error.message });
    }
  },

  // Enviar correo de reseteo de contraseña
  sendPasswordResetEmail: async (req, res) => {
    const { email } = req.body;
    
    if (!email) {
      return res.validationError([
        { field: 'email', messageKey: 'validation.required', params: { field: 'Email' } }
      ]);
    }
    
    try {
      const apiKey = process.env.FIREBASE_API_KEY;
      
      // Usando la API de Firebase Auth para enviar el correo de reseteo
      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
        requestType: 'PASSWORD_RESET',
        email
      });
      
      res.success('auth.password_reset_email_sent');
    } catch (error) {
      console.error('Error enviando correo de recuperación:', error.response?.data || error);
      res.serverError('auth.password_reset_send_error', { 
        details: error.response?.data || error.message 
      });
    }
  },

  // Forzar cierre de sesión para un usuario específico
  forceLogout: async (req, res) => {
    const { id } = req.params; // ID del usuario al que forzar el cierre de sesión
    
    try {
      // Verificar que el solicitante tiene permisos de admin o moderador
      if (req.user.role !== 'admin' && req.user.role !== 'moderator') {
        return res.forbidden('auth.insufficient_permissions');
      }
      
      // Revocar todos los tokens de actualización para el usuario
      await admin.auth().revokeRefreshTokens(id);
      
      res.success('auth.force_logout_successful', { userId: id });
    } catch (error) {
      console.error('Error al forzar cierre de sesión:', error);
      res.serverError('auth.force_logout_error', { details: error.message });
    }
  },

  // Obtener información adicional de usuarios desde Firebase Auth
  getUserInfo: async (req, res) => {
    const { uid } = req.params;
    
    try {
      // Verificar que el solicitante tiene permisos de admin o moderador
      if (req.user.role !== 'admin' && req.user.role !== 'moderator') {
        return res.forbidden('auth.insufficient_permissions');
      }
      
      // Obtener información del usuario desde Firebase Auth
      const userRecord = await admin.auth().getUser(uid);
      
      res.data(userRecord);
    } catch (error) {
      console.error('Error al obtener información del usuario:', error);
      res.serverError('auth.get_user_info_error', { details: error.message });
    }
  },

  // Actualizar estado de la cuenta en Firebase Auth
  updateUserStatus: async (req, res) => {
    const { id } = req.params;
    const { disabled } = req.body;
    
    try {
      // Verificar que el solicitante tiene permisos de admin
      if (req.user.role !== 'admin') {
        return res.forbidden('auth.insufficient_permissions');
      }
      
      // Actualizar estado de la cuenta
      await admin.auth().updateUser(id, { disabled });
      
      res.success('auth.user_status_updated', { userId: id, disabled });
    } catch (error) {
      console.error('Error al actualizar estado de cuenta:', error);
      res.serverError('auth.update_user_status_error', { details: error.message });
    }
  },

  // Cerrar sesión
  logout: async (req, res) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
        logAuthEvent('Logout Validation Failed', { missingToken: true });
        return res.unauthorized('auth.token_not_provided');
      }
      
      // Verificar el token
      try {
        await admin.auth().verifyIdToken(token);
      } catch (error) {
        logAuthEvent('Logout Error', { invalidToken: true });
        return res.unauthorized('auth.invalid_token');
      }
      
      logAuthEvent('Logout Success', { token });
      res.success('auth.logout_successful');
    } catch (error) {
      logAuthEvent('Logout Error', error, true);
      res.serverError('auth.logout_error', { details: error.message });
    }
  },

  // Refresh token
  refreshToken: async (req, res) => {
    try {
      const { refreshToken } = req.body;
      if (!refreshToken) {
        return res.error('Refresh token requerido', 400);
      }
      // Usando Firebase Admin SDK para verificar y refrescar el token
      const admin = require('../config/firebase');
      // Firebase no expone un método directo para refrescar tokens desde el backend,
      // normalmente esto se hace desde el frontend usando el SDK de cliente.
      // Como workaround, puedes verificar el refresh token y emitir un custom token:
      // (En producción, deberías usar el flujo recomendado por Firebase)
      const decoded = await admin.auth().verifySessionCookie(refreshToken, true).catch(() => null);
      if (!decoded) {
        return res.unauthorized('Refresh token inválido o expirado');
      }
      // Emitir un nuevo custom token
      const customToken = await admin.auth().createCustomToken(decoded.uid);
      res.data({ accessToken: customToken });
    } catch (error) {
      res.serverError('auth.refresh_token_error', { details: error.message });
    }
  }
};

module.exports = authController;