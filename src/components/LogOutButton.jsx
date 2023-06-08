import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function LogOutButton() {
  const navigateTo = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigateTo("/");
  };

  return (
    <span>
      <button onClick={handleLogOut}> Log Out </button>
    </span>
  );
}
export default LogOutButton;
