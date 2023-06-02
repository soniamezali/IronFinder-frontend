import React from "react";
import { Link } from "react-router-dom";
import NavbarLogOut from "../components/NavbarLogOut";
import JobCard from "../components/JobCard";

function MainHomepage() {
  return (
    <>
      <nav>
        <div>
          <NavbarLogOut />
        </div>
        <div>
          <JobCard />
        </div>
      </nav>
    </>
  );
}

export default MainHomepage;
