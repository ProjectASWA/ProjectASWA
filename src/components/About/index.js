import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./index.css";
import SuccessStories from "../SuccessStories";
import OurTeam from "../OurTeam";
import VisionAndMission from "../VisionAndMission";
import AboutUsNavbar from "../AboutUsNavbar";

const headerImages = {
  SuccessStories: "/Images/Success Stories (1).png",
  OurTeam: "/Images/ourteam.png",
  VisionAndMission: "/Images/Vision And Mission.png",
};

class About extends Component {
  state = {
    selectedComponent: "VisionAndMission",
    selectedHeaderImage: headerImages["VisionAndMission"],
  };

  componentDidMount() {
    const { section } = this.props.match.params;
    if (section) {
      this.setState({
        selectedComponent: section,
        selectedHeaderImage: headerImages[section],
      });
    }
    this.unlisten = this.props.history.listen((location) => {
      const newSection = location.pathname.split("/")[2];
      if (newSection) {
        this.setState({
          selectedComponent: newSection,
          selectedHeaderImage: headerImages[newSection],
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.unlisten) {
      this.unlisten();
    }
  }

  handleComponentSelection = (componentName) => {
    this.props.history.push(`/about/${componentName}`);
    this.setState({
      selectedComponent: componentName,
      selectedHeaderImage: headerImages[componentName],
    });
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
    const { selectedHeaderImage, selectedComponent } = this.state;
    return (
      <div className="about-main-container">
        <img src={selectedHeaderImage} alt="Header" className="header-image" />
        <AboutUsNavbar
          onSelectedComponent={this.handleComponentSelection}
          activeComponent={selectedComponent}
        />
        {this.renderComponent()}
      </div>
    );
  }
}

export default withRouter(About);
