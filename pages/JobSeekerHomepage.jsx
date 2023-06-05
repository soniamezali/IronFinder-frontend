import React from "react";
import { Link } from "react-router-dom";
import NavbarJobSeeker from "../components/NavBarJobSeeker";
import JobCard from "../components/JobCard";
import Footer from "../components/footer";
import "./MainHomePage.css";

function JobSeekerHomePage() {
  return (
    <>
      <div>
        <div>
          <NavbarJobSeeker />
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

export default JobSeekerHomePage;
