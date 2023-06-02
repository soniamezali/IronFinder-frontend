import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHomepage from "../pages/MainHomepage";
import JobCard from "../components/JobCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainHomepage />}></Route>
      </Routes>
    </>
  );
}

export default App;