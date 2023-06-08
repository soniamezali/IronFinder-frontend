import React, { useEffect, useState, useRef, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import NavbarJobSeeker from "./../components/navBarJobSeeker";
import Footer from "./../components/footer";
import service from "../service/api";
import { AuthContext } from "./../context/authContext";
import "../App.css";
import "../index.css";

function JobSeekerDetailOffer() {
  const dialog = useRef();
  const { jobOfferId } = useParams();
  const [oneJobOffer, setOneJobOffer] = useState(null);
  const [jobOffers, setJobOffers] = useState([]); // State for job offers
  const { jobOffer } = useContext(AuthContext); // Accessing jobOffer value from AuthContext

  useEffect(() => {
    // Fetch the job offer details from the API
    service.get(`/job-offer/${jobOfferId}`).then((response) => {
      setOneJobOffer(response.data);
    });
  }, [jobOfferId]);

  if (!oneJobOffer) return <div>Loading job offer...</div>;

  const handleAddToFavourite = (oneJobOffer) => {
    setJobOffers([...jobOffers, oneJobOffer]); // Add the selected job offer to the jobOffers state
    service.post(`/favorite/${jobOfferId}`);
  };

  const addToFavourite = () => {
    handleAddToFavourite(oneJobOffer);
    dialog.current.showModal();
  };

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
          <h3 style={{ fontSize: "2.5rem" }}>Added to favourite!</h3>
          <button className="go-to-profile-button">
            <Link to="/job-seeker/profile"></Link>
          </button>
        </dialog>
      </div>

      <div>
        <h2>Job Offer Details</h2>
        <div className="job-offer-details">
          <img src={oneJobOffer.companyLogo} alt={oneJobOffer.jobTitle} />
          <h3>{oneJobOffer.companyName}</h3>
          <h2>{oneJobOffer.jobTitle}</h2>
          <p>
            <span>Contract Type: </span>
            <span className="details">{oneJobOffer.contractType}</span>
          </p>
          <p>
            Location: <span className="details">{oneJobOffer.jobLocation}</span>{" "}
          </p>
          <p>
            Description:{" "}
            <span className="details">{oneJobOffer.jobDescription}</span>
          </p>
        </div>
        <button
          className="addtofavourite-button-details"
          onClick={addToFavourite}
        >
          Add To Favourite
        </button>
      </div>

      <Footer />
    </>
  );
}

export default JobSeekerDetailOffer;
