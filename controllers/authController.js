// controllers/authController.js
const admin = require('../config/firebase'); // Import the admin instance
const axios = require('axios');

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const apiKey = process.env.FIREBASE_API_KEY; // Set this in your .env file

  if (!email || !password) {
    return res.status(400).json({ error: 'Missing email or password' });
  }

  try {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      email,
      password,
      returnSecureToken: true
    });

    // Return the Firebase token and other info to the client
    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Firebase login error:', error.response?.data || error);
    return res.status(400).json({ error: 'Invalid credentials', details: error.response?.data });
  }
};

exports.logout = async (req, res) => {
  try {
    // You can retrieve the UID from the authenticated token (req.user.uid)
    const uid = req.user.uid;
    // Revoke the refresh tokens for this user
    await admin.auth().revokeRefreshTokens(uid);
    res.status(200).json({ message: `User ${uid} has been logged out (tokens revoked)` });
  } catch (error) {
    console.error("Error revoking tokens:", error);
    res.status(500).json({ error: 'Failed to log out user', details: error.message });
  }
};
