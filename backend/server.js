const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors'); 
const connectDB = require('./db'); // Import your DB connection logic
const authRoutes = require('./routes/auth');

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

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});