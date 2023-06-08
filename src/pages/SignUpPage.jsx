import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarLogOut from "../components/NavBarLogOut";
import service from "../service/api";
import "../App.css";
import "../index.css";

function SignUpPage() {
  const navigateTo = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [linkedInProfile, setLinkedInProfile] = useState("");
  const [bio, setBio] = useState("");

  const [recruitBox, setRecruitBox] = useState(false);
  const [jobSeekerBox, setJobSeekerBox] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const recruiterObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      city: city,
      linkedInProfile: linkedInProfile,
      isJobSeeker: jobSeekerBox,
    };

    service
      .post("/auth/signup", recruiterObject)
      .then(() => {
        navigateTo("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleRecruit = () => {
    setRecruitBox(true);
    setJobSeekerBox(false);
    //ironFinderBeUrl += "recruiter";
  };

  const handleJobSeeker = () => {
    setRecruitBox(false);
    setJobSeekerBox(true);
    //ironFinderBeUrl += "auth/signup";
  };

  return (
    <div>
      <div>
        <NavbarLogOut />
      </div>
      <div className="recruiter-form"></div>
      <div className="recruiter-body">
        <h2>Are you a recruiter or a Job Seeker?</h2>
        <label>
          {" "}
          Recruiter
          <input
            type="checkbox"
            checked={recruitBox}
            onChange={handleRecruit}
            name="recruiter"
            value="recruiter"
          />
        </label>{" "}
        <label>
          Job Seeker
          <input
            type="checkbox"
            checked={jobSeekerBox}
            onChange={handleJobSeeker}
            name="jobSeeker"
            value="jobSeeker"
          />
        </label>
        {recruitBox && (
          <form id="container1" onSubmit={handleSubmit}>
            <h2>Create a Recruiter Account</h2>
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
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        )}
        {jobSeekerBox && (
          <form id="container1" onSubmit={handleSubmit}>
            <h2>Create a Job Seeker Account</h2>
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
                <input
                  placeholder="phone"
                  className="field phone"
                  type="text"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <input
                  placeholder="city"
                  className="field city"
                  type="text"
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
                <input
                  placeholder="linkedIn URL"
                  className="field linkedInProfile"
                  type="text"
                  value={linkedInProfile}
                  onChange={(event) => setLinkedInProfile(event.target.value)}
                />
                <input
                  placeholder="bio"
                  className="field bio"
                  type="text"
                  value={bio}
                  onChange={(event) => setBio(event.target.value)}
                />
                <button type="submit">Send</button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default SignUpPage;
