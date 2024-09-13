// /backend/models/Agent.js

const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  userInput: { type: String, required: true },
  agentResponse: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const agentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  agentName: { type: String, default: 'AI Agent' },
  agentPersonality: {
    type: { type: String, enum: ['empathetic', 'professional', 'casual'], default: 'professional' },
    tone: { type: String, default: 'friendly' },
    responseSpeed: { type: String, default: 'fast' }
  },
  trainingData: {
    interactionHistory: [interactionSchema]
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
