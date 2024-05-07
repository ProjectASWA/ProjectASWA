import "./index.css";

import { Component } from "react";

class AnnamParabrahmam extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="annamparabrahmam-main-container">
        <img src="/Images/food1.png" className="annamparabrahmam-image" />
        <div className="annamparabrahmam-text-container">
          <h2 className="annamparabrahmam-heading">Annam Parabrahmam</h2>
          <p className="annamparabrahmam-description">
          Over the past decade, our organisation has been actively involved in food distribution to those in need. Inspired by a volunteer's regular food distribution to destitute individuals, we launched the "Annam Parabrahmam" project in 2011, aiming to feed mentally challenged individuals and support elderly or differently-abled individuals in care homes. By bridging the gap between excessive food production and distribution. On behalf of those in need, we strive to create a balanced and compassionate society. Since 2013, we have expanded our efforts to include providing food and fruits to patients and their attendees in government hospitals, based on valuable feedback gathered from our visits.
          </p>
        </div>
        <div className="projectLeaderContainerHomeVisits">
          <div className="projectLeaderHomeVisits">
              <h1 className="leaderHeadingHomeVisits">Project Leader</h1>
              <div className="mainLeaderContainer">
                    <img className = "leaderHomeVisitsImage" src = "/Images/leaderHomeVisits.jpg"/>
                    <div className="leaderHomeVisitsTextContents">
                        <h1 className="nameLeaderHeadingHomeVisits">Mr. Parameswara Chari</h1>
                        <p className="roleLeaderHomeVisits">Project Leader</p>
                        <p className="descriptionLeaderHomeVisits">Mr. Parameswara Chari is handling the team with his 6 members’ team.</p>
                    </div>
              </div>
          </div>
          <hr className="horizontalLineHomeVisits"></hr>
          <div className="volunteerHomeVisitsMainContainer">
            <div className="RegularVolunteerParticipantsHeading">
              <h1 className="regularVolunteerHeading">Regularly Participating Volunteers</h1>
            </div>
            <div className="arrangeHomeVisitsVolunteer">
            <div className="volunteerContainerHomeVisits">
              <img src = "/Images/leaderHomeVisits.jpg" className="volunteerHomeVisitsImage"/>
              <div className="volunteerTextContentsHomeVisits">
                <h1 className="volunteerMainHeadingHomeVisits">Mr. Parameswara Chari</h1>
                <p className="volunteerSubHeadingHomeVisits">Project Leader</p>
                <p className="volunteerDescriptionHomeVisits">Mr. Parameswara Chari is handling the team with his 6 members’ team.</p>
              </div>
            </div>
            <div className="volunteerContainerHomeVisits">
              <img src = "/Images/leaderHomeVisits.jpg" className="volunteerHomeVisitsImage"/>
              <div className="volunteerTextContentsHomeVisits">
                <h1 className="volunteerMainHeadingHomeVisits">Mr. Parameswara Chari</h1>
                <p className="volunteerSubHeadingHomeVisits">Project Leader</p>
                <p className="volunteerDescriptionHomeVisits">Mr. Parameswara Chari is handling the team with his 6 members’ team.</p>
              </div>
            </div>
            <div className="volunteerContainerHomeVisits">
              <img src = "/Images/leaderHomeVisits.jpg" className="volunteerHomeVisitsImage"/>
              <div className="volunteerTextContentsHomeVisits">
                <h1 className="volunteerMainHeadingHomeVisits">Mr. Parameswara Chari</h1>
                <p className="volunteerSubHeadingHomeVisits">Project Leader</p>
                <p className="volunteerDescriptionHomeVisits">Mr. Parameswara Chari is handling the team with his 6 members’ team.</p>
              </div>
            </div>
            <div className="volunteerContainerHomeVisits">
              <img src = "/Images/leaderHomeVisits.jpg" className="volunteerHomeVisitsImage"/>
              <div className="volunteerTextContentsHomeVisits">
                <h1 className="volunteerMainHeadingHomeVisits">Mr. Parameswara Chari</h1>
                <p className="volunteerSubHeadingHomeVisits">Project Leader</p>
                <p className="volunteerDescriptionHomeVisits">Mr. Parameswara Chari is handling the team with his 6 members’ team.</p>
              </div>
            </div>
            </div>
            
          </div>
      </div>
        
      </div>
    );
  }
}

export default AnnamParabrahmam;
