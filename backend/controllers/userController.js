// controllers/userController.js
const admin = require('firebase-admin');
const userModel = require('../models/userModel');
const db = admin.firestore();

exports.createUser = (req, res) => {
  const userData = req.body;
  userModel.createUser(userData, (err, newUser) => {
    if (err) {
      return res.status(500).json({ error: 'Error creating user', details: err.message });
    }
    res.status(201).json(newUser);
  });
};

exports.getUserById = (req, res) => {
  const { id } = req.params;
  userModel.getUserById(id, (err, user) => {
    if (err) {
      return res.status(404).json({ error: 'User not found', details: err.message });
    }
    res.status(200).json(user);
  });
};

exports.updateUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  
  // Allow the update if the user is updating their own record,
  // or if they are an admin or moderator.
  if (req.user.uid !== id && req.user.role !== 'admin' && req.user.role !== 'moderator') {
    return res.status(403).json({ error: 'Forbidden: You can only update your own information.' });
  }

  userModel.updateUser(id, userData, (err, updatedUser) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating user', details: err.message });
    }
    res.status(200).json(updatedUser);
  });
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting user', details: err.message });
    }
    res.status(200).json(result);
  });
};


exports.getUsers = (req, res) => {
  // Extraer filtros de la query string
  // Ejemplo: GET /users?name=John&email=john@example.com&role=reporter
  const filters = {
    name: req.query.name,
    email: req.query.email,
    role: req.query.role
    // Puedes agregar más filtros aquí
  };

  userModel.getUsers(filters, (err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving users', details: err.message });
    }
    res.status(200).json(users);
  });
};


/* controllers/userController.js - Bloquear Usuario */
exports.blockUser = (req, res) => {
  const { id } = req.params;  // ID del usuario que realiza la acción
  const { blockedUserId } = req.body;
  userModel.blockUser(id, blockedUserId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error blocking user', details: err.message });
    }
    res.status(200).json(result);
  });
};

// controllers/userController.js
exports.unblockUser = (req, res) => {
  const { id } = req.params;  // ID del usuario que realiza la acción
  const { blockedUserId } = req.body;
  userModel.unblockUser(id, blockedUserId, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error unblocking user', details: err.message });
    }
    res.status(200).json(result);
  });
};


// Añadir nuevo método para obtener organizaciones del usuario

exports.getUserOrganizations = (req, res) => {
  const { id } = req.params;
  
  // Verificar si el usuario está solicitando sus propias organizaciones
  if (req.user.uid !== id && req.user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: You can only view your own organizations.' });
  }
  
  userModel.getUserOrganizations(id, (err, organizations) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving user organizations', details: err.message });
    }
    res.status(200).json(organizations);
  });
};

exports.getAdminUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    console.log(`Fetching details for user: ${userId}`);

    try {
      // Obtener datos de Firebase Auth
      const userRecord = await admin.auth().getUser(userId);
      console.log('Firebase Auth data retrieved:', userRecord.uid);

      // Obtener datos adicionales de Firestore
      const userDoc = await db.collection('users').doc(userId).get();
      console.log('Firestore data retrieved for user:', userId);

      if (!userDoc.exists) {
        console.log('User document not found in Firestore for ID:', userId);
        return res.status(404).json({ error: 'User not found in database' });
      }

      // Combinar datos de Auth y Firestore
      const userData = {
        id: userId,
        ...userDoc.data(),
        email: userRecord.email,
        emailVerified: userRecord.emailVerified,
        disabled: userRecord.disabled,
        metadata: userRecord.metadata,
        providerData: userRecord.providerData,
        createdAt: userDoc.data().createdAt || userRecord.metadata.creationTime,
        updatedAt: userDoc.data().updatedAt || userRecord.metadata.lastRefreshTime,
        lastLoginAt: userRecord.metadata.lastSignInTime
      };

      console.log('User data combined successfully for ID:', userId);
      return res.status(200).json(userData);

    } catch (innerError) {
      console.error('Error in user lookup:', innerError);
      if (innerError.code === 'auth/user-not-found') {
        return res.status(404).json({ error: 'User not found in authentication system' });
      }
      throw innerError; // Re-throw para que sea capturado por el catch exterior
    }

  } catch (error) {
    console.error('Error fetching user details:', error);
    return res.status(500).json({ 
      error: 'Error fetching user details',
      message: error.message,
      code: error.code
    });
  }
};