import { Component } from "react";

import "./index.css";

class OurProjects1 extends Component {
  render() {
    return (
      <div className="OurProjects1-card-container">
        <div className="OurProjects1-sub-container">
          <div className="what-we-did-card">
            <div className="what-we-did-card-text-container">
              <p className="what-we-did-heading">What We Did</p>
              <p className="what-we-did-description">Featured Projects</p>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourProjectsEducation.png")',
            }}
          ></div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourprojectsenvironment.png")',
            }}
          ></div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourprojectsblood.png")',
            }}
          ></div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage:
                'url("../Images/ourprojectsannamparabrahmam.png")',
            }}
          ></div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourprojectshomevisits.png")',
            }}
          ></div>
          <div className="donate-card-container">
            <h4 className="donate-card-text">More than One Life Changed </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default OurProjects1;
