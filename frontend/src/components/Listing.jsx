import React, { useState, useEffect } from "react";
import axios from "axios";
import ListingCards from "./Listingcard";
import '../assets/css/listing.css';
import { useNavigate } from "react-router-dom";

const Listing = ({ location, activeCategory }) => {
  const [rooms, setRooms] = useState([]); 
  const [filteredRooms, setFilteredRooms] = useState([]); 
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

  useEffect(() => {
    let updatedRooms = [...rooms];

    
    if (activeCategory) {
      updatedRooms = updatedRooms.filter(
        (room) => room.propertyType.toLowerCase() === activeCategory.toLowerCase()
      );
    }

  
    if (location) {
      updatedRooms = updatedRooms.filter(
        (room) => room.location.toLowerCase() === location.toLowerCase()
      );
    }

    setFilteredRooms(updatedRooms);
  }, [rooms, activeCategory, location]); 

  const handleBookClick = (listing) => {
    navigate('/booking', { state: { listing } }); 
  };

  return (
    <div>
      <div className="listings-container">
       
        {filteredRooms.length > 0 ? (
          filteredRooms.map((listing) => (
            <ListingCards
              key={listing.id || listing._id}
              image={`http://localhost:3000${listing.image}`} 
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
          ))
        ) : (
          <p>No listings found for the selected criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Listing;
