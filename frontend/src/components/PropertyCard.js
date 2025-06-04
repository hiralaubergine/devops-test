import React from 'react';
import '../styles/PropertyCard.css';

const PropertyCard = ({ property }) => {
    const { image, title, price } = property;
  
    return (
      <div className="property-card">
        <img src={image} alt={title} />
        <div className="property-details">
          <h3>{title}</h3>
          <p className="property-details .price">{price}</p>
        </div>
      </div>
    );
  };
  


export default PropertyCard;
