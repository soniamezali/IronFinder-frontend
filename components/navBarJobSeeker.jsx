import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

function NavbarJobSeekerPage() {
  return (
    <>
      <nav>
        <div className="layout-banner">
          <Link to="/job-seeker-homepage">
            <img className="home-logo" src="./../public/img/accueil.png"></img>
          </Link>
          <Link to="/">
            <h1 className="title-banner" href="/">
              IronFinder
            </h1>
          </Link>
          {/* <Link to="/Log-Out">
            <p className="log-out">LOG OUT</p>
          </Link> */}
          <LogOutButton />
          <Link to="/job-seeker-profile">
            <p className="my-profile-link">My Profile</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarJobSeekerPage;
