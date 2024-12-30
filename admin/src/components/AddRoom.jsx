import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

function AddRoom() {
  const [formData, setFormData] = useState({
    image: '',
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/rooms/add-room', formData);
      alert('Room added successfully!');
    } catch (error) {
      alert('Error adding room');
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Add Room</h2>
      <form onSubmit={handleSubmit} className="form">
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={formData[key]}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Add Room</button>
      </form>
    </div>
  );
}

export default AddRoom;
