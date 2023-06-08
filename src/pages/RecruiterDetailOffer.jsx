import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import NavBarRecruiter from "../components/NavBarRecruiter";
import Footer from "../components/footer";

import service from "../service/api";

function RecruiterDetailOffer() {
  const dialog = useRef();
  const { jobOfferId } = useParams();
  const [oneJobOffer, setOneJobOffer] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    jobTitle: "",
    jobLocation: "",
    contractType: "",
    jobDescription: "",
    companyLogo: "",
    companyName: "",
  });

  useEffect(() => {
    // Fetch the job offer details from the API using the job offer ID
    service.get(`/job-offer/${jobOfferId}`).then((response) => {
      setOneJobOffer(response.data);
      setFormData({
        jobTitle: response.data.jobTitle,
        jobLocation: response.data.jobLocation,
        contractType: response.data.contractType,
        jobDescription: response.data.jobDescription,
        companyLogo: response.data.companyLogo,
        companyName: response.data.companyName,
      });
    });
  }, [jobOfferId]);

  const handleEdit = () => {
    //  editing mode
    setIsEditing(true);
  };

  const handleSave = (event) => {
    // Send a patch request to the API to update the job offer
    event.preventDefault();
    console.log(oneJobOffer);
    service
      .patch(`/job-offer/${oneJobOffer._id}`, formData)
      .then((response) => {
        setOneJobOffer(response.data);
        setIsEditing(false); // Disable the editing mode
        //dialog.current.open(); // Open the success dialog
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDelete = () => {
    // Send a DELETE request to the API to delete the job offer
    service
      .delete(`/job-offer/${oneJobOffer._id}`)
      .then(() => {
        window.location.href = "/recruiter-homepage"; // Redirect to the recruiter homepage
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (!oneJobOffer) return <div>Loading job offer...</div>;

  return (
    <>
      <div>
        <NavBarRecruiter />
      </div>
      <div>
        <h2>Job Offer Details</h2>
        <div className="job-offer-details">
          <img src={oneJobOffer.companyLogo} alt={oneJobOffer.jobTitle} />
          <h3>{oneJobOffer.companyName}</h3>
          <h2>{oneJobOffer.jobTitle}</h2>
          <p>
            <span>Contract Type : </span>
            <span className="details">{oneJobOffer.contractType}</span>
          </p>
          <p>
            Location :{" "}
            <span className="details">{oneJobOffer.jobLocation}</span>{" "}
          </p>
          <p>
            Description :{" "}
            <span className="details">{oneJobOffer.jobDescription}</span>
          </p>
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
              <Link to="/recruiter-homepage">Go to profile page!</Link>
            </button>
          </dialog>
        </div>

        <div>
          {isEditing ? (
            <>
              <h2>Please fill out form below</h2>
              <form onSubmit={handleSave}>
                <div>
                  <input
                    placeholder="Name of your company"
                    type="text"
                    value={formData.companyName}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        companyName: event.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="Job Title"
                    type="text"
                    value={formData.jobTitle}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        jobTitle: event.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="City"
                    type="text"
                    value={formData.jobLocation}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        jobLocation: event.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="Contract Type"
                    type="text"
                    value={formData.contractType}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        contractType: event.target.value,
                      })
                    }
                  />
                  <input
                    placeholder="Brief description of Job"
                    type="text"
                    value={formData.jobDescription}
                    onChange={(event) =>
                      setFormData({
                        ...formData,
                        jobDescription: event.target.value,
                      })
                    }
                  />
                  <button className="edit-button" onClick={handleSave}>
                    Save
                  </button>{" "}
                </div>
              </form>
            </>
          ) : (
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
          )}
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RecruiterDetailOffer;
