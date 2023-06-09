import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./../components/footer";
// import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./../context/authContext";
import service from "../service/api";
import "../App.css";
import "../index.css";

function CreateOfferPage() {
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [contractType, setContractType] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const navigateTo = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    const createOffer = {
      companyName: companyName,
      jobTitle: jobTitle,
      jobLocation: jobLocation,
      contractType: contractType,
      jobDescription: jobDescription,
    };

    //     service
    //       .post(createOffer)
    //       .then((response) => {
    //         console.log(response);
    //         navigateTo("/");
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   }

    service
      .post("/job-offer", createOffer)
      .then((response) => {
        console.log(response);
        navigateTo("/recruiter-homepage");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="Create-offer-page">
        <h1>Please fill out form below</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              placeholder="Name of your company"
              type="text"
              value={companyName}
              onChange={(event) => setCompanyName(event.target.value)}
            />
            <input
              placeholder="Job Title"
              type="text"
              value={jobTitle}
              onChange={(event) => setJobTitle(event.target.value)}
            />
            <input
              placeholder="City"
              type="text"
              value={jobLocation}
              onChange={(event) => setJobLocation(event.target.value)}
            />
            <input
              placeholder="Contract Type"
              type="text"
              value={contractType}
              onChange={(event) => setContractType(event.target.value)}
            />
            <input
              placeholder="Brief description of Job"
              type="text"
              value={jobDescription}
              onChange={(event) => setJobDescription(event.target.value)}
            />
            <button type="submit">Send</button>
          </div>
        </form>
        <Link to={"/recruiter-homepage"}>Back</Link>
      </div>
    </>
  );
}
export default CreateOfferPage;
