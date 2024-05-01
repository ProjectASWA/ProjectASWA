import "./index.css";

import { Link } from "react-router-dom";

const OurProjectsCard = (props) => {
  const { text } = props;

  return (
    <div className="OurProjectsCard-container">
      <div className="ourprojectscard-image"></div>
      <div className="ourprojectscard-text-container">
        <h3 className="ourprjectscard-heading">{text}</h3>
        <div className="ourprojectscard-button-container">
          <button className="ourprojectscard-button"></button>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.23633 12.7L10.2363 8.69995L6.23633 4.69995"
              stroke="#11112D"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OurProjectsCard;
