import React from "react";
import "./index.css";

const EducationNavBar = (props) => {
  const { onSelectedEducationType, active } = props;

  return (
    <div className="education-navbar-container">
      <button
        className="education-navbar-button"
        onClick={() => onSelectedEducationType("school")}
      >
        School Education
      </button>
      <button
        className="education-navbar-button"
        onClick={() => onSelectedEducationType("higher")}
      >
        Higher Education
      </button>
    </div>
  );
};

export default EducationNavBar;
