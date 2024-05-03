import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

class OurProjects1 extends Component {
  render() {
    return (
      <div className="OurProjects1-card-container">
        <h1 className="OurProjects1-main-heading">Our Projects</h1>
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
          >
            <div className="our-projects1-image-text-container">
              <h5 className="our-projects1-image-heading">Education</h5>
              <Link className="ourprojectscard-link" to={"/Education"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourprojectsenvironment.png")',
            }}
          >
            <div className="our-projects1-image-text-container">
              <h5 className="our-projects1-image-heading">Environment</h5>
              <Link className="ourprojectscard-link" to={"/Environment"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourprojectsblood.png")',
            }}
          >
            <div className="our-projects1-image-text-container">
              <h5 className="our-projects1-image-heading">Blood Connect</h5>
              <Link className="ourprojectscard-link" to={"/DonateProject"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage:
                'url("../Images/ourprojectsannamparabrahmam.png")',
            }}
          >
            <div className="our-projects1-image-text-container">
              <h5 className="our-projects1-image-heading">Annam Parabraham</h5>
              <Link className="ourprojectscard-link" to={"/AnnamParabrahmam"}>
                {" "}
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              backgroundImage: 'url("../Images/ourprojectshomevisits.png")',
            }}
          >
            <div className="our-projects1-image-text-container">
              <h5 className="our-projects1-image-heading">Home Visits</h5>
              <Link className="ourprojectscard-link" to={"/HomeVisits"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="donate-card-container">
            <h4 className="donate-card-text">More than One Life Changed </h4>
          </div>
        </div>
      </div>
    );
  }
}

export default OurProjects1;
