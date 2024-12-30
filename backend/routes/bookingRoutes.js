const express = require('express');
const Booking = require('../models/Booking');
const Room = require('../models/Rooms');
const User = require('../models/Users');
const router = express.Router();

// POST route for creating a booking
router.post('/book-room', async (req, res) => {
  const { userId, roomId, checkIn, checkOut, totalPrice } = req.body;
  console.log(userId,"ROOM",roomId,checkIn,checkOut,totalPrice);

  try {
    // Validate the input data
    if (!userId || !roomId || !checkIn || !checkOut || !totalPrice) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Find the room by ID
    const room = await Room.findById(roomId);
    if (!room) {
      return res.status(404).json({ message: 'Room not found.' });
    }

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Create the booking entry
    const newBooking = new Booking({
      userId,
      roomId,
      checkIn,
      checkOut,
      totalPrice,
    });

    await newBooking.save();

    return res.status(201).json({ message: 'Booking successful!', booking: newBooking });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error, try again later.' });
  }
});

// Get all bookings (Admin only)
router.get('/all-bookings', async (req, res) => {
  try {
    // Fetch all bookings with populated user and room details
    const bookings = await Booking.find()
      .populate('userId', 'username email') // Populate user details
      .populate('roomId', 'title location price'); // Populate room details

    if (!bookings.length) {
      return res.status(404).json({ message: 'No bookings found.' });
    }

    return res.status(200).json({ bookings });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error, try again later.' });
  }
});

module.exports = router;
