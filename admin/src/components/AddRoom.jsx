import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import '../admin-css/AddRoom.css'
// import './AddRoom.css'; // Ensure to create a CSS file for styling

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
  const [preview, setPreview] = useState(null); // For image preview

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
      data.append('image', image); // Append image
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
          <label htmlFor="image">Upload Image</label>
          <input type="file" id="image" onChange={handleImageChange} required />
          {preview && <img src={preview} alt="Preview" className="image-preview" />}
        </div>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label htmlFor={key}>{key}</label>
            <input
              type={key === 'price' || key === 'rating' || key === 'guests' || key === 'bedrooms' || key === 'bathrooms' ? 'number' : 'text'}
              id={key}
              name={key}
              placeholder={`Enter ${key}`}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="submit-button">Add Room</button>
      </form>
    </div>
  );
}

export default AddRoom;
