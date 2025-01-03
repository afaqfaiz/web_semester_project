const mongoose = require('mongoose');


const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: 'admin' }, // 'user' or 'admin'
  createdAt: { type: Date, default: Date.now }
});

// Admin model
const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
