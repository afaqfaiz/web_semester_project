import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
import '../admin-css/Room.css'
// import './Rooms.css'; // Uncomment and customize the CSS as needed

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/rooms/list-rooms');
        setRooms(response.data);
      } catch (error) {
        alert('Error fetching rooms');
      }
    };
    fetchRooms();
  }, []);

  return (
    <div className="rooms-container">
      <Navbar />
      <div className="header">
        <h2 className="page-title">Rooms</h2>
        <button onClick={() => navigate('/add-room')} className="add-room-button">
          Add Room
        </button>
      </div>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room._id} className="room-card">
            <img
              src={`http://localhost:3000${room.image}`}
              alt={room.title}
              className="room-image"
            />
            <div className="room-details">
              <h3 className="room-title">{room.title}</h3>
              <p className="room-location"><strong>Location:</strong> {room.location}</p>
              <p className="room-price"><strong>Price:</strong> ${room.price}/night</p>
              <p className="room-guests"><strong>Guests:</strong> {room.guests}</p>
              <p className="room-bedrooms"><strong>Bedrooms:</strong> {room.bedrooms}</p>
              <p className="room-bathrooms"><strong>Bathrooms:</strong> {room.bathrooms}</p>
              <p className="room-rating"><strong>Rating:</strong> {room.rating}⭐</p>
              <p className="room-description"><strong>Description:</strong> {room.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
