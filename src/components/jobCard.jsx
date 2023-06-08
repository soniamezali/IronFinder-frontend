import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import SearchOffers from "./SearchOffers";
import SearchByLocation from "./SearchByLocation";
import SearchByContract from "./SearchByContract";
import { useContext } from "react";
import { AuthContext } from "./../context/authContext";
import service from "../service/api";

function JobCard() {
  // State variables
  const [jobOffers, setJobOffers] = useState([]);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [contractType, setContractType] = useState("");
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);
  const navigateTo = useNavigate();

  useEffect(() => {
    // Fetch job offers from the API
    if (user && !user.isJobSeeker) {
      service
        .get("/job-offer/")
        .then((response) => {
          setJobOffers(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("=======");
      service
        .get("/job-offer/homepage")
        .then((response) => {
          setJobOffers(response.data);
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const getJobDetailPageLink = (jo) => {
    // Determine the appropriate job detail page link based on user type
    if (user.isJobSeeker) {
      navigateTo(`/job-seeker/detail-offer/${jo._id}`);
    } else {
      console.log(jo);
      navigateTo(`/recruiter/detail-offer/${jo._id}`);
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
            <img src={jobOffer.companyPhoto}></img>
            <img src={jobOffer.companyLogo}></img>
            <p>{jobOffer.companyName}</p>
            <p className="job-offer-title">
              {/* Link to the appropriate job detail page */}
              {isLoggedIn && (
                <button onClick={() => getJobDetailPageLink(jobOffer)}>
                  {jobOffer.jobTitle}
                </button>
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
