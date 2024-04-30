import "./index.css";

import { Component } from "react";

const TestimonialsCard = (props) => {
  return (
    <div className="TestimonialsCard-app-container">
      <div className="TestimonialsCard-container">
        <img
          src={"/Images/TanikellaBharani.png"}
          alt="image"
          className="TestimonialsCard-image"
        />
        <div className="TestimonialsCard-text">
          <img
            className="double-quotes-image"
            src={"/Images/double-quotes-l.1024x786.png"}
          />
          <p className="TestimonialsCard-description">
            ASWA is doing a great service by motivating govt. school children to
            have affection and love towards arts, education, life and created a
            platform to exhibit their skills. ASWA started like a drop of water
            7yrs ago, is currently flowing like a canal and can turn into a
            river & spreads out vastly.*”
          </p>
          <h1 className="TestimonialsCard-name">
            - Shri Tanikella Bharani Actor, Poet & Director
          </h1>
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="TestimonialsCard-container">
        <img
          src={"/Images/TanikellaBharani.png"}
          alt="image"
          className="TestimonialsCard-image"
        />
        <div className="TestimonialsCard-text">
          <img
            className="double-quotes-image"
            src={"/Images/double-quotes-l.1024x786.png"}
          />
          <p className="TestimonialsCard-description">
            ASWA is doing a great service by motivating govt. school children to
            have affection and love towards arts, education, life and created a
            platform to exhibit their skills. ASWA started like a drop of water
            7yrs ago, is currently flowing like a canal and can turn into a
            river & spreads out vastly.*”
          </p>
          <h1 className="TestimonialsCard-name">
            - Shri Tanikella Bharani Actor, Poet & Director
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
