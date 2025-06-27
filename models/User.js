const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isAdmin: { type: Boolean, default: false },
  kyc: { type: mongoose.Schema.Types.ObjectId, ref: 'Kyc' }, // One-to-One
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }] // One-to-Many
});

module.exports = mongoose.model('User', userSchema);
