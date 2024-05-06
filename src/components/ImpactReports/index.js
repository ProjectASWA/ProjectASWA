import "./index.css";

import { useEffect } from "react";

const ImpactReports = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="impact-reports-container">
      <div className="impact-reports-image-container">
        <img
          src="/Images/impactreports1.png"
          className="impact-reports-image"
        />
      </div>
      <div className="impact-reports-text-container">
        <h1 className="impact-reports-heading">Imapact Reports</h1>
        <div className="impact-reports-card">
          <div className="impact-reports-card-count">3500+</div>
          <div className="impact-reports-card-text">
            <p>
              Our active participation includes over 3500 volunteers and donors
              who achieved the following
            </p>
          </div>
        </div>
      </div>

      <div className="impact-reports-cards-container">
        <h1 className="impact-reports-heading">Education</h1>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
        </div>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
        </div>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-reports-cards-container">
        <h1 className="impact-reports-heading">Blood Connect</h1>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-reports-cards-container">
        <h1 className="impact-reports-heading">Environment</h1>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-reports-cards-container">
        <h1 className="impact-reports-heading">Annam Parabrahmam</h1>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">3500+</div>
            <div className="impact-reports-card-text">
              <p>
                Our active participation includes over 3500 volunteers and
                donors who achieved the following
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactReports;
