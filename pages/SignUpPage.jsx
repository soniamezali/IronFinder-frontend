import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// This is where we place our URL to our backend.
import axios from "axios";
const ironFinderUrl = "https://ironfinder.onrender.com";

function signUpForm() {
  const navigateTo = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [photoProfile, setPhotoProfile] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [bio, setBio] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const recruiterObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      //   profilePhoto: profilePhoto,
    };

    //   const jobSeekerObject = {
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     password: password,
    //     profilePhoto: profilePhoto,
    //     phone: phone,
    //     city: city,
    //     linkedInProfile: linkedInProfile,
    //     bio: bio,
    //   };

    axios
      .post(ironFinderUrl, recruiterObject)
      .then((response) => {
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <div className="recruiter-form">
        <h2>Create a Recruiter Account</h2>
      </div>
      <div className="recruiter-body">
        <form id="container1" onSubmit={handleSubmit}>
          <div className="box-1">
            <h2>Please Fill out form below: </h2>
            <div>
              <input
                placeholder="Name"
                className="field name"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              <input
                placeholder="Last Name"
                className="field lastName"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              <input
                placeholder="email address"
                className="field email"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <input
                placeholder="password"
                className="field password"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div></div>
              {/* <input
                placeholder="paste in photo"
                className="field photo"
                type="text"
                value={photoProfile}
                onChange={(event) => setPhotoProfile(event.target.value)}
              /> */}
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default signUpForm;
