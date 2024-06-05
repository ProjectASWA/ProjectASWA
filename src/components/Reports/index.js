import React, { Component } from "react";

import { useHistory } from "react-router-dom";
import ReportsImage from "../ReportsImage";
import "./index.css";
import AnnualReport from "../AnnualReport";
import FinancialSection from "../FinancialSection";

const AnnualReportsObj = [
  {
    id: 1,
    year: 2024,
    image: "/Images/ImpactReport2024.png",
    description: "2023-24 Impact Report",
    pdfLink: "/Images/ImpactReport2024.pdf",
  },
  {
    id: 2,
    year: 2023,
    image: "/Images/ImpactReport2023.png",
    description: "2022-23 Impact Report",
    pdfLink: "/Images/annualReports2023.pdf",
  },
  {
    id: 3,
    year: 2022,
    image: "/Images/ImpactReport2022.png",
    description: "2019-22 Impact Report",
    pdfLink: "/Images/annualReports2022.pdf",
  },
  {
    id: 4,
    year: 2022,
    image: "/Images/annualReport2021.jpg",
    description: "2021 Impact Report",
    pdfLink: "/Images/annualReports2022.pdf",
  },
];

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
      annualButton: true,
      financialButton: false,
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
      annualButton,
      financialButton,
      statuoryButton,
      carrierGuidanceButton,
    } = this.state;
    return (
      <div className="reportsContainerBg">
        {annualButton ? (
          <img
            className="reportsImageBackground"
            src="/Images/Annual Reports.png"
          />
        ) : null}
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
                  annualButton: true,
                  financialButton: false,
                  statuoryButton: false,
                  carrierGuidanceButton: false,
                });
              }}
              className={`${annualButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Impact reports
            </button>
          </div>
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  annualButton: false,
                  financialButton: true,
                  statuoryButton: false,
                  carrierGuidanceButton: false,
                });
              }}
              className={`${financialButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Financial reports
            </button>
          </div>
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  annualButton: false,
                  financialButton: false,
                  statuoryButton: true,
                  carrierGuidanceButton: false,
                });
              }}
              className={`${statuoryButton ? "activeButtonReports" : ""} buttonReports`}
            >
              Statutory document
            </button>
          </div>
          <div className="buttonReportsContainer">
            <button
              onClick={() => {
                this.setState({
                  annualButton: false,
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
