import React from "react";
import { Link } from "react-router-dom";
import NavbarJobSeeker from "../components/navBarJobSeeker";
import JobCard from "../components/jobCard";
import Footer from "../components/footer";
import "../App.css";
import "../index.css";
// import SearchOffers from "../components/SearchOffers";
// import SearchByLocation from "../components/SearchByLocation";
// import SearchByContract from "../components/SearchByContract";

function JobSeekerHomePage() {
  return (
    <>
      <div>
        <div>
          <NavbarJobSeeker />
        </div>

        <div id="job-cards">
          <JobCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default JobSeekerHomePage;
