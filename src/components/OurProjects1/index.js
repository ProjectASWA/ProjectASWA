import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

class OurProjects1 extends Component {
  render() {
    return (
      <div className="OurProjects1-card-container">
        <div className="heading-container">
          <h1 className="OurProjects1-main-heading">Our Projects</h1>
        </div>
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
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/education2.png")',
              backgroundSize: "cover",
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
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectsenvironment.png")',
              backgroundSize: "cover",
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
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectsblood.png")',
              backgroundSize: "cover",
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
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectsannamparabrahmam.png")',
              backgroundSize: "cover",
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
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectshomevisits.png")',
              backgroundSize: "cover",
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
