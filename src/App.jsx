import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainHomepage from "../pages/MainHomepage";

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
