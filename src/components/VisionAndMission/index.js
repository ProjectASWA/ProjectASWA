import "./index.css";

// import logo from "public/Images/visionandmission.png";

const VisionAndMission = () => {
  return (
    <div className="vision-and-mission-container">
      <div className="vision-and-mission-image-container"></div>

      <div className="vision-and-mission-text-container">
        <h1 className="vision-and-mission-heading">Our Vision and Mission</h1>
        <p className="vision-and-mission-description">
          ASWA aspires for a society characterized by happiness and wellness,
          where each person plays a role in cultivating a sustainable social
          fabric. Our mission revolves around fostering individuals who are
          active, productive, compassionate, and socially aware through
          comprehensive human education.
        </p>
      </div>

      <div className="pledge-container">
        <h1 className="pledge-heading">Pledge</h1>
        <img src="/Images/pledge.png" className="pledge-image" />
      </div>
    </div>
  );
};

export default VisionAndMission;
