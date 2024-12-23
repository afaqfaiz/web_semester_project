import React, { useState } from "react";
import "../assets/css/booking.css";

const BookingPage = ({ property, onClose }) => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [error, setError] = useState("");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const calculateTotalPrice = () => {
    if (checkIn && checkOut) {
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);
      const nights = (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24);
      return nights > 0 ? nights * property.price : 0;
    }
    return 0;
  };

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

    // Dummy API simulation
    const bookingDetails = {
      propertyId: property.id,
      checkIn,
      checkOut,
      totalPrice: calculateTotalPrice(),
    };

    console.log("Booking Details Submitted:", bookingDetails);
    // Simulate API success
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      onClose(); // Close the popup on success
    }, 2000);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>Book Your Stay</h2>

        {bookingSuccess ? (
          <div className="success-message">Booking Confirmed!</div>
        ) : (
          <>
            <div className="property-summary">
              <h3>{property.title}</h3>
              <p>{property.location}</p>
              <p>{property.propertyType}</p>
              <p>{property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms</p>
              <p>${property.price} / night</p>
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
