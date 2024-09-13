// /backend/models/Connection.js

const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({
  userOneId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  userTwoId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'connected', 'blocked'], default: 'pending' },
  initiatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  connectedAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Connection = mongoose.model('Connection', connectionSchema);

module.exports = Connection;
