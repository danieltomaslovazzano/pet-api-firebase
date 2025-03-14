// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { verifyToken } = require('../middlewares/auth');
const { checkRoles } = require('../middlewares/role');
const { body, validationResult } = require('express-validator');

// Public endpoint for signup (with input validation)
router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Must be a valid email'),
    body('name').notEmpty().withMessage('Name is required')
    // Add additional validations as needed
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
  userController.createUser
);

// Protected endpoint: Get all users (accessible only by moderators and admins)
router.get('/', verifyToken, checkRoles(['moderator', 'admin']), userController.getUsers);

// Other protected endpoints (user must be authenticated)
router.get('/:id', verifyToken, userController.getUserById);
router.put('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);

// Endpoints to block/unblock users (authenticated)
router.put('/:id/block', verifyToken, userController.blockUser);
router.put('/:id/unblock', verifyToken, userController.unblockUser);

module.exports = router;
