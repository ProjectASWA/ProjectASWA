import "./index.css";

// import logo from "public/Images/visionandmission.png";

const VisionAndMission = () => {
  return (
    <div className="vision-and-mission-container">
      <div className="our-vision-and-mission-container-boxes">
        <div className="our-vision-container">
          <h1 className="our-vision-heading">Our Vision</h1>
        </div>
        <div className="our-vision-container">
          <h1 className="our-vision-heading">Our Mission</h1>
        </div>
      </div>
      <div className="pledge-container">
        <img className="pledge-image" src="/Images/pledge.png" />
      </div>
    </div>
  );
};

export default VisionAndMission;
