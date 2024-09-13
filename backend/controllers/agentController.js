// /backend/controllers/agentController.js

const Agent = require('../models/Agent');

// Get AI agent for a user
const getAgent = async (req, res) => {
  const agent = await Agent.findOne({ userId: req.params.userId });
  if (agent) {
    res.json(agent);
  } else {
    res.status(404).json({ message: 'Agent not found' });
  }
};

// Update AI agent's personality
const updateAgent = async (req, res) => {
  const agent = await Agent.findOne({ userId: req.params.userId });
  if (agent) {
    agent.agentPersonality = { ...agent.agentPersonality, ...req.body.agentPersonality };
    const updatedAgent = await agent.save();
    res.json(updatedAgent);
  } else {
    res.status(404).json({ message: 'Agent not found' });
  }
};

// Get AI agent's interaction history
const getAgentInteractions = async (req, res) => {
  const agent = await Agent.findOne({ userId: req.params.userId });
  if (agent) {
    res.json(agent.trainingData.interactionHistory);
  } else {
    res.status(404).json({ message: 'Agent not found' });
  }
};

// Add an interaction to the AI agent's history
const addInteraction = async (req, res) => {
  const agent = await Agent.findOne({ userId: req.params.userId });
  if (agent) {
    agent.trainingData.interactionHistory.push(req.body);
    const updatedAgent = await agent.save();
    res.json(updatedAgent);
  } else {
    res.status(404).json({ message: 'Agent not found' });
  }
};

module.exports = { getAgent, updateAgent, getAgentInteractions, addInteraction };
