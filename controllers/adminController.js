// controllers/adminController.js
const admin = require('../config/firebase');  // <-- Add this line to import Firebase Admin
const petModel = require('../models/petModel');
const userModel = require('../models/userModel');

// Retrieve all pet advertisements (admin view, with possible filters).
exports.getAllPets = async (req, res) => {
  try {
    // For example, you might retrieve all pets without restrictions.
    // You could also add query filters here.
    const pets = await petModel.getAllPets(); // Ensure your petModel has this function or adapt accordingly.
    res.status(200).json(pets);
  } catch (err) {
    res.status(500).json({ error: 'Error retrieving pets', details: err.message });
  }
};

// Update any pet advertisement (admin/moderator privileges).
exports.updatePet = (req, res) => {
  const { id } = req.params;
  const petData = req.body;
  petModel.updatePet(id, petData, (err, updatedPet) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating pet', details: err.message });
    }
    res.status(200).json(updatedPet);
  });
};

// Update user details.
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const userData = req.body;
  userModel.updateUser(id, userData, (err, updatedUser) => {
    if (err) {
      return res.status(500).json({ error: 'Error updating user', details: err.message });
    }
    res.status(200).json(updatedUser);
  });
};

// Update a user's role using custom claims (admin only).
exports.updateUserRole = async (req, res) => {
  const { id } = req.params; // 'id' is the Firebase UID of the user
  const { role } = req.body; // New role, e.g., "moderator", "admin", "reporter"
  
  if (!role) {
    return res.status(400).json({ error: "Missing role in request body" });
  }
  
  try {
    // Set the custom claim 'role' for the user using Firebase Admin SDK
    await admin.auth().setCustomUserClaims(id, { role });
    res.status(200).json({ message: `User ${id} role updated to ${role}` });
  } catch (error) {
    console.error("Error updating user role:", error);
    res.status(500).json({ error: "Error updating user role", details: error.message });
  }
};

// Delete a user.
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userModel.deleteUser(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error deleting user', details: err.message });
    }
    res.status(200).json(result);
  });
};
