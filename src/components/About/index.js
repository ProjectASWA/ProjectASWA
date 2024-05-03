import React, { Component } from "react";

import "./index.css";

import SuccessStories from "../SuccessStories";

import OurTeam from "../OurTeam";

import VisionAndMission from "../VisionAndMission";

import AboutUsNavbar from "../AboutUsNavbar";

class About extends Component {
  state = { selectedComponent: "VisionAndMission" };

  handleComponentSelection = (componentName) => {
    this.setState({ selectedComponent: componentName });
  };

  renderComponent = () => {
    const { selectedComponent } = this.state;
    switch (selectedComponent) {
      case "OurTeam":
        return <OurTeam />;
      case "VisionAndMission":
        return <VisionAndMission />;
      default:
        return <SuccessStories />;
    }
  };

  render() {
    return (
      <div className="about-main-container">
        <AboutUsNavbar onSelectedComponent={this.handleComponentSelection} />
        {this.renderComponent()}
      </div>
    );
  }
}

export default About;
