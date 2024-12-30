import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthStore } from '../store/useAuthStore';
import '../assets/css/Account.css';

const Account = () => {
  const user = useAuthStore();
  const client = user.user;
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { username, email, _id: userId } = user.user || {};

  useEffect(() => {
    const fetchUserBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/booking/user-bookings/${userId}`);
        setBookings(response.data.bookings);
      } catch (err) {
        setError('Failed to fetch your bookings. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchUserBookings();
    }
  }, [userId]);

  return (
    <div className="account-container">
      <nav className="navbar sticky-navbar">
        <h1>Welcome, {username}</h1>
        <p>{email}</p>
      </nav>

      <div className="content">
        <h2>Your Bookings</h2>
        {loading ? (
          <div className="loading">Loading your bookings...</div>
        ) : error ? (
          <div className="error">{error}</div>
        ) : bookings.length === 0 ? (
          <p>You have no bookings yet.</p>
        ) : (
          <table className="bookings-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Room</th>
                <th>Location</th>
                <th>Check-In</th>
                <th>Check-Out</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={booking._id}>
                  <td>{index + 1}</td>
                  <td>{booking.roomId?.title || 'N/A'}</td>
                  <td>{booking.roomId?.location || 'N/A'}</td>
                  <td>{new Date(booking.checkIn).toLocaleDateString()}</td>
                  <td>{new Date(booking.checkOut).toLocaleDateString()}</td>
                  <td>${booking.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Account;
