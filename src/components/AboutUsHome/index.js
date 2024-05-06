import { Link } from "react-router-dom";

import ReactPlayer from "react-player";
import "./index.css";

const AboutUsHomeSection = () => {
  return (
    <div className="about-us-home">
      <div id="about" className="arrange-about-us">
        <div className="arrange-video-large-screen">
          <div className="about-main-section-heading">
            <h1 className="about-main-heading">ASWA Organisation</h1>
          </div>
          <div className="video-container">
            <ReactPlayer
              width="80%"
              height="225px"
              style={{
                borderRadius: "8px",
                border: "3px solid black",
                borderWidth: "10px",
                minWidth: "202px",
              }}
              url="https://www.youtube.com/watch?v=aSSbjNIl1HA"
              controls={true}
            />
          </div>
          <div className="about-contents-text-container">
            <div className="about-contents-container">
              <p className="about-heading">Love all serve all</p>
              <p className="about-para">
                ASWA, the Amma Social Welfare Association, established on April
                24, 2007, is a beacon of compassion, driving impactful change
                for the marginalized. Over the past decade, ASWA has pursued
                holistic development spanning education, healthcare, and
                environmental sustainability. Through grassroots efforts, it
                fosters inclusivity, empowers communities, and seeds hope for a
                brighter future.
              </p>
            </div>
            <div className="button-container">
              <Link to="/About">
                <button className="button-about aboutStyling">KNOW MORE</button>
              </Link>
              <button className="button-about">DONATE</button>
            </div>
          </div>
        </div>
        <div className="video-container large-screen-video">
          <ReactPlayer
            width="100%"
            height="300px"
            style={{
              borderRadius: "8px",
              border: "3px solid black",
              borderWidth: "10px",
              maxWidth: "572px",
            }}
            url="https://www.youtube.com/watch?v=aSSbjNIl1HA"
            controls={true}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHomeSection;
