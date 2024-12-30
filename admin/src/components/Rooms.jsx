import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rooms/list-rooms');
        setRooms(response.data);
      } catch (error) {
        alert('Error fetching rooms');
      }
    };
    fetchRooms();
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Rooms</h2>
      <button onClick={() => navigate('/add-room')}>Add Room</button>
      <ul>
        {rooms.map((room) => (
          <li key={room._id}>
            <h3>{room.title}</h3>
            <p>{room.location}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rooms;
