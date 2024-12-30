const express = require('express');
const Room = require('../models/Rooms');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set up storage for images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Save images in the 'uploads' folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use unique names for images
  },
});

const upload = multer({ storage });

// Add a room with image upload
router.post('/add-room', upload.single('image'), async (req, res) => {
  try {
    const roomData = { ...req.body, image: `/uploads/${req.file.filename}` };
    const room = new Room(roomData);
    await room.save();
    res.status(201).json({ message: 'Room added successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all rooms
router.get('/list-rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
