import React, { Component } from "react";
import "./index.css";
import EducationNavBar from "../EducationNavBar";

import SchoolEducationCards from "../SchoolEducationCards";

class Education extends Component {
  render() {
    return (
      <div className="education-main-container">
        <div className="header-image-container">
          <img
            src="/Images/education.png"
            alt="Education"
            className="header-image"
          />
        </div>
        <div className="education-container">
          <div className="education-buttons-container">
            <EducationNavBar />
          </div>
          {/* <div className="education-text-container">
            <h1 className="education-text">School Education</h1>
            <p className="education-description">
              At ASWA, we believe in the transformative power of education to
              shape a better society, where every child has the opportunity to
              thrive and contribute positively. Through our collaborative
              efforts with government schools in Andhra Pradesh & Telangana
              under the "VIKAS" project, we aim to strengthen the educational
              system for all, including the disadvantaged. Building on our past
              initiatives like VIKAS PRIMARY, VIKAS SECONDARY, and VIKAS CAREER
              GUIDANCE, we have expanded our focus to address the root causes of
              societal issues through education. With support from the Wipro
              Foundation's fellowship and CHDHC Project, we are committed to
              fostering systemic change by enhancing literacy, language, and
              library interventions while empowering educators, NGOs, and
              individuals alike. Join us in our journey towards a brighter, more
              equitable future.
            </p>
          </div> */}
          <div className="education-cards-main-container">
            <SchoolEducationCards />
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
