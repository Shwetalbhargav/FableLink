// /backend/models/User.js

const mongoose = require('mongoose');

const connectionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['pending', 'connected', 'blocked'], default: 'pending' },
  connectedAt: { type: Date, default: Date.now },
});

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile: {
    name: { type: String },
    bio: { type: String },
    avatar: { type: String },
    location: { type: String }
  },
  preferences: {
    interests: { type: [String] },
    language: { type: String, default: 'en' },
    communicationStyle: { type: String, default: 'formal' }
  },
  connections: [connectionSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
