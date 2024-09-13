// /backend/controllers/connectionController.js

const Connection = require('../models/Connection');

// Create a new connection
const createConnection = async (req, res) => {
  const { userOneId, userTwoId, initiatedBy } = req.body;
  try {
    const connection = new Connection({ userOneId, userTwoId, initiatedBy });
    const newConnection = await connection.save();
    res.status(201).json(newConnection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all connections for a user
const getConnections = async (req, res) => {
  const connections = await Connection.find({ $or: [{ userOneId: req.params.userId }, { userTwoId: req.params.userId }] });
  res.json(connections);
};

// Update connection status
const updateConnectionStatus = async (req, res) => {
  const connection = await Connection.findById(req.params.connectionId);
  if (connection) {
    connection.status = req.body.status || connection.status;
    const updatedConnection = await connection.save();
    res.json(updatedConnection);
  } else {
    res.status(404).json({ message: 'Connection not found' });
  }
};

module.exports = { createConnection, getConnections, updateConnectionStatus };
