import "./index.css";

const HigherEducation = () => {
  return (
    <div className="higher-education-main-container">
      <div className="higher-education-text-container">
        <h1 className="higher-education-text">Higher and Adult Education</h1>
        <p className="higher-education-description">
          Amidst the complexities of modern life, we confront myriad challenges
          affecting our well-being and relationships, from loneliness to
          environmental degradation. The Center for Holistic Development of
          Human Consciousness (CHDHC), founded in 2018, advocates for inner
          exploration and connection. Through Universal Human Values education
          (Jeevan Vidya), CHDHC offers experiential workshops guiding
          individuals towards self-discovery and purpose. Spearheaded by Late
          Sri A. Nagaraj, CHDHC champions interconnectedness as the essence of
          reality, fostering harmony across individuals and nature. Empowering
          individuals regardless of background, culture, or status, CHDHC aims
          to cultivate a deeper sense of fulfillment and unity within both
          individuals and society.
        </p>
      </div>
      <div className="higher-programs-container">
        <h2 className="higher-education-programs-heading">
          We achieve this through the following programs:
        </h2>
        <ul className="program-list">
          <li classsName="program-item">
            <div>
              <img className="arrow-image1" src="/Images/arrowIndicate.png" />
            </div>
            <p className="program-item-description-education">
              FACULTY DEVELOPMENT PROGRAM (FDP)
            </p>
          </li>
          <li classsName="program-item">
            <div>
              <img className="arrow-image1" src="/Images/arrowIndicate.png" />
            </div>
            <p className="program-item-description-education">
              Student Development Program (SDP)
            </p>
          </li>
          <li classsName="program-item">
            <div>
              <img className="arrow-image1" src="/Images/arrowIndicate.png" />
            </div>
            <p className="program-item-description-education">
              Teacher Professional Development Program (TPDP)
            </p>
          </li>
          <li classsName="program-item">
            <div>
              <img className="arrow-image1" src="/Images/arrowIndicate.png" />
            </div>
            <p className="program-item-description-education">
              JEEVAN VIDYA / UNIVERSAL HUMAN VALUES WORKSHOPS
            </p>
          </li>
          <li classsName="program-item">
            <div>
              <img className="arrow-image1" src="/Images/arrowIndicate.png" />
            </div>
            <p className="program-item-description-education">
              Faculty Devolopment Program(FDP)
            </p>
          </li>
          <li classsName="program-item">
            <div>
              <img className="arrow-image1" src="/Images/arrowIndicate.png" />
            </div>
            <p className="program-item-description-education">
              Faculty Devolopment Program(FDP)
            </p>
          </li>
        </ul>
          <a className = "knowMoreEducationLink" href="https://www.chdhc.org/our-work-1">
            <button className="know-more-button">KNOW MORE</button>
          </a>
      </div>
    </div>
  );
};

export default HigherEducation;
