import React from "react";
import { Link } from "react-router-dom";
import NavBarLogOut from "../components/NavBarLogOut";
import JobCard from "../components/JobCard";
import Footer from "../components/footer";
import "./MainHomePage.css";

function MainHomepage() {
  return (
    <>
      <div>
        <div>
          <NavBarLogOut />
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

export default MainHomepage;
