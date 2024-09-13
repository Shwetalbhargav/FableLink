// /backend/routes/connectionRoutes.js

const express = require('express');
const router = express.Router();
const { createConnection, getConnections, updateConnectionStatus } = require('../controllers/connectionController');
const { protect } = require('../middleware/authMiddleware');

// Create a new connection between two users
router.post('/', protect, createConnection);

// Get all connections for a user
router.get('/:userId', protect, getConnections);

// Update connection status (e.g., pending to connected)
router.put('/:connectionId', protect, updateConnectionStatus);

module.exports = router;
