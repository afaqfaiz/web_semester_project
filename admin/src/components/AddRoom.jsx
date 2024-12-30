import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../admin-css/AddRoom.css'; // Link to the simple CSS

function AddRoom() {
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    propertyType: '',
    category: '',
    guests: '',
    bedrooms: '',
    bathrooms: '',
    price: '',
    rating: '',
    description: '',
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('image', image);
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      await axios.post('http://localhost:3000/api/rooms/add-room', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert('Room added successfully!');
      setFormData({
        title: '',
        location: '',
        propertyType: '',
        category: '',
        guests: '',
        bedrooms: '',
        bathrooms: '',
        price: '',
        rating: '',
        description: '',
      });
      setImage(null);
      setPreview(null);
    } catch (error) {
      alert('Error adding room');
    }
  };

  return (
    <div className="add-room-container">
      <Navbar />
      <h2>Add Room</h2>
      <form onSubmit={handleSubmit} className="add-room-form">
        <div className="form-group">
          <label htmlFor="title">Room Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="propertyType">Property Type</label>
          <input
            type="text"
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bedrooms">Bedrooms</label>
          <input
            type="number"
            id="bedrooms"
            name="bedrooms"
            value={formData.bedrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bathrooms">Bathrooms</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            id="rating"
            name="rating"
            max={5}
            value={formData.rating}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input type="file" id="image" onChange={handleImageChange} required />
          {preview && <img src={preview} alt="Preview" className="image-preview" />}
        </div>
        <button type="submit" className="submit-button">Add Room</button>
      </form>
    </div>
  );
}

export default AddRoom;
