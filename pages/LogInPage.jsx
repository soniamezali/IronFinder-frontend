import React, { createContext, useContext, useState, useEffect } from "react";
// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../service/api";
import { AuthContext } from "../src/context/authContext";
import NavbarLogOut from "../components/NavbarLogOut";

function LogIn() {
  const { authenticateUser, user } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const userToLogin = { email, password };
      const response = await service.post("/auth/login", userToLogin);
      console.log(response.data);
      localStorage.setItem("token", response.data.authToken);
      console.log("this is the response.data.token", response.data.authToken);
      await authenticateUser();
      dispatchUser();
      navigateTo("/profile");
    } catch (error) {
      console.log(error);
    }

    function dispatchUser() {
      if (user.__t === "Recruiter") {
        console.log("Recruiter");
      } else {
        console.log("Job Seeker");
      }
    }
  }

  return (
    <div>
      <div>
        <NavbarLogOut />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Log in, bitch !</button>
      </form>
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}
{
  /*
  add this to app.jsx
  <Route path="/login" element={<LogIn />} /> */
}

export default LogIn;
