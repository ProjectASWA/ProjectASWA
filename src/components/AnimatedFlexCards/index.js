import React, { Component } from "react";
import "./index.css";

import OurProjectsCard from "../OurProjectsCard";

class AnimatedFlexCards extends Component {
  onClickConsole = () => {
    console.log("Hello World");
  };

  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <input type="radio" name="slide" id="c1" defaultChecked />
          <label htmlFor="c1" className="card">
            <div className="row">
              <div className="icon">1</div>
              <div>
                <OurProjectsCard />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c2" />
          <label htmlFor="c2" className="card">
            <div className="row">
              <div className="icon">2</div>
              <div>
                <OurProjectsCard />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c3" />
          <label htmlFor="c3" className="card">
            <div className="row">
              <div className="icon">3</div>
              <div>
                <OurProjectsCard />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c4" />
          <label htmlFor="c4" className="card">
            <div className="row">
              <div className="icon">4</div>
              <div>
                <OurProjectsCard />
              </div>
            </div>
          </label>

          <input type="radio" name="slide" id="c5" />
          <label htmlFor="c5" className="card">
            <div className="row">
              <div className="icon">5</div>
              <div>
                <OurProjectsCard />
              </div>
            </div>
          </label>
        </div>
      </div>
    );
  }
}

export default AnimatedFlexCards;
