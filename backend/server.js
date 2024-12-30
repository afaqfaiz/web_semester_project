const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); // Import your DB connection logic
const authRoutes = require('./routes/auth');
const adminauth =require('./routes/authRoutes');
const roomRoutes = require('./routes/roomRoutes');
const bookingRoutes = require('./routes/bookingRoutes')
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();
app.use(cors());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(express.json());


app.use('/api/auth', authRoutes);

app.use('/api/admin/auth',adminauth);

app.use('/uploads', express.static('uploads')); 

app.use('/api/rooms', roomRoutes);
app.use('/api/booking', bookingRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});