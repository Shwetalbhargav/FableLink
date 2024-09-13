// /backend/routes/userRoutes.js

const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUserProfile, updateUserProfile, getAllUsers } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');
const mongoose = require('mongoose');

// User registration route
router.post('/register', registerUser);

// User login route
router.post('/login', loginUser);

// Get user profile (protected route)
router.get('/profile', protect, getUserProfile);

// Update user profile (protected route)
router.put('/profile', protect, updateUserProfile);

// Get all users (this could be for exploring users, admin functions)
router.get('/', protect, getAllUsers);

module.exports = router;
