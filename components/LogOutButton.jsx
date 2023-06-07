import React from "react";
import { Link, useNavigate } from "react-router-dom";

function LogOutButton() {
  const navigateTo = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigateTo("/");
  };

  return (
    <span>
      <button onClick={handleLogOut}> Log Out </button>
    </span>
  );
}
export default LogOutButton;
