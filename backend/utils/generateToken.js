// /backend/utils/generateToken.js

const jwt = require('jsonwebtoken');

// Function to generate a JWT token for a user
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token valid for 30 days
  });
};

module.exports = generateToken;
