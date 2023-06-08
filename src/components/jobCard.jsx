import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchOffers from "./SearchOffers";
import SearchByLocation from "./SearchByLocation";
import SearchByContract from "./SearchByContract";
import { useContext } from "react";
import { AuthContext } from "./../context/authContext";

function JobCard() {
  // State variables
  const [jobOffers, setJobOffers] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [contractType, setContractType] = useState("");
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  const isJobSeeker = true;

  useEffect(() => {
    // Fetch job offers from the API
    axios
      .get("http://localhost:5005/job-offer/")
      .then((response) => {
        setJobOffers(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const getJobDetailPageLink = (jobOffer) => {
    // Determine the appropriate job detail page link based on user type
    if (isJobSeeker) {
      return `/job-seeker/detail-offer/${jobOffer._id}`;
    } else {
      return `/recruiter/detail-offer/${jobOffer._id}`;
    }
  };

  const filteredJobOffers = jobOffers.filter((jobOffer) => {
    // Filter job offers based on title and location
    const titleMatch = jobOffer.jobTitle
      .toLowerCase()
      .includes(search.toLowerCase());

    const locationMatch = jobOffer.jobLocation
      .toLowerCase()
      .includes(location.toLowerCase());

    const contractMatch = jobOffer.contractType
      .toLowerCase()
      .includes(contractType.toLowerCase());

    return titleMatch && locationMatch && contractMatch;
  });

  return (
    <>
      <div className="search-bars">
        {/* Search by job title */}
        <SearchOffers search={search} setSearch={setSearch} />
        {/* Search by location */}
        <SearchByLocation jobLocation={location} setLocation={setLocation} />
        {/* Search by contract */}
        <SearchByContract
          contractType={contractType}
          setContractType={setContractType}
        />
      </div>

      <div className="job-container">
        {/* Display the filtered job offers */}
        {filteredJobOffers.map((jobOffer) => (
          <div key={jobOffer._id}>
            <h3>{jobOffer.companyPhoto}</h3>
            <p>{jobOffer.companyLogo}</p>
            <p>{jobOffer.companyName}</p>
            <p className="job-offer-title">
              {/* Link to the appropriate job detail page */}
              {isLoggedIn && (
                <Link to={getJobDetailPageLink(jobOffer)}>
                  {jobOffer.jobTitle}
                </Link>
              )}
              {!isLoggedIn && <Link to={"/log-in"}>{jobOffer.jobTitle}</Link>}
            </p>
            <p>{jobOffer.jobLocation}</p>
            <p>{jobOffer.contractType}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default JobCard;
