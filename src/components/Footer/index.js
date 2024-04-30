import React from "react";
import "./index.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section-sub-container">
        <div className="footer-reachus-section">
          <img
            src={"/Images/ASWALogo.jpeg"}
            alt="ASWA Logo"
            className="footer-logo"
          />
          <div className="footer-reachus-section-text">
            <p className="reachus-text">Reach Us</p>
            <div className="email-section">
              <img
                src={"/Images/email.png"}
                alt="email"
                className="email-icon"
              />
              <p className="email-text">amma.aswa@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="horizontal-line">
          <hr />
        </div>
        <div className="register-office-address">
          <h1 className="register-office-text">Register Office</h1>
          <div className="register-office-address-container">
            <img
              src={"/Images/location.png"}
              alt="location"
              className="location-logo"
            />
            <p className="register-office-address-text">
              #13-120, 2nd Floor,Christian Colony,Shadnagar, Ranga Reddy
              Dist.,Hyderabad 509216.Telangana, India.
            </p>
          </div>
        </div>
        <div className="horizontal-line">
          <hr />
        </div>
        <div className="register-office-address">
          <h1 className="register-office-text">Admin Office</h1>
          <div className="register-office-address-container">
            <img
              src={"/Images/location.png"}
              alt="location"
              className="location-logo"
            />
            <p className="register-office-address-text">
              #13-120, 2nd Floor,Christian Colony,Shadnagar, Ranga Reddy
              Dist.,Hyderabad - 509216.Telangana, India.
            </p>
          </div>
        </div>
      </div>
      <div className="follow-us-section-container">
        <div className="horizontal-line1">
          <hr />
        </div>
        <div className="follow-us-section-sub-container">
          <div className="follow-us-section">
            <img
              src={"/Images/facebook.png"}
              alt="facebook"
              className="follow-us-icon"
            />
            <img
              src={"/Images/instagram.png"}
              alt="instagram"
              className="instagram-icon"
            />
            <img
              src={"/Images/twitter.png"}
              alt="twitter"
              className="twitter-icon"
            />
            <img
              src={"/Images/youtube.png"}
              alt="youtube"
              className="youtube-icon"
            />
            <img
              src={"/Images/whatsapp.png"}
              alt="whatsapp"
              className="whatsapp-icon"
            />
          </div>
          <p className="follow-us-section-text">
            All our efforts are made possible only because of your support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
