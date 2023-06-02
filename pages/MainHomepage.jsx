import React from "react";
import { Link } from "react-router-dom";
import NavbarLogOut from "../components/NavbarLogOut";
import JobCard from "../components/JobCard";
import Footer from "../components/footer";

function MainHomepage() {
  return (
    <>
      <div>
        <div>
          <NavbarLogOut />
        </div>
        <div>
          <JobCard />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MainHomepage;
