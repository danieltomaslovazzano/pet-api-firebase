// backend/middlewares/auth.js
const admin = require('../config/firebase');

/**
 * Middleware para verificar tokens JWT desde Firebase
 */
const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    
    // Si necesitas información adicional del usuario
    try {
      const userRecord = await admin.auth().getUser(decodedToken.uid);
      req.userRecord = userRecord;
    } catch (userError) {
      console.warn('Error al obtener información adicional del usuario:', userError);
      // Continuamos aunque no podamos obtener la información adicional
    }
    
    next();
  } catch (error) {
    console.error('Error verifying Firebase token:', error);
    return res.status(401).json({ error: 'Token inválido' });
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
      // Si tienes claims personalizados en Firebase
      const userRole = req.user.role || 'user'; // Default a 'user' si no hay rol

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