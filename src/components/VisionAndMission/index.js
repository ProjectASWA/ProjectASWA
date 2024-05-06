import "./index.css";

import { useEffect } from "react";

const VisionAndMission = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vision-and-mission-container">
      <div className="our-vision-and-mission-container-boxes">
        <div className="our-vision-container">
          <h1 className="our-vision-heading">Our Vision</h1>
          <p className="our-vision-para">
            To see society as a happy and healthy place to live, where every
            individual is involved in the creation of a sustainable
            social environment.
          </p>
        </div>
        <div className="our-vision-container">
          <h1 className="our-vision-heading">Our Mission</h1>
          <p className="our-vision-para">
            Through holistic human education, we instill the values of active
            participation, productivity, responsibility, and compassion.
            Embracing the ethos of giving back to society as a collective
            responsibility, we promote activities aimed at supporting
            marginalized individuals, providing both economic and emotional
            assistance where needed.
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
