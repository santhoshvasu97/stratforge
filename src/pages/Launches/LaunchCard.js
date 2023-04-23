import React from "react";

const LaunchCard = ({ launch }) => {
  return (
    <div className="launch-card">
      <img src={launch.links.patch.small} alt={launch.name} />
      <h3>{launch.name}</h3>
      <p>{launch.details}</p>
    </div>
  );
};

export default LaunchCard;
