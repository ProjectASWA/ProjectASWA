import { Component } from "react";

import "./index.css";
import ImpactNumbers from "../ImpactNumbers";


const ImpactSummary = () => {
    return (
      <div className="reportsContainerBg">
        <img
          className="reportsImageBackground"
          src="/Images/impactreports1.png"
        />
        <div className="reportsButtonContainer">
          <p className="reportsButtonText">
             Our Impact Summary
          </p>
          <p className="reportsButtonText">
              Impact Reports
          </p>
        </div>
        <div className="reportsPosterArrange">
          <ImpactNumbers />
        </div>
      </div>
    );
  }
export default ImpactSummary;
