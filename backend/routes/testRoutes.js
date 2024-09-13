// /backend/routes/testRoutes.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Test MongoDB connection route
router.get('/check-db', async (req, res) => {
    try {
        const state = mongoose.connection.readyState;
        const states = ['disconnected', 'connected', 'connecting', 'disconnecting'];
        res.json({ status: states[state] });
      } catch (error) {
        res.status(500).json({ message: 'Error checking database connection', error: error.message });
      }
});

module.exports = router;
