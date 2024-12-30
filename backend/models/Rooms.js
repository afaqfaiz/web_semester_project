const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  image: String,
  title: String,
  location: String,
  propertyType: String,
  category: String,
  guests: Number,
  bedrooms: Number,
  bathrooms: Number,
  price: Number,
  rating: Number,
  description: String,
});

module.exports = mongoose.model('Room', roomSchema);
