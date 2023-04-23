import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Rockets.css';

const Rockets = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchRockets = async () => {
      const response = await axios.get('https://api.spacexdata.com/v4/rockets');
      setRockets(response.data);
    };

    fetchRockets();
  }, []);

  return (
    <div className="rockets-container">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.flickr_images[0]} alt={rocket.name} className="rocket-img" />
          <h2 className="rocket-name">{rocket.name}</h2>
          <p className="rocket-description">{rocket.description}</p>
          <a href={`/rockets/${rocket.id}`} className="rocket-link">Learn More</a>
        </div>
      ))}
    </div>
  );
};

export default Rockets;
