import "./index.css";

import { useEffect } from "react";

const ImpactReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="impact-reports-image-container">
        <img
          src="/Images/impactreports1.png"
          className="impact-reports-image"
        />
      </div>
      <div className="impact-reports-cards-container">
        <div className="impact-reports-first-card-container">
          <div className="environment-impact-reports-card">
            <h4 className="impact-reports-card-heading">Impact Reports</h4>
            <div className="environment-description-card">
              <h1 className="impact-reports-count">3500+</h1>
              <p className="impact-reports-card-description">
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>

          {/* -----Education reports------ */}

          <div className="impact-reports-card">
            <h4 className="impact-reports-card-heading">Education</h4>
            <div className="impact-reports-card-description-container1">
              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>
            </div>
          </div>

          {/* -------Blood Connect--------- */}

          <div className="impact-reports-card">
            <h4 className="impact-reports-card-heading">Blood Connect</h4>
            <div className="impact-reports-card-description-container1">
              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>
            </div>
          </div>

          {/* ------Environment and Annam Parabrahmam------ */}
          <div className="impact-reports-card1">
            <div className="environment-impact-reports-card">
              <h4 className="impact-reports-card-heading">Environment</h4>
              <div className="environment-description-card">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>
            </div>

            <div className="environment-impact-reports-card">
              <h4 className="impact-reports-card-heading">Annam Parabrahmam</h4>
              <div className="environment-description-card">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Our active participation includes over 3500 volunteers and
                  donors who achieved the following
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpactReports;
