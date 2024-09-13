// /backend/routes/agentRoutes.js

const express = require('express');
const router = express.Router();
const { getAgent, updateAgent, getAgentInteractions, addInteraction } = require('../controllers/agentController');
const { protect } = require('../middleware/authMiddleware');

// Get the AI agent for a user (protected route)
router.get('/:userId', protect, getAgent);

// Update the AI agent's personality or other attributes
router.put('/:userId', protect, updateAgent);

// Get interaction history for an AI agent
router.get('/:userId/interactions', protect, getAgentInteractions);

// Add an interaction to the AI agent's history
router.post('/:userId/interactions', protect, addInteraction);

module.exports = router;
