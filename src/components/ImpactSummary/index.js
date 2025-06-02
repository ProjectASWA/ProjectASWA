import React, { Component } from "react";

import "./index.css";
import AnnualReport from "../AnnualReport";
import ImpactNumbers from "../ImpactNumbers";

import { useHistory } from "react-router-dom";
import ReportsImage from "../ReportsImage";

const AnnualReportsObj = [
  {
    id: 1,
    year: 2024,
    image: "/Images/ImpactReport2025.png",
    description: "2024-25 Impact Report",
    pdfLink: "/Images/ImpactReport2025.pdf",
  },
  {
    id: 2,
    year: 2024,
    image: "/Images/ImpactReport2024.png",
    description: "2023-24 Impact Report",
    pdfLink: "/Images/ImpactReport2024.pdf",
  },
  {
    id: 3,
    year: 2023,
    image: "/Images/ImpactReport2023.png",
    description: "2022-23 Impact Report",
    pdfLink: "/Images/annualReports2023.pdf",
  },
  {
    id: 4,
    year: 2022,
    image: "/Images/ImpactReport2022.png",
    description: "2019-22 Impact Report",
    pdfLink: "/Images/annualReports2022.pdf",
  }
];

class ImpactSummary extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      impactSummaryButton: true,
      annualButton: false
    };
  }

  openPdf = (link) => {
    this.props.history.push("/pdf", { pdfLink: link });
  };

  OpenImpactSummary;

  render() {
    const {
      impactSummaryButton,
      annualButton,
    } = this.state;
    return (
      <div className="reportsContainerBg">
        {impactSummaryButton ? (
          <img
            className="reportsImageBackground"
            src="/Images/impactreports1.png"
          />
        ) : null}
        {annualButton ? (
          <img
            className="reportsImageBackground"
            src="/Images/Annual Reports.png"
          />
        ) : null}
        <div className="reportsButtonContainer">
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  impactSummaryButton: true,
                  annualButton: false
                });
              }}
              className={`${impactSummaryButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Impact Summary
            </button>
          </div>
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  impactSummaryButton: false,
                  annualButton: true
                });
              }}
              className={`${annualButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Impact Reports
            </button>
          </div>
        </div>
        {impactSummaryButton ? (
          <div className="reportsPosterArrange">
            <ImpactNumbers />
          </div>
        ) : null}
        {annualButton ? (
          <div className="reportsPosterArrange">
            {AnnualReportsObj.map((eachDetails) => {
              let a;
              return (
                <AnnualReport
                  handleClick={this.openPdf}
                  key={eachDetails.id}
                  details={eachDetails}
                />
              );
            })}
          </div>
        ) : null}
      </div>
    );
  }
}
export default ImpactSummary;
