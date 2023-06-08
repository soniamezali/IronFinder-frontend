import React, { useState } from "react";
import "../App.css";
import "../index.css";

function SearchOffers(props) {
  function handleSearch(event) {
    const searchValue = event.target.value;
    props.setSearch(searchValue);
  }

  return (
    <>
      <div className="search-product">
        <label className="search-product-title"> Search your job: </label>
        <br></br>

        <input
          placeholder="Enter your search..."
          value={props.search}
          type="search"
          onChange={handleSearch}
        />
      </div>
    </>
  );
}

export default SearchOffers;
