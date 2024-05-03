import React, { useState } from "react";
import "./index.css";

const AboutUsNavbar = ({ onSelectedComponent }) => {
  const [active, setActive] = useState("VisionAndMission");

  const handleButtonClick = (componentName) => {
    setActive(componentName);
    onSelectedComponent(componentName);
  };

  return (
    <div className="visionandmission-navbar-container">
      <button
        className={`visionandmission-navbar-button ${
          active === "VisionAndMission" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("VisionAndMission")}
      >
        Our Vision and Mission
      </button>
      <button
        className={`visionandmission-navbar-button ${
          active === "OurTeam" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("OurTeam")}
      >
        Our Team
      </button>
      <button
        className={`visionandmission-navbar-button ${
          active === "SuccessStories" ? "active" : ""
        }`}
        onClick={() => handleButtonClick("SuccessStories")}
      >
        Success Stories
      </button>
    </div>
  );
};

export default AboutUsNavbar;
