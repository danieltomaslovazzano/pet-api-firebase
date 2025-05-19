// backend/middlewares/auth.js
const admin = require('../config/firebase');

/**
 * Middleware para verificar tokens JWT desde Firebase
 */
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.error('[auth] Token no proporcionado o mal formado:', authHeader);
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const idToken = authHeader.split('Bearer ')[1];
  console.log('[auth] Token recibido:', idToken);

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    console.log('[auth] Token decodificado:', decodedToken);
    
    // Si necesitas información adicional del usuario
    try {
      const userRecord = await admin.auth().getUser(decodedToken.uid);
      req.userRecord = userRecord;
      console.log('[auth] userRecord:', userRecord);
    } catch (userError) {
      console.warn('Error al obtener información adicional del usuario:', userError);
      // Continuamos aunque no podamos obtener la información adicional
    }
    
    next();
  } catch (error) {
    console.error('[auth] Error verifying Firebase token:', error);
    return res.status(401).json({ error: 'Token inválido', details: error.message });
  }
};

// Este middleware mantiene compatibilidad con los roles
const checkRoles = (allowedRoles) => {
  return async (req, res, next) => {
    // Si no hay un usuario autenticado, regresar error
    if (!req.user) {
      return res.status(401).json({ error: 'No autenticado' });
    }

    // Obtener el rol del usuario desde los claims personalizados
    try {
      const userRole = req.user.role || 'user';

      // Permitir acceso total a superadmin
      if (userRole === 'superadmin') {
        // Superadmin tiene acceso a todo
        return next();
      }

      // Verificar si el usuario tiene alguno de los roles permitidos
      if (allowedRoles.includes(userRole)) {
        return next();
      }

      return res.status(403).json({ error: 'Permisos insuficientes' });
    } catch (error) {
      console.error('Error checking roles:', error);
      return res.status(500).json({ error: 'Error verificando permisos' });
    }
  };
};

module.exports = { verifyToken, checkRoles };