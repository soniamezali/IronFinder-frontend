import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavbarRecruiterPage from "../components/NavBarRecruiter";
import Footer from "../components/footer";
import axios from "axios";

function RecruiterProfilePage() {
  const [recruiterData, setRecruiterData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photoProfile: "",
  });

  useEffect(() => {
    // get infos from backend
    axios
      .get("http://localhost:5005/recruiter/:id")
      .then((response) => {
        setRecruiterData(response.data);
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
    axios
      .patch("http://localhost:5173/", formData)
      .then((response) => {
        setIsEditing(false);
        // Mettre à jour les données du recruteur affichées dans le formulaire
        setRecruiterData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <div>
        <NavbarRecruiterPage />
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
                <span>{recruiterData.photoProfile}</span>
              )}
            </label>
            {isEditing ? (
              <button type="button" onClick={handleSaveClick}>
                Save
              </button>
            ) : (
              <button type="button" onClick={handleEditClick}>
                Edit
              </button>
            )}
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}

export default RecruiterProfilePage;
