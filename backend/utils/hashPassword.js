// /backend/utils/hashPassword.js

const bcrypt = require('bcryptjs');

// Function to hash a password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

module.exports = hashPassword;
