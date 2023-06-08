import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBarJobSeeker from "../components/navBarJobSeeker";
import Footer from "../components/footer";
// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./../context/authContext";
import service from "../service/api";

function JobSeekerProfilePage() {
  const [jobSeekerData, setJobSeekerData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [savedJobOffers, setSavedJobOffers] = useState([]);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
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
  const { user } = useContext(AuthContext);
  console.log(user);

  useEffect(() => {
    // get infos from backend

    service
      .get(`/job-seeker/${user._id}`)
      .then((response) => {
        console.log(response);
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
    service
      .patch(`/job-seeker/${user._id}`, formData)
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
    service
      .get(`/favorite`)
      .then((response) => {
        console.log("this is the response", response);
        setSavedJobOffers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (jobOfferId) => {
    service
      .delete(`/favorite/${jobOfferId}`)
      .then((response) => {
        console.log(response);
        setSavedJobOffers(
          savedJobOffers.filter(
            (jobOffer) => jobOffer.jobOffer._id !== jobOfferId
          )
        );
        setShowDeleteModal(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                <span>****</span>
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
                <img src={jobSeekerData.photoProfile}></img>
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
      <div className="favourite-page">
        <h2>My Favourites </h2>
        <table className="favourite-table">
          <thead>
            <tr>
              <th> Company </th>
              <th> Job Title</th>
              <th> Contract Type</th>
              <th> Location</th>
              <th> Apply</th>
              <th> Delete </th>
            </tr>
          </thead>
          <tbody>
            {savedJobOffers.map((jobOffer) => (
              <tr key={jobOffer.id} className="joboffer">
                <td className="img">
                  <span>
                    <img src={jobOffer.jobOffer.companyLogo}></img>
                  </span>
                </td>
                <td className="title">
                  <span>{jobOffer.jobOffer.jobTitle}</span>
                </td>
                <td className="contract-type">
                  <span>{jobOffer.jobOffer.contractType}</span>
                </td>
                <td className="location">
                  <span>{jobOffer.jobOffer.jobLocation}</span>
                </td>

                <td className="apply-button">
                  <img
                    className="apply-button"
                    src="/img/apply.jpeg"
                    onClick={() => setShowApplyModal(true)}
                  />
                </td>
                <td className="delete-button">
                  <img
                    className="remove-button"
                    src="/img/trash1.jpeg"
                    onClick={() => handleDelete(jobOffer.jobOffer._id)}
                  ></img>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showApplyModal && (
        <div className="modal">
          <div className="modal-content">
            <p>You applied to this offer.</p>
            <button onClick={() => setShowApplyModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showDeleteModal && (
        <div className="modal">
          <div className="modal-content">
            <p>You deleted the offer from favorites.</p>
            <button onClick={() => setShowDeleteModal(false)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default JobSeekerProfilePage;
