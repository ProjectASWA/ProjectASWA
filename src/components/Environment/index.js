import "./index.css";

import { Component } from "react";

const cardImages = {
  environmentAwarness: {
    image: "/Images/Environment1.png",
    text: "Environmental awareness sessions/classes/visits in schools, colleges,",
  },
  homesAndColonies: {
    image: "/Images/Environment2.png",
    text: "Homes, and Colonies Etc.,",
  },
  plantationDrives: {
    image: "/Images/Environment3.png",
    text: "Plantation Drives.",
  },
  renovation: {
    image: "/Images/Environment4.png",
    text: "Renovation of (Old) Municipal Parks",
  },
  plasticAwarness: {
    image: "/Images/Environment5.png",
    text: "Plastic Awareness sessions",
  },
};

class Environment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: "environmentAwarness",
      clickedText: "environmentAwarness",
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleCardClick = (card) => {
    this.setState({ selectedCard: card, clickedText: card });
  };

  render() {
    const { selectedCard, clickedText } = this.state;
    return (
      <div className="Environment-main-container">
        <img src="/Images/environmentBannerBackground.avif" className="environment-image" />
        <div className="Environment-sub-container">
          <div className="environment-text-container">
            <h3 className="environment-heading">Environment</h3>
            <p className="environment-description">
              Our "SAVE EARTH" project is dedicated to combating global warming
              and preserving our planet. Through awareness campaigns, plantation
              drives, We strive to address rising pollution and temperatures.
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

              <div className="environment-cards-image-container">
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
