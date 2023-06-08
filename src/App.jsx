import "./App.css";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import MainHomepage from "./pages/MainHomepage";
import SignUpPage from "./pages/SignUpPage";

import JobSeekerHomePage from "./pages/JobSeekerHomepage";
import JobSeekerProfilePage from "./pages/JobSeekerProfilePage";
import JobSeekerDetailOffer from "./pages/JobSeekerDetailOffer";
import RecruiterDetailOffer from "./pages/RecruiterDetailOffer";
import LogInPage from "./pages/LogInPage";
import RecruiterHomepage from "./pages/RecruiterHomepage";
import RecruiterProfilePage from "./pages/RecruiterProfilePage";
import Profile from "./pages/Profile";
import CreateOfferPage from "./pages/CreateOfferPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHomepage />}></Route>

        <Route path="/sign-up-page" element={<SignUpPage />}></Route>

        <Route path="/log-in" element={<LogInPage />}></Route>
        <Route
          path="/job-seeker-homepage"
          element={<JobSeekerHomePage />}
        ></Route>

        <Route
          path="/job-seeker-profile"
          element={<JobSeekerProfilePage />}
        ></Route>
        <Route
          path="/job-seeker/detail-offer/:jobOfferId"
          element={<JobSeekerDetailOffer />}
        ></Route>
        <Route
          path="/recruiter-homepage"
          element={<RecruiterHomepage />}
        ></Route>
        <Route
          path="/recruiter/profile"
          element={<RecruiterProfilePage />}
        ></Route>
        <Route
          path="/recruiter/detail-offer/:jobOfferId"
          element={<RecruiterDetailOffer />}
        ></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route
          path="/recruiter/create-new-offer"
          element={<CreateOfferPage />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
