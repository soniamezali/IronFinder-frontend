import React from "react";
import "../App.css";
import "../index.css";

function SearchByLocation(props) {
  function handleSearch(event) {
    const locationValue = event.target.value;
    props.setLocation(locationValue);
  }

  return (
    <>
      <div className="search-location">
        <label className="search-location-title">Search by Location:</label>
        <br />
        <input
          placeholder="Enter location..."
          value={props.jobLocation} // Utilisation de props.jobLocation
          type="text"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchByLocation;
