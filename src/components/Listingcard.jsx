import React from "react";
import './listingcards.css'

const ListingCards=({image,title,propertyType,guests,bedrooms,bathrooms,price,rating})=>{


    return(
        <div className="listing-card">
            <img src={image} alt={title}className="image-title" />
            <div className="listing-info">
                <h3 className="listing-title">{title}</h3>
                <p className="listing-type">{propertyType}</p>
                <p className="listing-detail">{guests} guests . {bedrooms} bedrooms . {bathrooms} bathrooms</p>
                <p className="listing-price">${price} /night</p>
                <p className="listing-rating">⭐{rating}</p>

            </div>
        </div>

    )
};

export default  ListingCards;
