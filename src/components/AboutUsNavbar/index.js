import React from "react";

import "./index.css";

const AboutUsNavbar = ({ onSelectedComponent, activeComponent }) => {
  const handleButtonClick = (componentName) => {
    onSelectedComponent(componentName);
  };

  return (
    <div className="visionandmission-navbar-container">
      <button
        className={`visionandmission-navbar-button ${
          activeComponent === "VisionAndMission" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("VisionAndMission")}
      >
        Our Vision and Mission
      </button>
      <button
        className={`visionandmission-navbar-button ${
          activeComponent === "OurTeam" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("OurTeam")}
      >
        Our Team
      </button>
      <button
        className={`visionandmission-navbar-button ${
          activeComponent === "SuccessStories" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("SuccessStories")}
      >
        Success Stories
      </button>
    </div>
  );
};

export default AboutUsNavbar;
