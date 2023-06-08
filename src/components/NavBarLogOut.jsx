import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavbarLogOut() {
  return (
    <>
      <nav>
        <div className="layout-banner">
          <Link to="/">
            <img className="home-logo" src="/img/accueil.png"></img>
          </Link>
          <Link to="/" className="title-banner">
            <h1 href="/">IronFinder</h1>
          </Link>
          <Link to="/Log-In">
            <p className="log-in">LOG IN</p>
          </Link>
          <Link to="/sign-up-page">
            <p className="sign-up">SIGN UP</p>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default NavbarLogOut;
