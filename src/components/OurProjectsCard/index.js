import "./index.css";

import { Link } from "react-router-dom";

const OurProjectsCard = (props) => {
  const { text, link } = props;

  return (
    <div className="OurProjectsCard-container">
      <div className="ourprojectscard-image"></div>
      <div className="ourprojectscard-text-container">
        <h3 className="ourprjectscard-heading">{text}</h3>
        <Link to={link} className="ourprojectscard-link">
          <div className="ourprojectscard-button-container">
            <button className="ourprojectscard-button">Read More</button>
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
        </Link>
      </div>
    </div>
  );
};

export default OurProjectsCard;

// OurProjectsCard component
// import React from "react";
// import { Link } from "react-router-dom";

// const OurProjectsCard = (props) => {
//   const { text, link } = props;

//   return (
//     <div className="OurProjectsCard-container">
//       <div className="ourprojectscard-image"></div>
//       <div className="ourprojectscard-text-container">
//         <h3 className="ourprjectscard-heading">{text}</h3>
//         <div className="ourprojectscard-button-container">
//           <Link to={link} className="ourprojectscard-button">
//             Read More
//           </Link>
//           <svg
//             width="17"
//             height="17"
//             viewBox="0 0 17 17"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               d="M6.23633 12.7L10.2363 8.69995L6.23633 4.69995"
//               stroke="#11112D"
//               strokeWidth="1.33333"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurProjectsCard;
