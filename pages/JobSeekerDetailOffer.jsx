import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import NavbarJobSeeker from "../components/NavBarJobSeeker";
import Footer from "../components/footer";
import axios from "axios";

function JobSeekerDetailOffer() {
  const dialog = useRef();
  const { id } = useParams();
  const [oneJobOffer, setOneJobOffer] = useState(null);

  useEffect(() => {
    axios.get().then((response) => {
      setOneJobOffer(response.data);
    });
  }, [id]);

  if (!oneJobOffer) return <div>Loading job offer...</div>;

  return (
    <>
      <div>
        <NavbarJobSeeker />
      </div>

      <div>
        <dialog ref={dialog} className="popup">
          <button
            className="close-button"
            onClick={() => dialog.current.close()}
          >
            X
          </button>
          <h3 style={{ fontSize: "2.5rem" }}>Successfully Applied!</h3>
          <button className="go-to-profile-button">
            <Link to="/job-seeker-homepage">Go to protile page !</Link>
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
          <h3 style={{ fontSize: "2.5rem" }}>Added to favourite!</h3>
          <button className="go-to-profile-button">
            <Link to="/job-seeker/profile"> Go to profile page !</Link>
          </button>
        </dialog>
      </div>

      <Footer />
    </>
  );
}

export default JobSeekerDetailOffer;
