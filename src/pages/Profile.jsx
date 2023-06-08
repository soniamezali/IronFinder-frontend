import React from "react";
import { useContext } from "react";
import { AuthContext } from "./../context/authContext";
import JobSeekerHomePage from "./JobSeekerHomepage";
import RecruiterHomePage from "./RecruiterHomepage";

const RedirectionProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  if (user.isJobSeeker) {
    return <JobSeekerHomePage />;
  } else {
    return <RecruiterHomePage />;
  }
};

export default RedirectionProfile;
