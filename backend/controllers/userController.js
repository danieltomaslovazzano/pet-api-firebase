// controllers/userController.js
const admin = require('firebase-admin');
const { userModel } = require('../models/adapter');
const db = admin.firestore();

// [Firestore logic removed: All Firestore database operations have been removed as part of the migration to Prisma/Postgres. Firebase Auth logic is preserved.]

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
  userModel.getUserById(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: 'Error retrieving user', details: err.message });
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
    role: req.query.role,
    status: req.query.status,
    searchTerm: req.query.searchTerm
    // Puedes agregar más filtros aquí
  };

  // Remove undefined filters
  Object.keys(filters).forEach(key => filters[key] === undefined && delete filters[key]);

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
    const { id } = req.params;
    
    // Get user from Firebase Auth
    const userRecord = await admin.auth().getUser(id);
    
    // Get user from database using our model
    const user = await userModel.getUserById(id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found in database' });
    }
    
    // Combine data from both sources
    const userData = {
      ...user,
      uid: userRecord.uid,
      email: userRecord.email,
      emailVerified: userRecord.emailVerified,
      disabled: userRecord.disabled,
      metadata: {
        creationTime: userRecord.metadata.creationTime,
        lastSignInTime: userRecord.metadata.lastSignInTime
      },
      customClaims: userRecord.customClaims || {}
    };
    
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error getting admin user details:', error);
    if (error.code === 'auth/user-not-found') {
      return res.status(404).json({ error: 'User not found in Firebase Auth' });
    }
    res.status(500).json({ error: 'Error getting user details', details: error.message });
  }
};