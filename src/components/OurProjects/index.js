import { Component } from "react";
import "./index.css";

import OurProjectsCard from "../OurProjectsCard";
import AnimatedFlexCards from "../AnimatedFlexCards";

class OurProjects extends Component {
  render() {
    const projects = [
      { text: "Education", link: "/Education" },
      { text: "Environment", link: "/Environment" },
      { text: "Blood Connect", link: "/BloodConnect" },
      { text: "Annam Parabraham", link: "/AnnamParabraham" },
      { text: "Home Visits", link: "/HomeVisits" },
    ];

    return (
      <div className="OurProjects-container">
        <div className="ourprojects-heading">
          <h1>OurProjects</h1>
        </div>
        <div className="animated-flex-cards">
          <AnimatedFlexCards />
        </div>
        <div className="OurProjects-card-main-container">
          {/* <OurProjectsCard text={EducationCard} />
          <OurProjectsCard text={EnvironmentCard} />
          <OurProjectsCard text={BloodConnect} />
          <OurProjectsCard text={AnnamParabraham} />
          <OurProjectsCard text={HomeVisits} /> */}
          {projects.map((project, index) => (
            <OurProjectsCard
              key={index}
              text={project.text}
              link={project.link}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default OurProjects;

// OurProjects component
// import React, { Component } from "react";
// import "./index.css";

// import OurProjectsCard from "../OurProjectsCard";

// class OurProjects extends Component {
//   render() {
//     const projects = [
//       { text: "Education", link: "/Education" },
//       { text: "Environment", link: "/Environment" },
//       { text: "Blood Connect", link: "/BloodConnect" },
//       { text: "Annam Parabraham", link: "/AnnamParabraham" },
//       { text: "Home Visits", link: "/HomeVisits" },
//     ];

//     return (
//       <div className="OurProjects-container">
//         <div className="ourprojects-heading">
//           <h1>OurProjects</h1>
//         </div>
//         <div className="OurProjects-card-main-container">
//           {projects.map((project, index) => (
//             <OurProjectsCard
//               key={index}
//               text={project.text}
//               link={project.link}
//             />
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default OurProjects;
