import React, { useState, useEffect, useRef } from "react";
import "./index.css";

const DonateProject = () => {
  const [showElement, setShowElement] = useState(true);
  const targetRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let element = document.getElementById(entry.target.id);

          if (entry.target.id.includes("border")) {
            element.classList.add("redBack");
          } else {
            element.classList.add("scroll-div");
          }
          console.log(`Element ${entry.target.id} is intersecting`);
          // Perform action when the target element is on screen
        }
      });
    };

    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(callback, { threshold: 0.5 });

    // Observe each target element
    targetRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Clean up by unobserving each target element
      targetRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      setShowElement(window.innerWidth <= 1000);
    }

    window.addEventListener("resize", handleResize);

    // Call handleResize on initial render to set initial state
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="donateContainer">
      <div>
        <img
          className="bloodImage"
          src="/Images/bloodImage.jpg"
          alt="donate Image"
        />
      </div>
      <div className="bloodContainerText">
        <h1 className="main-blood-heading-donate">Blood Connect</h1>
        <p className="main-sub-heading">
          An initiative of Amma Social Welfare Association
        </p>
        <p className="main-sub-heading">Making emergency connections</p>
      </div>
      <div className="donateImageContainerMain">
        <h1 className="WhatDoesBloodConnect">What does Blood Connect do?</h1>
        <div className="donateImageContainerDescription">
          <p className="donate-para-text">
            When there is a patient in emergency need of blood, Blood connect
            tries to find a donor.
          </p>
          <img className="bloodImageProject" src="/Images/bloodImage2.jpg" />
        </div>
      </div>
      {/* <div className="how-do-blood-container">
        <h1 className="howWeDoIt">How we do it?</h1>
      </div> */}
      {/* <div class="main-div">
        <div class="arrange-in-row">
          <div class="sample-div">
            <div id="border1" class="border-1 redBack">
              <p className="numberClass">1</p>
            </div>
            <div ref={targetRefs[0]} id="scrolldiv">
              <span> </span>
            </div>
          </div>
          <div className="donateDetailsHowWeDoIt">
            <h1 className="subHeadingDonate">Cross-Check Request</h1>
            <p className="donate-para-2">
              Call patient attendees to confirm details.
            </p>
          </div>
        </div>
        <div id="firstBackgroundElement" class="arrange-in-row">
          <div class="sample-div">
            <div id="border2" class="border-1" ref={targetRefs[1]}>
              <p className="numberClass">2</p>
            </div>
            <div id="scrolldiv1" ref={targetRefs[2]}>
              <span> </span>
            </div>
          </div>
          <div className="donateDetailsHowWeDoIt">
            <h1 className="subHeadingDonate">Call Potential Donors</h1>
            <p className="donate-para-2">
              Filter potential donors by location and blood group,then contact
              them
            </p>
          </div>
        </div>
        <div id="secondBackgroundElement" class="arrange-in-row">
          <div class="sample-div">
            <div id="border3" class="border-1" ref={targetRefs[3]}>
              <p className="numberClass">3</p>
            </div>
            <div id="scrolldiv3" ref={targetRefs[4]}>
              <span> </span>
            </div>
          </div>
          <div className="donateDetailsHowWeDoIt">
            <h1 className="subHeadingDonate">Connect Patient and Donor</h1>
            <p className="donate-para-2">
              Share contact information between patient and donor
            </p>
          </div>
        </div>
        <div id="thirdBackgroundElement" class="arrange-in-row">
          <div class="sample-div">
            <div id="border4" class="border-1" ref={targetRefs[5]}>
              <p className="numberClass">4</p>
            </div>
          </div>
          <div className="donateDetailsHowWeDoIt">
            <h1 className="subHeadingDonate">Take Feedback after 10 Days</h1>
            <p className="donate-para-2">
              Follow up after 10 days to ensure everything went smoothly and
              gather feedback. Request further support if needed.
            </p>
          </div>
        </div>
      </div> */}
       <div class="backgroundBloodStepsContainer">
        <h1 className="howWeDoItHeading">How we do it?</h1>
        <div class="mainContainerDonateStyling">

            <div class="BloodcardContainerMain">
                <h1 class="donateHeadingMain">Cross-Check Request</h1>
                <p class="donateParaMain">Call patient attendees to confirm details.</p>
                <div class="step1">
                    Step 1
                </div>
            </div>
            <div class="BloodcardContainerMain">
                <h1 class="donateHeadingMain">Call Potential Donors</h1>
                <p class="donateParaMain">Filter potential donors by location and blood group, then contact them</p>
                <div class="step1">
                    Step 2
                </div>
            </div>
            <div class="BloodcardContainerMain">
                <h1 class="donateHeadingMain">Connect Patient and Donor</h1>
                <p class="donateParaMain">Share contact information between patient and donor.</p>
                <div class="step1">
                    Step 3
                </div>
            </div>
            <div class="BloodcardContainerMain">
                <h1 class="donateHeadingMain">Take Feedback after 10 Days</h1>
                <p class="donateParaMain">Follow up after 10 days to ensure everything went smoothly and gather feedback. Request further support if needed.</p>
                <div class="step1">
                    Step 4
                </div>
            </div>

        </div>
    </div>
      
      <div className="colorDonateContainer">
        <div className="donateProjectContainerFeebback">
          <div className="FeedBackContainer">
            <div className="feedBackContents">
              <h1 className="feedBackHeading">Blood Connect</h1>
              <p className="feedBackPara">
                12000+ blood donations facilitated across 49 blood donation
                camps
              </p>
            </div>
            <div className="feedBackOption">
              <button className="feedBackParaOption">
                <a className = "buttonFeedBackLink" href="https://docs.google.com/forms/d/e/1FAIpQLSepDnKi-YSfdrG-Y-Jx-zeA-3n8h07jD06sb_8YbabrJFIkLw/viewform?embedded=true">
                  Your Feedback
                </a>
              </button>
            </div>
          </div>

          <div className="feedBackButtonsContainer">
            <button className="requestBloodButton">
              <a className="requestButtonLink" href="https://docs.google.com/forms/d/e/1FAIpQLSfOCmV3LhIQTfUKWg4SZkkRFniDW5rjYVP0cFcTCt-TjACrOw/viewform?embedded=true">
                Request Blood
              </a>
            </button>
            <button className="redBackgroundButton">
              <a className="requestButtonLink" href="https://docs.google.com/forms/d/e/1FAIpQLSd_FhVp6QM_WNzd1-4trXXL5oCX7h_C6IH_twhgUwNmB-XJOQ/viewform?embedded=true">
                Donate Blood
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateProject;
