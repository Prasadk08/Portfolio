import React from "react";
import Project1 from "../components/Project1";
import Project2 from "../components/Project2";

const Project = () => {
  return (
    <>
      <div className="project-container">
        <h1 className="text-center">My Projects</h1>
        <div className="allprojects">
          <Project1 />
          <hr className="my-2 border-top border-3" />

          <Project2 />
        </div>
      </div>
    </>
  );
};

export default Project;
