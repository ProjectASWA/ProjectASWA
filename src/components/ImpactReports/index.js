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
            <div className="impact-reports-card-count">125000</div>
            <div className="impact-reports-card-text">
              <p>
              Provided career guidance to over 125,000 students across 1500 schools
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">600+</div>
            <div className="impact-reports-card-text">
              <p>
              We assisted 600+ students from 6-7 government schools through our regular language,literacy, number, and library interventions.
              </p>
            </div>
          </div>
        </div>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">150+</div>
            <div className="impact-reports-card-text">
              <p>
              150+ children benefit from our Children Learning Centers every day.
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">5000+</div>
            <div className="impact-reports-card-text">
              <p>
              More than 5000+ books are available in our children's libraries in 5 schools and 2 underprivileged areas.
              </p>
            </div>
          </div>
        </div>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">60+</div>
            <div className="impact-reports-card-text">
              <p>
              Supported the education of over 60+ students.
              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">25000+</div>
            <div className="impact-reports-card-text">
              <p>
              Our well-being/Jeevan Vidya workshops, reaching over 25,000 participants, are officially recognized as a curriculum by AICTE colleges, bridging online and offline engagement for holistic education.
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
              Provided support for the health and medical emergencies of over 60 people.

              </p>
            </div>
          </div>
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">12000+</div>
            <div className="impact-reports-card-text">
              <p>
              With 12,000+ blood donations facilitated across 49 blood donation camps and by connecting blood donors to people in emergencies,.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-reports-cards-container">
        <h1 className="impact-reports-heading">Environment</h1>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">1500+</div>
            <div className="impact-reports-card-text">
              <p>
              Actively assisted 1500+ families during natural disasters such as the recent COVID-19.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="impact-reports-cards-container">
        <h1 className="impact-reports-heading">Annam Parabrahmam</h1>
        <div className="impact-reports-cards-sub-container">
          <div className="impact-reports-card">
            <div className="impact-reports-card-count">25000+</div>
            <div className="impact-reports-card-text">
              <p className="paraImpactReports">
              Reached 25,000+ people through food distribution drives
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactReports;
