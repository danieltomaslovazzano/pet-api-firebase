const admin = require('firebase-admin');
const db = admin.firestore();

// Middleware para verificar el token y establecer req.user
exports.verifyToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      console.error('No se encontró token de autenticación');
      return res.status(401).json({ error: 'No autorizado: Token no proporcionado' });
    }

    const token = authHeader.split('Bearer ')[1];
    
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      req.user = decodedToken;
      console.log('Token verificado para usuario:', decodedToken.uid);
      next();
    } catch (error) {
      console.error('Error al verificar token:', error);
      return res.status(401).json({ error: 'No autorizado: Token inválido' });
    }
  } catch (error) {
    console.error('Error en middleware de autenticación:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

// Middleware para verificar si el usuario es admin o moderator
exports.isAdmin = async (req, res, next) => {
  try {
    if (!req.user) {
      console.error('No hay usuario autenticado');
      return res.status(401).json({ error: 'No autorizado: Usuario no autenticado' });
    }

    // Obtener el documento del usuario de Firestore
    const userDoc = await db.collection('users').doc(req.user.uid).get();
    
    if (!userDoc.exists) {
      console.error('Usuario no encontrado en Firestore:', req.user.uid);
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const userData = userDoc.data();
    
    // Verificar si el usuario es admin o moderator
    if (userData.role !== 'admin' && userData.role !== 'moderator') {
      console.error('Usuario sin permisos suficientes:', req.user.uid, 'Role:', userData.role);
      return res.status(403).json({ error: 'No autorizado: Se requieren permisos de administrador o moderador' });
    }

    // Guardar el rol en req.user para uso posterior
    req.user.role = userData.role;
    console.log('Usuario verificado:', req.user.uid, 'Role:', userData.role);
    next();
  } catch (error) {
    console.error('Error en middleware de permisos:', error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
}; 