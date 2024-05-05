import React, { Component } from "react";
import "./index.css";
import EducationNavBar from "../EducationNavBar";

import SchoolEducationCards from "../SchoolEducationCards";

import HigherEducation from "../HigherEducation";

const edcuataionImages = {
  school: "/Images/schoolEducation.png",
  higher: "/Images/higherEducation1.png",
};

class Education extends Component {
  state = {
    selectedEducationType: "school",
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  onSelectedEducationType = (type) => {
    this.setState({ selectedEducationType: type });
  };

  render() {
    const { selectedEducationType } = this.state;
    const headerImageUrl = edcuataionImages[selectedEducationType];
    return (
      <div className="education-main-container">
        <div className="header-image-container">
          <img src={headerImageUrl} alt="Education" className="header-image" />
        </div>
        <div className="education-container">
          <div className="education-buttons-container">
            <EducationNavBar
              onSelectedEducationType={this.onSelectedEducationType}
              active={selectedEducationType}
            />
          </div>
          <div className="education-cards-main-container">
            {selectedEducationType === "school" ? (
              <SchoolEducationCards />
            ) : (
              <HigherEducation />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Education;
