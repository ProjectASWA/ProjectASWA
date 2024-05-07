import { Component } from "react";

import { Link } from "react-router-dom";

import "./index.css";

const quotesObj = [
  {
    text: "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone",
    author: "Dr. APJ Abdul Kalam",
  },
  {
    text: "Be active! Take on responsibility! Work for the things you believe in. If you do not, you are surrendering your fate to others.",
    author: "Dr. APJ Abdul Kalam",
  },
  {
    text: "You see, God helps only people who work hard. That principle is very clear.",
    author: "Dr. APJ Abdul Kalam",
  },
  {
    text: "It's not how much we give, but how much love we put into giving.",
    author: "Mother Teresa",
  },
  {
    text: "We know only too well that what we are doing is nothing more than a drop in the ocean. But if the drop were not there, the ocean would be missing something.",
    author: "Mother Teresa",
  },
  {
    text: "If you can't feed a hundred people, then just feed one.",
    author: "Mother Teresa",
  },
  {
    text: "Love cannot remain by itself—it has no meaning. Love has to be put into action and that action is service.",
    author: "Mother Teresa",
  },
  {
    text: "The simplest acts of kindness are by far more powerful than a thousand heads bowing in prayer.",
    author: "Mahatma Gandhi",
  },
  {
    text: "The best way to find yourself is to lose yourself in the service of others.",
    author: "Mahatma Gandhi",
  },
  {
    text: "There are people in the world so hungry, that God cannot appear to them except in the form of bread.",
    author: "Mahatma Gandhi",
  },
];

const randomIndex = Math.floor(Math.random() * quotesObj.length);
const randomQuote = quotesObj[randomIndex];

class OurProjects1 extends Component {
  render() {
    return (
      <div className="OurProjects1-card-container">
        <div className="heading-container">
          <h1 className="OurProjects1-main-heading">Our Projects</h1>
        </div>
        <div className="OurProjects1-sub-container">
          <div className="what-we-did-card">
            <div className="what-we-did-card-text-container">
              <p className="what-we-did-heading">What We Did</p>
              <p className="what-we-did-description">Featured Projects</p>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/education2.png")',
              backgroundSize: "cover",
            }}
          >
            <div className="our-projects1-image-text-container">
              <p className="our-projects1-image-heading">Education</p>
              <Link className="ourprojectscard-link" to={"/Education"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectsenvironment.png")',
              backgroundSize: "cover",
            }}
          >
            <div className="our-projects1-image-text-container">
              <p className="our-projects1-image-heading">Environment</p>
              <Link className="ourprojectscard-link" to={"/Environment"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectsblood.png")',
              backgroundSize: "cover",
            }}
          >
            <div className="our-projects1-image-text-container">
              <p className="our-projects1-image-heading">Blood Connect</p>
              <Link className="ourprojectscard-link" to={"/DonateProject"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectsannamparabrahmam.png")',
              backgroundSize: "cover",
            }}
          >
            <div className="our-projects1-image-text-container">
              <p className="our-projects1-image-heading">Annam Parabrahmam</p>
              <Link className="ourprojectscard-link" to={"/AnnamParabrahmam"}>
                {" "}
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div
            className="our-projects-image"
            style={{
              background:
                'linear-gradient(358deg, #000 -5.19%, rgba(0, 0, 0, 0.46) 61.12%, rgba(0, 0, 0, 0) 98.42%), url("../Images/ourprojectshomevisits.png")',
              backgroundSize: "cover",
            }}
          >
            <div className="our-projects1-image-text-container">
              <p className="our-projects1-image-heading">Home Visits</p>
              <Link className="ourprojectscard-link" to={"/HomeVisits"}>
                <button className="our-projects1-image-button">
                  KNOW MORE
                </button>
              </Link>
            </div>
          </div>
          <div className="donate-card-container">
            <h4 className="donate-card-text">{randomQuote.text} </h4>
            <p className="donate-card-author">-{randomQuote.author}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default OurProjects1;
