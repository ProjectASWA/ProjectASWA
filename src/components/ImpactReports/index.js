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
                <h1 className="impact-reports-count">125000+</h1>
                <p className="impact-reports-card-description">
                  Provided career guidance to over 125,000 students across 1500
                  schools.
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">600+</h1>
                <p className="impact-reports-card-description">
                  We assisted 600+ students from 6-7 government schools through
                  our regular language,literacy, number, and library
                  interventions.
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">150+</h1>
                <p className="impact-reports-card-description">
                  150+ children benefit from our Children Learning
                  Centers every day.
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">5000+</h1>
                <p className="impact-reports-card-description">
                  More than 5000+ books are available in our children's
                  libraries in 5 schools and 2 underprivileged areas.
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">60+</h1>
                <p className="impact-reports-card-description">
                  Supported the education of over 60+ students.
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">25000+</h1>
                <p className="impact-reports-card-description">
                  We reached 25,000+ people through our well-being/Jeevan Vidya
                  workshops, both online and offline. Notably, this workshop is
                  recognized as a curriculum by AICTE colleges.
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
                  Provided support for the health and medical emergencies of
                  over 60 people.
                </p>
              </div>

              <div className="impact-reports-card-description-container">
                <h1 className="impact-reports-count">12000+</h1>
                <p className="impact-reports-card-description">
                  With 12,000+ blood donations facilitated across 49 blood
                  donation camps and by connecting blood donors to people in
                  emergencies,.
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
                  Actively assisted 1500+ families during natural disasters such
                  as the recent COVID-19.
                </p>
              </div>
            </div>

            <div className="environment-impact-reports-card">
              <h4 className="impact-reports-card-heading">Annam Parabrahmam</h4>
              <div className="environment-description-card">
                <h1 className="impact-reports-count">3500+</h1>
                <p className="impact-reports-card-description">
                  Reached 25,000+ people through food distribution drives
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
