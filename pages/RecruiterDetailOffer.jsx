import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";

import NavBarRecruiter from "../components/NavBarRecruiter";
import Footer from "../components/footer";
import axios from "axios";

function RecruiterDetailOffer() {
  return (
    <>
      <div>
        <NavBarRecruiter />
      </div>

      <div>
        <dialog ref={dialog} className="popup">
          <button
            className="close-button"
            onClick={() => dialog.current.close()}
          >
            X
          </button>
          <h3 style={{ fontSize: "2.5rem" }}>Successfully Edited!</h3>
          <button className="go-to-profile-button">
            <Link to="/recruiter-homepage">Go to profile page !</Link>
          </button>
        </dialog>
      </div>
      <div>
        <dialog ref={dialog} className="popup">
          <button
            className="close-button"
            onClick={() => dialog.current.close()}
          >
            X
          </button>
          <h3 style={{ fontSize: "2.5rem" }}>Job Offer Deleted!</h3>
          <button className="go-to-profile-button">
            <Link to="/recruiter-homepage"> Go to profile page !</Link>
          </button>
        </dialog>
      </div>

      <Footer />
    </>
  );
}

export default RecruiterDetailOffer;
