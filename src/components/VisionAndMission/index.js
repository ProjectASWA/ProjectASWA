import "./index.css";

import { useEffect } from "react";

const VisionAndMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vision-and-mission-container">
      <div className="our-vision-and-mission-cards-container">
        <div className="our-vision-and-mission-card-container">
          <div className="our-vision-and-mission-card-text-container">
            <h1 className="our-vision-and-mission-card-heading">Our Vision</h1>
            <img
              src="/Images/bulb.jpg"
              className="our-vision-and-mission-card-image"
            />
          </div>
          <p className="our-vision-and-mission-card-description">
            To see society as a happy and healthy place to live, where every
            individual is involved in the creation of a sustainable social
            environment.
          </p>
        </div>
        <div className="our-vision-and-mission-card-container">
          <div className="our-vision-and-mission-card-text-container">
            <h1 className="our-vision-and-mission-card-heading">Our Mission</h1>
            <img
              src="/Images/mission.jpg"
              className="our-vision-and-mission-card-image"
            />
          </div>
          <p className="our-vision-and-mission-card-description">
            Through holistic human education, we instill the values of active
            participation, productivity, responsibility, and compassion.
            Embracing the ethos of giving back to society as a collective
            responsibility, we promote activities aimed at supporting
            marginalized individuals, providing both economic and emotional
            assistance where needed.
          </p>
        </div>
      </div>
      <div className="pledge-container">
        <img className="pledge-image" src="/Images/Pledge-ASWA.jpg" />
      </div>
    </div>
  );
};

export default VisionAndMission;
