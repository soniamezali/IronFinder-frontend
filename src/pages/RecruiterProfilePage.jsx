import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarRecruiter from "../components/NavBarRecruiter";
import Footer from "../components/footer";
// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import service from "../service/api";

function RecruiterProfilePage() {
  const [recruiterData, setRecuiterData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedJobOffers, setSavedJobOffers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoProfile: "",
  });

  const { user } = useContext(AuthContext);
  console.log(user);
  console.log("user id is :", user._id);

  // if (!user) {
  //   return <div>wait...</div>;
  // }

  useEffect(() => {
    // get infos from backend
    service
      .get(`/recruiter/${user._id}`)
      .then((response) => {
        console.log(response);
        setRecuiterData(response.data);
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //get the changes when recruiter modified infos
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //get the form on "edit"
  const handleEditClick = () => {
    setIsEditing(true);
  };

  //give the new infos to the backend and the edit mode is false now
  const handleSaveClick = () => {
    service
      .patch(`/recruiter/${user._id}`, formData)
      .then((response) => {
        setIsEditing(false);
        // Mettre à jour les données du recruteur affichées dans le formulaire
        setRecuiterData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // useEffect(() => {
  //   // get the job offers that the jobseeker saved for later from the backend
  //   axios
  //     .get("http://localhost:5005/recruiter/:id/saved-joboffers")
  //     .then((response) => {
  //       setSavedJobOffers(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <div>
        <NavBarRecruiter />
      </div>
      <div>
        <h2> Your Profile</h2>

        {recruiterData && (
          <form>
            <label>
              firstName:
              {isEditing ? (
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{recruiterData.firstName}</span>
              )}
            </label>
            <label>
              lastName:
              {isEditing ? (
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{recruiterData.lastName}</span>
              )}
            </label>
            <label>
              Email:
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{recruiterData.email}</span>
              )}
            </label>
            <label>
              password:
              {isEditing ? (
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              ) : (
                <span>********</span>
              )}
            </label>
            <label>
              photoProfile:
              {isEditing ? (
                <input
                  type="photoProfile"
                  name="photoProfile"
                  value={formData.photoProfile}
                  onChange={handleInputChange}
                />
              ) : (
                <img src={recruiterData.photoProfile}></img>
              )}
            </label>

            {isEditing ? (
              <button type="button" onClick={handleSaveClick}>
                Save Changes
              </button>
            ) : (
              <button type="button" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </form>
        )}
      </div>
      {/* <div>
        <h2>My Favourites </h2>
        {savedJobOffers.map((jobOffer) => (
          <div key={jobOffer._id}>
            <h3>{jobOffer.companyPhoto}</h3>
            <p>{jobOffer.companyLogo}</p>
            <p>{jobOffer.companyName}</p>
            <p className="job-offer-title">
              <Link to="/job-seeker/detail">{jobOffer.jobTitle}</Link>
            </p>
            <p>{jobOffer.jobLocation}</p>
            <p>{jobOffer.contractType}</p>
          </div>
        ))}
      </div> */}

      <Footer />
    </>
  );
}

export default RecruiterProfilePage;
