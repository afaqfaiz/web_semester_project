import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../admin-css/adminBooking.css';
import Navbar from './Navbar';
const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/booking/all-bookings');
        setBookings(response.data.bookings);
      } catch (err) {
        setError('Failed to fetch bookings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return <div className="loading">Loading bookings...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="admin-bookings-container">
      <Navbar/>
      <h1>All Bookings</h1>
      {bookings.length === 0 ? (
        <p>No bookings available.</p>
      ) : (
        <table className="bookings-table">
          <thead>
            <tr>
              <th>#</th>
              <th>User</th>
              <th>Email</th>
              <th>Room</th>
              <th>Location</th>
              <th>Check-In</th>
              <th>Check-Out</th>
              <th>Total Price</th>
              <th>Booked At</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={booking._id}>
                <td>{index + 1}</td>
                <td>{booking.userId?.username || 'N/A'}</td>
                <td>{booking.userId?.email || 'N/A'}</td>
                <td>{booking.roomId?.title || 'N/A'}</td>
                <td>{booking.roomId?.location || 'N/A'}</td>
                <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
                <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
                <td>${booking.totalPrice}</td>
                <td>{new Date(booking.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminBookings;
