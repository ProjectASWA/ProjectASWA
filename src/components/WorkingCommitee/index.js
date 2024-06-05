import "./index.css";

const WorkingCommitte = () => {
  return (
    <div className="our-team-container">
      <div className="our-team-cards-container">
        <div className="our-team-card-container">
          <img src="/Images/ourTeam1.png" className="our-team-image" />
          <div className="our-team-text-container">
            <h4 className="our-team-text-heading">
              Sreenivasa Prasad Sarvaraju
            </h4>
            <p className="our-team-text-description">
              Founder & President <br/> Master's Degree In Financial Management (MFM)
              Worked in S&P Capital IQ.
            </p>
          </div>
        </div>
        <div className="our-team-card-container">
          <img src="/Images/Rectangle 296(4).png" className="our-team-image" />
          <div className="our-team-text-container">
            <h4 className="our-team-text-heading">Haritha Vemulapalli</h4>
            <p className="our-team-text-description">
              Executive Member <br/> Master of Business Administration Worked as
              Senior Research Associate in S&P Capital IQ.
            </p>
          </div>
        </div>
        <div className="our-team-card-container">
          <img src="/Images/diyva.png" className="our-team-image-1" />
          <div className="our-team-text-container">
            <h4 className="our-team-text-heading">Divya Veeranki</h4>
            <p className="our-team-text-description">
              Working Committee Member <br/> Bachelors in Computer Science & Engineering, Working as Associate in JPMC.
            </p>
          </div>
        </div>        
      </div>
    </div>
  );
};

export default WorkingCommitte;
