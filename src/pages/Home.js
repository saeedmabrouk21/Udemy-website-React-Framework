import React from "react";
import Courses from "../components/Courses";
import pythonJson from "../data/python_res.json";

function Home() {
  return (
    <>
      <div>bla bla bla </div>
      <br/>
      <div>bla bla bla </div>
      <br/>
      <div>bla bla bla </div>
      <br/>
      <Courses jsonTrack={pythonJson}></Courses>
    </>
  );
}

export default Home;
