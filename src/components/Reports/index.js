import React, { Component } from "react";

import { useHistory } from "react-router-dom";
import ReportsImage from "../ReportsImage";
import "./index.css";
import AnnualReport from "../AnnualReport";
import FinancialSection from "../FinancialSection";

const financialReportsObj = [
  {
    id: 1,
    image: "/Images/FinancialReports2022.jpg",
    description: "2022 Financial Reports",
    pdfLink: "/Images/financialReport2022.pdf",
  },
  {
    id: 2,
    image: "/Images/FinancialReports2021.png",
    description: "2021 Financial Reports",
    pdfLink: "/Images/financialReport2021.pdf",
  },
  {
    id: 3,
    image: "/Images/financialReports2020.jpg",
    description: "2020 Financial Reports",
    pdfLink: "/Images/financialReport2020.pdf",
  },
];

const satutoryReports = [
  {
    id: 1,
    image: "/Images/RenewalApproval.png",
    description: "Statutory document",
    pdfLink: "/Images/12ARenewalApproval.pdf",
  },
  {
    id: 2,
    year: 2021,
    image: "/Images/RenewalApproval80G.png",
    description: "Statutory document",
    pdfLink: "/Images/80GRenewalApproval.pdf",
  },
  {
    id: 3,
    image: "/Images/RegistrationCertificate.png",
    description: "Statutory document",
    pdfLink: "/Images/RegistrationCertficate.pdf",
  },
  {
    id: 4,
    image: "/Images/CsrReport.png",
    description: "Statutory document",
    pdfLink: "/Images/CSRApprovalLetter.pdf",
  },
];

const carrierGuidanceObj = [
  {
    id: 1,
    image: "/Images/carrierGuidance2018.png",
    description: "2018 Career Guidance",
    pdfLink: "/Images/CareerGuidanceBooklet20186thEdition.pdf",
  },
  {
    id: 2,
    image: "/Images/chartShort.png",
    description: "2018 Chart short",
    pdfLink: "/Images/CareerGuidenceChartShort2018.pdf",
  },
  {
    id: 3,
    image: "/Images/goalSettings.png",
    description: "Materials info",
    pdfLink: "/Images/MaterialforGoalSetting&CareerGuidanceSession.pdf",
  },
];

class Reports extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor(props) {
    super(props);
    this.state = {
      financialButton: true,
      statuoryButton: false,
      carrierGuidanceButton: false,
    };
  }

  openPdf = (link) => {
    this.props.history.push("/pdf", { pdfLink: link });
  };

  openReports;

  render() {
    const {
      financialButton,
      statuoryButton,
      carrierGuidanceButton,
    } = this.state;
    return (
      <div className="reportsContainerBg">
        {financialButton ? (
          <img
            className="reportsImageBackground"
            src="/Images/Financial Reports1.png"
          />
        ) : null}
        {statuoryButton ? (
          <img
            className="reportsImageBackground"
            src="/Images/reportsBanner3.png"
          />
        ) : null}
        {carrierGuidanceButton ? (
          <img
            className="reportsImageBackground"
            src="/Images/Untitled design (10).png"
          />
        ) : null}

        <div className="reportsButtonContainer">
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  financialButton: true,
                  statuoryButton: false,
                  carrierGuidanceButton: false,
                });
              }}
              className={`${financialButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Financial documents
            </button>
          </div>
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  financialButton: false,
                  statuoryButton: true,
                  carrierGuidanceButton: false,
                });
              }}
              className={`${statuoryButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Statutory documents
            </button>
          </div>
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  financialButton: false,
                  statuoryButton: false,
                  carrierGuidanceButton: true,
                });
              }}
              className={`${carrierGuidanceButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Carrier guidance
            </button>
          </div>
        </div>
        {financialButton ? (
          <div className="reportsPosterArrange">
            {financialReportsObj.map((eachDetails) => {
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
        {statuoryButton ? (
          <div className="reportsPosterArrange">
            {satutoryReports.map((eachDetails) => {
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
        {carrierGuidanceButton ? (
          <div className="reportsPosterArrange">
            {carrierGuidanceObj.map((eachDetails) => {
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
export default Reports;
