// controllers/userController.js
const userModel = require('../models/userModel');

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

// Función para obtener todos los usuarios
exports.getUsers = (req, res) => {
  userModel.getUsers((err, users) => {
    if (err) {
      return res.status(500).json({ error: 'Error retrieving users', details: err.message });
    }
    res.status(200).json(users);
  });
};