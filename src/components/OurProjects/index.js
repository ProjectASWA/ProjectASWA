import { Component } from "react";
import "./index.css";

import OurProjectsCard from "../OurProjectsCard";
import AnimatedFlexCards from "../AnimatedFlexCards";

class OurProjects extends Component {
  render() {
    const EducationCard = "Education";
    const EnvironmentCard = "Environment";
    const BloodConnect = "Blood Connect";
    const AnnamParabraham = "Annam Parabraham";
    const HomeVisits = "Home Visits";

    return (
      <div className="OurProjects-container">
        <div className="ourprojects-heading">
          <h1>OurProjects</h1>
        </div>
        <div className="animated-flex-cards">
          <AnimatedFlexCards />
        </div>
        <div className="OurProjects-card-main-container">
          <OurProjectsCard text={EducationCard} />
          <OurProjectsCard text={EnvironmentCard} />
          <OurProjectsCard text={BloodConnect} />
          <OurProjectsCard text={AnnamParabraham} />
          <OurProjectsCard text={HomeVisits} />
        </div>
      </div>
    );
  }
}

export default OurProjects;
