import React from "react";
import { Link } from "react-router-dom";
import NavbarRecruiter from "../components/NavBarRecruiter";
import JobCard from "../components/JobCard";
import Footer from "../components/footer";
import "./MainHomePage.css";

function RecruiterHomePage() {
  return (
    <>
      <div>
        <div>
          <NavbarRecruiter />
        </div>
        <div id="job-cards">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default RecruiterHomePage;
