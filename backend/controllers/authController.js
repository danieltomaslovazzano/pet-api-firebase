// controllers/authController.js - Añadir estas funciones al final del archivo
const admin = require('../config/firebase');
const axios = require('axios');


// Función de login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Se requiere correo electrónico y contraseña' });
    }
    
    const apiKey = process.env.FIREBASE_API_KEY;
    
    // Autenticar con Firebase Auth REST API
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      email,
      password,
      returnSecureToken: true
    });
    
    const { idToken, refreshToken, expiresIn, localId } = response.data;
    
    // Obtener información adicional del usuario desde Firestore
    const userDoc = await admin.firestore().collection('users').doc(localId).get();
    let userData = { id: localId, email };
    
    if (userDoc.exists) {
      userData = {
        ...userData,
        ...userDoc.data()
      };
    }
    
    // Obtener claims (rol) desde Firebase Auth
    const userRecord = await admin.auth().getUser(localId);
    const customClaims = userRecord.customClaims || {};
    
    // Sanitizar datos (no enviar campos sensibles)
    delete userData.password;
    delete userData.blockedUsers;
    
    res.status(200).json({
      user: {
        ...userData,
        role: customClaims.role || userData.role || 'user'
      },
      tokens: {
        idToken,
        refreshToken,
        expiresIn
      }
    });
  } catch (error) {
    console.error('Error en login:', error.response?.data || error);
    
    // Manejar diferentes errores de autenticación
    if (error.response && error.response.data && error.response.data.error) {
      const firebaseError = error.response.data.error;
      
      switch(firebaseError.message) {
        case 'EMAIL_NOT_FOUND':
          return res.status(404).json({ error: 'Usuario no encontrado' });
        case 'INVALID_PASSWORD':
          return res.status(401).json({ error: 'Contraseña incorrecta' });
        case 'USER_DISABLED':
          return res.status(403).json({ error: 'Cuenta deshabilitada' });
        default:
          return res.status(400).json({ 
            error: 'Error de autenticación', 
            details: firebaseError.message 
          });
      }
    }
    
    res.status(500).json({ 
      error: 'Error en el proceso de login', 
      details: error.message 
    });
  }
};

// Enviar correo de reseteo de contraseña
exports.sendPasswordResetEmail = async (req, res) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Se requiere una dirección de correo electrónico' });
  }
  
  try {
    const apiKey = process.env.FIREBASE_API_KEY;
    
    // Usando la API de Firebase Auth para enviar el correo de reseteo
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${apiKey}`, {
      requestType: 'PASSWORD_RESET',
      email
    });
    
    res.status(200).json({ message: 'Correo de recuperación enviado correctamente' });
  } catch (error) {
    console.error('Error enviando correo de recuperación:', error.response?.data || error);
    res.status(400).json({ 
      error: 'Error al enviar correo de recuperación', 
      details: error.response?.data || error.message 
    });
  }
};

// Forzar cierre de sesión para un usuario específico
exports.forceLogout = async (req, res) => {
  const { id } = req.params; // ID del usuario al que forzar el cierre de sesión
  
  try {
    // Verificar que el solicitante tiene permisos de admin o moderador
    if (req.user.role !== 'admin' && req.user.role !== 'moderator') {
      return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
    }
    
    // Revocar todos los tokens de actualización para el usuario
    await admin.auth().revokeRefreshTokens(id);
    
    res.status(200).json({ 
      message: `Se ha forzado el cierre de sesión para el usuario ${id}` 
    });
  } catch (error) {
    console.error('Error al forzar cierre de sesión:', error);
    res.status(500).json({ 
      error: 'Error al forzar cierre de sesión', 
      details: error.message 
    });
  }
};

// Obtener información adicional de usuarios desde Firebase Auth
exports.getUserInfo = async (req, res) => {
  const { uid } = req.params;
  
  try {
    // Verificar que el solicitante tiene permisos de admin o moderador
    if (req.user.role !== 'admin' && req.user.role !== 'moderator') {
      return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
    }
    
    // Obtener información del usuario desde Firebase Auth
    const userRecord = await admin.auth().getUser(uid);
    
    res.status(200).json(userRecord);
  } catch (error) {
    console.error('Error al obtener información del usuario:', error);
    res.status(500).json({ 
      error: 'Error al obtener información del usuario', 
      details: error.message 
    });
  }
};

// Actualizar estado de la cuenta en Firebase Auth
exports.updateUserStatus = async (req, res) => {
  const { id } = req.params;
  const { disabled } = req.body;
  
  try {
    // Verificar que el solicitante tiene permisos de admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
    }
    
    // Actualizar estado de la cuenta
    await admin.auth().updateUser(id, { disabled });
    
    res.status(200).json({ 
      message: `Estado de cuenta actualizado para el usuario ${id}` 
    });
  } catch (error) {
    console.error('Error al actualizar estado de cuenta:', error);
    res.status(500).json({ 
      error: 'Error al actualizar estado de cuenta', 
      details: error.message 
    });
  }
};

// Cerrar sesión (revocar el token del usuario actual)
exports.logout = async (req, res) => {
  try {
    const uid = req.user.uid;
    
    if (!uid) {
      return res.status(400).json({ error: 'No se pudo identificar el usuario a cerrar sesión' });
    }
    
    // Revocar tokens de actualización para el usuario actual
    await admin.auth().revokeRefreshTokens(uid);
    
    res.status(200).json({ 
      message: 'Sesión cerrada correctamente' 
    });
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
    res.status(500).json({ 
      error: 'Error al cerrar sesión', 
      details: error.message 
    });
  }
};