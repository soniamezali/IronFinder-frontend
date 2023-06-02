import { useState } from "react";
import "./App.css";
import JobCard from "../components/JobCard";

function App() {
  return (
    <>
      <header></header>

      <div id="body">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <footer></footer>
    </>
  );
}

export default App;
