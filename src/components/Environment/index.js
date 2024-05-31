import "./index.css";
import React, { Component } from "react";

const cardImages = {
  environmentAwarness: {
    image: "/Images/environmentImage1.png",
    text: "Environmental awareness sessions/classes/visits in schools, colleges,",
  },
  homesAndColonies: {
    image: "/Images/environmentImage2.png",
    text: "Homes, and Colonies Etc.,",
  },
  plantationDrives: {
    image: "/Images/environmentImage3.png",
    text: "Plantation Drives.",
  },
  renovation: {
    image: "/Images/environmentImage4.png",
    text: "Renovation of (Old) Municipal Parks",
  },
  plasticAwarness: {
    image: "/Images/environmentImage5.png",
    text: "Plastic Awareness sessions",
  },
};

class Environment extends Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
    this.state = {
      selectedCard: "environmentAwarness",
      clickedText: "environmentAwarness",
    };
  }

  // handleCardClick = (card) => {
  //   this.setState({ selectedCard: card, clickedText: card });
  //   // Scroll to the image
  //   this.imageRef.current.scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //   });
  // };

  handleCardClick = (card) => {
    this.setState({ selectedCard: card, clickedText: card }, () => {
      // Scroll to the image
      const offset = -100; // Adjust this value as needed
      const elementPosition =
        this.imageRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { selectedCard, clickedText } = this.state;
    return (
      <div className="Environment-main-container">
        <img src="/Images/environment11.png" className="environment-image" />
        <div className="Environment-sub-container">
          <div className="environment-text-container">
            <h3 className="environment-heading">Environment</h3>
            <p className="environment-description">
              Our "SAVE EARTH" project is dedicated to combating global warming
              and preserving our planet. Through awareness campaigns and
              plantation drives, we strive to address rising pollution and
              temperatures.
            </p>
          </div>
          <div className="environment-cards-container">
            <h3 className="environment-card-heading">Our activities include</h3>
            <div className="environment-cards">
              <ul className="environment-cards-text-container">
                {Object.keys(cardImages).map((card) => (
                  <li
                    key={card}
                    className={`environment-cards-text ${clickedText === card ? "clicked" : ""}`}
                    onClick={() => this.handleCardClick(card)}
                  >
                    {cardImages[card].text}
                  </li>
                ))}
              </ul>

              <div
                className="environment-cards-image-container"
                ref={this.imageRef}
              >
                <img
                  src={cardImages[selectedCard].image}
                  alt="Environment Awareness"
                  className="environment-cards-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Environment;
