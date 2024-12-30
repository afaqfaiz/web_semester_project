const express = require('express');
const Room = require('../models/Rooms');
const router = express.Router();

router.post('/add-room', async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.status(201).json({ message: 'Room added successfully!' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get('/list-rooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
