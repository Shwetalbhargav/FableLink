// /backend/routes/messageRoutes.js

const express = require('express');
const router = express.Router();
const { sendMessage, getMessages } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

// Send a message between two users
router.post('/', protect, sendMessage);

// Get all messages between two users
router.get('/:userId/:receiverId', protect, getMessages);

module.exports = router;
