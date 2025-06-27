const mongoose = require('mongoose');

const kycSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true // Ensures one-to-one
  },
  bvn: String,
  nin: String,
  address: String,
});

module.exports = mongoose.model('KYC', kycSchema);
