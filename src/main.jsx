import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// import AuthContext from "./context/authContext.jsx";
import AuthContextWrapper from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthContextWrapper>
        <App />
      </AuthContextWrapper>
    </Router>
  </React.StrictMode>
);
