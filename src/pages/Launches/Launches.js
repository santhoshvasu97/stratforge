import axios from "axios";
import React, { useEffect, useState } from "react";
import LaunchCard from "./LaunchCard";
import "./Launches.css";

const Launches = () => {
  const [launches, setLaunches] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://api.spacexdata.com/v5/launches");
      setLaunches(result.data);
    };
    fetchData();
  }, []);

  const filteredLaunches = launches.filter((launch) =>
    launch.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="launches-container">
      <h1>SpaceX Launches</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button>Search</button>
      </div>
      <div className="launches-grid">
        {filteredLaunches.map((launch) => (
          <LaunchCard key={launch.id} launch={launch} />
        ))}
      </div>
    </div>
  );
};

export default Launches;
