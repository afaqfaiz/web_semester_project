import React, { useState, useEffect } from "react";
import axios from "axios";
import ListingCards from "./Listingcard";
import '../assets/css/listing.css';
import { useNavigate } from "react-router-dom";

const Listing = ({ location, activeCategory }) => {
  const [rooms, setRooms] = useState([]); // State for storing rooms fetched from the API
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/rooms/list-rooms');
        setRooms(response.data); // Set rooms data from API
      } catch (error) {
        alert('Error fetching rooms');
      }
    };
    fetchRooms();
  }, []); // Run once when the component is mounted

  const handleBookClick = (listing) => {
    navigate('/booking', { state: { listing } }); // Navigate to booking page with the selected listing data
  };

  return (
    <div>
      <div className="listings-container">
        {/* Display rooms fetched from the API */}
        {rooms.map((listing) => (
          <ListingCards
            key={listing.id || listing._id} 
            image={`http://localhost:3000${listing.image}`} // Construct the full image URL
            title={listing.title}
            location={listing.location}
            propertyType={listing.propertyType}
            guests={listing.guests}
            bedrooms={listing.bedrooms}
            bathrooms={listing.bathrooms}
            price={listing.price}
            rating={listing.rating}
            description={listing.description}
            onBookClick={() => handleBookClick(listing)}
          />
        ))}
      </div>
    </div>
  );
};

export default Listing;
