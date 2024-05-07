// import React, { Component } from "react";

// import "./index.css";

// import SuccessStories from "../SuccessStories";

// import OurTeam from "../OurTeam";

// import VisionAndMission from "../VisionAndMission";

// import AboutUsNavbar from "../AboutUsNavbar";

// const headerImage = {
//   successStories: "/Images/success1.png",
//   ourTeam: "/Images/ourteam1.png",
//   visionAndMission: "/Images/visionandmission1.png",
// };

// class About extends Component {
//   state = { selectedComponent: "VisionAndMission" };

//   handleComponentSelection = (componentName) => {
//     this.setState({ selectedComponent: componentName });
//   };

//   renderComponent = () => {
//     const { selectedComponent } = this.state;
//     switch (selectedComponent) {
//       case "OurTeam":
//         return <OurTeam />;
//       case "VisionAndMission":
//         return <VisionAndMission />;
//       default:
//         return <SuccessStories />;
//     }
//   };

//   render() {
//     return (
//       <div className="about-main-container">
//         <AboutUsNavbar onSelectedComponent={this.handleComponentSelection} />
//         {this.renderComponent()}
//       </div>
//     );
//   }
// }

// export default About;

import React, { Component } from "react";
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

  handleComponentSelection = (componentName) => {
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
    const { selectedHeaderImage } = this.state;
    return (
      <div className="about-main-container">
        <img src={selectedHeaderImage} alt="Header" className="header-image" />
        <AboutUsNavbar onSelectedComponent={this.handleComponentSelection} />
        {this.renderComponent()}
      </div>
    );
  }
}

export default About;
