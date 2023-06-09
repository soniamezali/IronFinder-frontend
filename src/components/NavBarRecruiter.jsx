import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";
import "../App.css";
import "../index.css";

function NavbarRecruiterPage() {
  return (
    <>
      <nav>
        <div className="layout-banner">
          <Link to="/recruiter-homepage">
            <img className="home-logo" src="/img/accueil.png"></img>
          </Link>
          <Link to="/" className="title-banner">
            <h1 href="/">IronFinder</h1>
          </Link>
          <Link to="/recruiter/create-new-offer">
            <p className="create-offer">Create An Offer</p>
          </Link>

          {/* <Link to="/Log-Out">
            <p className="log-out">LOG OUT</p>
          </Link> */}

          <LogOutButton />
          <Link to="/recruiter/profile">
            <p className="my-profile-link">My Profile</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarRecruiterPage;
