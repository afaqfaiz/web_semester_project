const express = require('express');
const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');
const router = express.Router();
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
dotenv.config();

// Register a new user
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  console.log("in admin signup");

  

  
  try {
    // Check if user already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists' });

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    
    // Create a new user
    const newAdmin = new Admin({
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newAdmin.save();
    res.status(201).json({ message: 'admin registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering Admin', error: error.message });
  }
});


router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) throw new Error('Invalid credentials');
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) throw new Error('Invalid credentials');
    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    
    return res.status(200).json({admin,token})
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
