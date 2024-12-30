const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); // Import your DB connection logic
const authRoutes = require('./routes/auth');
const adminauth =require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(express.json());

// User registration route
app.use('/api/auth', authRoutes);

app.use('/api/admin/auth',adminauth);

app.use('/uploads', express.static('uploads')); // Serve uploaded images

// Routes
app.use('/api/rooms', roomRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});