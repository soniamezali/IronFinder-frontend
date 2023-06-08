import React, { useState } from "react";
import "../App.css";
import "../index.css";

function SearchByContract(props) {
  function handleSearch(event) {
    const contractValue = event.target.value;
    props.setContractType(contractValue);
  }

  return (
    <>
      <div className="search-by-contract-type">
        <label className="search-location-title">
          Search by contract type:
        </label>
        <br />
        <input
          placeholder="Enter CDI, CDD, Freelance"
          value={props.contractType} // Utilisation de props.jobLocation
          type="text"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchByContract;
