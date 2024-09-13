// /backend/controllers/messageController.js

const Message = require('../models/Message');

// Send a message between users
const sendMessage = async (req, res) => {
  const { senderId, receiverId, message } = req.body;
  try {
    const newMessage = new Message({ senderId, receiverId, message });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all messages between users
const getMessages = async (req, res) => {
  const messages = await Message.find({
    $or: [
      { senderId: req.params.userId, receiverId: req.params.receiverId },
      { senderId: req.params.receiverId, receiverId: req.params.userId }
    ]
  });
  res.json(messages);
};

module.exports = { sendMessage, getMessages };
