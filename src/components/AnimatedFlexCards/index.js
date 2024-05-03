import React, { Component } from "react";
import "./index.css";

import OurProjectsCard from "../OurProjectsCard";

class AnimatedFlexCards extends Component {
  state = {
    firstCard: true,
    secondCard: false,
    thirdCard: false,
    fourthCard: false,
  };

  onClickConsole = (cardName) => {
    this.setState((prevState) => ({
      [cardName]: !prevState[cardName],
    }));
  };

  onClickConsole = () => {
    console.log("Hello World");
  };

  render() {
    const EducationCard = "Education";
    const EnvironmentCard = "Environment";
    const BloodConnect = "Blood Connect";
    const AnnamParabraham = "Annam Parabraham";
    const HomeVisits = "Home Visits";

    const { firstCard, secondCard, thirdCard, fourthCard } = this.state;
    console.log(firstCard, secondCard, thirdCard, fourthCard);
    return (
      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div>
                <OurProjectsCard text={EducationCard} link="/Education" />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div>
                <OurProjectsCard text={EnvironmentCard} link="/Environment" />
              </div>
            </div>
            
          </label>

          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div>
                <OurProjectsCard text={BloodConnect} link="/BloodConnect" />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div>
                <OurProjectsCard
                  text={AnnamParabraham}
                  link="/AnnamParabrahmam"
                />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="card">
            <div className="row">
              <div className="icon">5</div>
              <div>
                <OurProjectsCard text={HomeVisits} link="/HomeVisits" />
              </div>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default AnimatedFlexCards;
