import React, { useEffect, useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import '../styles/Home.css';

const Home = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')
      .then(res => res.json())
      .then(data => setProperties(data))
      .catch(err => console.error('Error fetching properties:', err));
  }, []);

  return (
    <div className="home-container">
      <h1 className="home-title">Available Properties</h1>
      <div className="property-grid">
        {properties.map((prop) => (
          <PropertyCard key={prop.id} property={{
            ...prop,
            image: process.env.PUBLIC_URL + prop.image_url  // build local image path
          }} />
        ))}
      </div>
    </div>
  );
};

export default Home;
