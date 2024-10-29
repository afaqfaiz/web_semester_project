import React from "react";


const ListingCards=({image,title,propertytype,guests,bedrooms,bathrooms,price,rating})=>{


    return(
        <div>
            <img src={image} alt={title}className="image-title" />
            <div className="listing-info">
                <h3 className="listing-title">{title}</h3>
                <p className="listing-type">{propertytype}</p>
                <p className="listing-detail">{guests} guests . {bedrooms} bedrooms . {bathrooms} bathrooms</p>
                <p></p>

            </div>
        </div>

    )
}