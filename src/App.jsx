import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHomepage from "../pages/MainHomepage";
import SignUpPage from "../pages/SignUpPage";
import LogIn from "../pages/LogInPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHomepage />}></Route>
        <Route path="/sign-up-page" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
