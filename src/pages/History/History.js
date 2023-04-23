import axios from "axios";
import React, { useEffect, useState } from "react";
import "./History.css";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.spacexdata.com/v4/history")
      .then((response) => {
        setHistoryData(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSearch = (event) => {
    const keyword = event.target.value.toLowerCase();
    const filtered = historyData.filter((data) =>
      data.title.toLowerCase().includes(keyword)
    );
    setFilteredData(filtered);
  };

  return (
    <div className="history-container">
      <h1>SpaceX History</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="history-items">
        {filteredData.map((data) => (
          <div key={data.id} className="history-item">
            <img src={data.links.article} alt={data.title} />
            <h2>{data.title}</h2>
            <p>{data.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
