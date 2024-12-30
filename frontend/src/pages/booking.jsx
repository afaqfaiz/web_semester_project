import React, { useState } from "react";
import "../assets/css/booking.css";
import { useNavigate,useLocation } from "react-router-dom";
import {useAuthStore} from '../store/useAuthStore' 
import axios from 'axios';

const BookingPage = () => {
  const user =useAuthStore();
  const userid= user.user._id;
  console.log(userid);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  const {listing}= location.state || {};
  if (!listing) {
    return <p>No listing data available.</p>;
  }
  const calculateTotalPrice = () => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
      return nights > 0 ? nights * listing.price : 0;
    }
    return 0;
  };

  // const handleBooking = async () => {
  //   if (!checkIn || !checkOut) {
  //     setError("Please select valid check-in and check-out dates.");
  //     return;
  //   }
  //   if (new Date(checkIn) >= new Date(checkOut)) {
  //     setError("Check-out date must be after the check-in date.");
  //     return;
  //   }
  //   setError("");

  //   // Dummy API simulation
  //   const bookingDetails = {
  //     listingId: listing.id,
  //     checkIn,
  //     checkOut,
  //     totalPrice: calculateTotalPrice(),
  //   };

  //   console.log("Booking Details Submitted:", bookingDetails);
  //   // Simulate API success
  //   setBookingSuccess(true);
  //   setTimeout(() => {
  //     setBookingSuccess(false);
  //   }, 2000);
  // };
  const handleBooking = async () => {
    if (!checkIn || !checkOut) {
      setError("Please select valid check-in and check-out dates.");
      return;
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      setError("Check-out date must be after the check-in date.");
      return;
    }
    setError("");
  
    
    const bookingDetails = {
      userId: userid, 
      roomId: listing._id, 
      checkIn,
      checkOut,
      totalPrice: calculateTotalPrice(),
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/booking/book-room', bookingDetails);
      if (response.data.message === 'Booking successful!') {
        setBookingSuccess(true);
        setTimeout(() => {
          setBookingSuccess(false);
          navigate('/'); // Navigate back to the home page or another route
        }, 2000);
      }
    } catch (error) {
      setError('There was an error making the booking. Please try again.');
      console.error(error);
    }
  };
  

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={() => navigate(-1)}>
          &times;
        </button>
        <h2>Book Your Stay</h2>

        {bookingSuccess ? (
          <div className="success-message">Booking Confirmed!</div>
        ) : (
          <>
            <div className="property-summary">
              <h3>{listing.title}</h3>
              <p>{listing.location}</p>
              <p>{listing.propertyType}</p>
              <p>{listing.guests} guests · {listing.bedrooms} bedrooms · {listing.bathrooms} bathrooms</p>
              <p>${listing.price} / night</p>
            </div>

            <form>
              <label>
                Check-in Date:
                <input
                   className="date-input"
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                />
              </label>
              <label>
                Check-out Date:
                <input
                   className="date-input"
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                />
              </label>
            </form>

            <div className="total-price">
              Total Price: ${calculateTotalPrice() || "0"}
            </div>
            {error && <p className="error">{error}</p>}

            <button className="book-button" onClick={handleBooking}>
              Confirm Booking
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingPage;
