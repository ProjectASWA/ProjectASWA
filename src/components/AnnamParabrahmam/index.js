import "./index.css";

import { Component } from "react";

class AnnamParabrahmam extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="annamparabrahmam-main-container">
        <img
          src="/Images/annamParabrahamam.png"
          className="annamparabrahmam-image"
        />
        <div className="annamparabrahmam-text-container">
          <h2 className="annamparabrahmam-heading">Annam Parabrahmam</h2>
          <p className="annamparabrahmam-description">
            Over the past decade, our organization has been actively involved in
            food distribution to those in need. Inspired by a volunteer's
            regular food distribution to destitute individuals, we launched the
            "Annam Parabrahmam" project in 2011, aiming to feed mentally
            challenged individuals and support elderly or differently-abled
            individuals in care homes. By bridging the gap between excessive
            food production and distribution. On to those in need, we strive to
            create a balanced and compassionate society. Since 2013, we have
            expanded our efforts to include providing food and fruits to
            patients and their attendees in government hospitals, based on
            valuable feedback gathered from our visits.
          </p>
        </div>
        <div className="annamparabrahmam-leader-container">
          <h1 className="annamparabrahmam-heading">Our Leader</h1>
          <div className="leader-card-container">
            <div className="leader-image-and-text">
              <img
                src="/Images/annamparabrahmamleader.png"
                className="leader-image"
              />
              <div className="leader-text-container">
                <div>
                  <h5 className="leader-name">Mr. Parameswara Chari</h5>
                  <p className="project">Project Leader</p>
                </div>
                <p className="leader-description">
                  f Mr. Parameswara Chari is handling the team with his 6
                  members’ team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnnamParabrahmam;
