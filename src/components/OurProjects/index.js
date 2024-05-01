import { Component } from "react";
import "./index.css";

import OurProjectsCard from "../OurProjectsCard";

class OurProjects extends Component {
  render() {
    return (
      <div className="OurProjects-container">
        <div className="ourprojects-heading">
          <h1>OurProjects</h1>
        </div>
        <div className="OurProjects-card-main-container">
          <OurProjectsCard />
          <OurProjectsCard />
          <OurProjectsCard />
          <OurProjectsCard />
          <OurProjectsCard />
        </div>
      </div>
    );
  }
}

export default OurProjects;
