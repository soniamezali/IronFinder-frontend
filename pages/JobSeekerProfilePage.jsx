import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarJobSeeker from "../components/NavBarJobSeeker";
import Footer from "../components/footer";
import axios from "axios";

function JobSeekerProfilePage() {
  const [jobSeekerData, setJobSeekerData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedJobOffers, setSavedJobOffers] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoProfile: "",
    phone: "",
    city: "",
    linkedInProfile: "",
    bio: "",
  });

  useEffect(() => {
    // get infos from backend
    axios
      .get("http://localhost:5173/job-seeker/:id")
      .then((response) => {
        setJobSeekerData(response.data);
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: "",
          phone: response.data.phone,
          city: response.data.city,
          linkedInProfile: response.data.linkedInProfile,
          bio: response.data.bio,
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
    axios
      .patch("http://localhost:5173/job-seeker/:id", formData)
      .then((response) => {
        setIsEditing(false);
        // Mettre à jour les données du recruteur affichées dans le formulaire
        setJobSeekerData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // get the job offers that the jobseeker saved for later from the backend
    axios
      .get("http://localhost:5173/jobseeker/:id/saved-joboffers")
      .then((response) => {
        setSavedJobOffers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div>
        <NavBarJobSeeker />
      </div>
      <div>
        <h2> Your Profile</h2>
        {jobSeekerData && (
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
                <span>{jobSeekerData.firstName}</span>
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
                <span>{jobSeekerData.lastName}</span>
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
                <span>{jobSeekerData.email}</span>
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
                <span>{jobSeekerData.photoProfile}</span>
              )}
            </label>
            <label>
              phone:
              {isEditing ? (
                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{jobSeekerData.phone}</span>
              )}
            </label>
            <label>
              city:
              {isEditing ? (
                <input
                  type="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{jobSeekerData.city}</span>
              )}
            </label>
            <label>
              linkedInProfile:
              {isEditing ? (
                <input
                  type="linkedInProfile"
                  name="linkedInProfile"
                  value={formData.linkedInProfile}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{jobSeekerData.linkedInProfile}</span>
              )}
            </label>
            <label>
              bio:
              {isEditing ? (
                <input
                  type="bio"
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              ) : (
                <span>{jobSeekerData.bio}</span>
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
      <div>
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
      </div>

      <Footer />
    </>
  );
}

export default JobSeekerProfilePage;
