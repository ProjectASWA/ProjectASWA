import "../Reports/index.css";
import "./index.css";

import { useEffect } from "react";

const FinancialSection = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { details } = props;
  return (
    <div className="reportsPosterArrange">
      <div className="financialReportsContainer">
        <img className="reportsPoster" src={details.image} />
        <h1 className="yearNumberReports">{details.year} Annual Reports</h1>
        <button className="reportsKnowMoreButton">KNOW MORE</button>
      </div>
    </div>
  );
};

export default FinancialSection;
