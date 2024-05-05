import { Carousel } from "react-responsive-carousel";
import MobileHomeVisitsCarousel from "../MobileHomeVistsCarousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import React, { useEffect } from "react";

import "./index.css";

const HomeVisits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="annamparabrahmam-main-container">
      <div>
        <img src="/Images/homeVisitsBanner.png" className="homeVisits-image" />
      </div>
      <div className="homeVisitsContainerContents">
        <h1 className="homeVisitsHeading">Home Visits</h1>
        <p className="homeVisitsPara">
          We dedicate time every month to spreading happiness and joy to those
          in society who are abandoned and uncared for, including kids and
          elderly individuals. Through visits to orphanages and old-age homes,
          we share our love and support, fostering a sense of belonging and
          well-being. Our initiative, born out of a deep belief in the
          importance of sharing love and care, has impacted over 150 homes in
          the past decade. Each visit is filled with emotions, reinforcing our
          commitment to making a positive difference in the lives of those who
          need it most.
        </p>
      </div>

      <div className="arrangeHomeVistsArrange">
        <div>
          <h1 className="ourActivitiesHeading">Our activities</h1>
        </div>
        <div className="arrangeInCenter">
          <div className="listStyleItemHomeVisits">
            <img src="/Images/arrowIndicate.png" />
            <p className="subHeadingHomeVisits">
              Conducting monthly visits to orphanages, old age homes, and
              centers for differently abled individuals.
            </p>
          </div>
          <div className="listStyleItemHomeVisits">
            <img src="/Images/arrowIndicate.png" />
            <p className="subHeadingHomeVisits">
              Engaging in meaningful interactions and spending quality time with
              residents.
            </p>
          </div>
          <div className="listStyleItemHomeVisits">
            <img src="/Images/arrowIndicate.png" />
            <p className="subHeadingHomeVisits">
              Empowering both residents and home founders with essential skills
              and best practices.
            </p>
          </div>
          <div className="listStyleItemHomeVisits">
            <img src="/Images/arrowIndicate.png" />
            <p className="subHeadingHomeVisits">
              Providing financial and in-kind support to foster a nurturing
              environment.
            </p>
          </div>
          <div className="listStyleItemHomeVisits">
            <img src="/Images/arrowIndicate.png" />
            <p className="subHeadingHomeVisits">
              Inspiring volunteerism and community involvement among
              individuals.
            </p>
          </div>
        </div>
      </div>
      <div className="descriptionHomeVisitsContainer">
        <p className="descriptionHomeVisits">
          Every visit is filled with emotions and sentiments. Each visit makes
          every volunteer very happy and makes them realize that sharing love
          with society is their duty. Share & Care is significant for us, as
          it’s the activity that led us to the formation of ASWA. In the past 10
          years, we have visited more than 150 homes.
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
            <div>
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
      <div className="CarouselHomeVisitsContainer">
        <h1 className="photoGalleryHeading">Photo Gallery</h1>
        <MobileHomeVisitsCarousel />
      </div>

    </div>
  );
};

export default HomeVisits;
