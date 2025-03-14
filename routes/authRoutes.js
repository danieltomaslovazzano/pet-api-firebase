// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { verifyToken } = require('../middlewares/auth');

// POST /auth/login
router.post('/login', authController.login);

// New endpoint: Force logout (revoke refresh tokens)
router.post('/logout', verifyToken, authController.logout);


module.exports = router;
