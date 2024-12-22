import React from "react";
import ListingCards from  "./Listingcard";
import './listing.css'
import hotel from '../assets/hotel.jpg'
const listingsData = [
    {
        id: 1,
        image: hotel, // Replace with actual image URLs
        title: 'Cozy Cabin in the Woods',
        location: 'Woodland, USA',
        propertyType: 'Entire home',
        categry: 'Cabin',
        guests: 4,
        bedrooms: 2,
        bathrooms: 1,
        price: 120,
        rating: 4.8
    },
    {
        id: 2,
        image: hotel,
        title: 'Modern Apartment in the City Center',
        location: 'City, USA',
        propertyType: 'Private room',
        categry: 'Top Cities',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 90,
        rating: 4.7
    },
    {
        id: 3,
        image: hotel,
        title: 'Modern Apartment in the City Center',
        location: 'City, USA',
        propertyType: 'Private room',
        categry: 'Countryside',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 90,
        rating: 4.7
    },
    {
        id: 4,
        image: hotel,
        title: 'Modern Apartment in the City Center',
        location: 'City, USA',
        propertyType: 'Private room',
        categry: 'Island',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 90,
        rating: 4.7
    },
    {
        id: 5,
        image: hotel,
        title: 'Modern Apartment in the City Center',
        location: 'City, USA',
        propertyType: 'Private room',
        categry: 'Arctic',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 90,
        rating: 4.7
    },
    {
        id: 6,
        image: hotel,
        title: 'Modern Apartment in the City Center',
        location: 'City, USA',
        propertyType: 'Private room',
        categry: 'Beachfront',
        guests: 2,
        bedrooms: 1,
        bathrooms: 1,
        price: 90,
        rating: 4.7
    },
    // Add more listings as needed
];


const Listing=({location})=>{
    console.log("in listing", location);

    return (
        <div className="listings-container">
            {listingsData.map((listing) =>(
            <ListingCards 
                key={listing.id}
                image={listing.image}
                title={listing.title}
                location={listing.location}
                propertyType={listing.propertyType}
                guests={listing.guests}
                bedrooms={listing.bedrooms}
                bathrooms={listing.bathrooms}
                price={listing.price}
                rating={listing.rating}
                />

            ))}

        </div>

    )
};
export default Listing;