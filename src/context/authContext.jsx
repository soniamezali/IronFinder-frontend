import React, { createContext, useState, useEffect } from "react";
// import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthContextWrapper = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    authenticateUser();
  }, []);

  const authenticateUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        const response = await axios.get(
          "https://ironfinder.onrender.com/auth/verify",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        // console.log("la rep du verify:", response);
        setUser(response.data);
        setIsLoggedIn(true);
        setIsLoading(false);
      } else {
        setUser(null);
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  console.log("le user est:", user);

  const values = {
    user,
    setUser,
    authenticateUser,
    isLoggedIn,
    isLoading,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
// export { AuthContext }
export default AuthContextWrapper;
