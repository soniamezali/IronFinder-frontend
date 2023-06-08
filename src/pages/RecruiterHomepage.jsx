import React from "react";
import { Link } from "react-router-dom";
import NavbarRecruiter from "../components/NavBarRecruiter";
import JobCard from "../components/jobCard";
import Footer from "../components/footer";
import "./MainHomePage.css";
// import SearchOffers from "../components/SearchOffers";
// import SearchByLocation from "../components/SearchByLocation";
// import SearchByContract from "../components/SearchByContract";

function RecruiterHomePage() {
  return (
    <>
      <div>
        <div>
          <NavbarRecruiter />
        </div>

        <div id="job-cards">
          <JobCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecruiterHomePage;
