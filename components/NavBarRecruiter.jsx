import React from "react";
import { Link } from "react-router-dom";

function NavbarRecruiterPage() {
  return (
    <>
      <nav>
        <div className="layout-banner">
          <Link to="/recruiter-homepage">
            <img className="home-logo" src="./../public/img/accueil.png"></img>
          </Link>
          <Link to="/">
            <h1 className="title-banner" href="/">
              IronFinder
            </h1>
          </Link>
          <Link to="/Recruiter/create-new-offer">
            <p className="create-offer">Create An Offer</p>
          </Link>

          <Link to="/Log-Out">
            <p className="log-out">LOG OUT</p>
          </Link>
          <Link to="/Recruiter/Profile">
            <p className="my-profile-link">My Profile</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarRecruiterPage;
