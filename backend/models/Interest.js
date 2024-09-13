// /backend/models/Interest.js

const mongoose = require('mongoose');

const interestSchema = new mongoose.Schema({
  interest: { type: String, required: true },
  description: { type: String }
});

const Interest = mongoose.model('Interest', interestSchema);

module.exports = Interest;
