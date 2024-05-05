import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after clicking on a link
  };

  return (
    <nav>
      <Link to="/" className="title">
        <img className="logoResizeHomePage" src="/Images/websiteLogo.jpg" />
      </Link>

      <div className="onMobileDevices">
        <Link to="/" className="title titleMobile">
          <img
            className="logoResizeHomePage mobileDeviceLogoResize"
            src="/Images/websiteLogo.jpg"
          />
        </Link>
        <Link className="linkStyling" to="/donate">
          <button className="donateStyling donateMobile">Donate</button>
        </Link>
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="listNav borderLineNav" onClick={handleAboutClick}>
          About US
        </li>
        <li className="listNav borderLineNav">
          <Link to="/Reports" className="linkStyling">
            Reports
          </Link>
        </li>
        <li className="listNav borderLineNav">
          <Link to="/MediaCoverage" className="linkStyling specialLink">
            Volunteer
          </Link>
        </li>
        <li>
          <Link to="/joinwithus">
            <button className="joinWithUs">JOIN WITH US</button>
          </Link>
        </li>
        <li className="mobileDonate">
          <Link to="/donate">
            <button className="donateStyling">Donate</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const handleAboutClick = () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false); // Close the menu after clicking on a link
//   };

//   return (
//     <nav>
//       <Link to="/" className="title">
//         <img className="logoResizeHomePage" src="/Images/websiteLogo.jpg" />
//       </Link>

//       <div className="onMobileDevices">
//         <Link to="/" className="title titleMobile">
//           <img
//             className="logoResizeHomePage mobileDeviceLogoResize"
//             src="/Images/websiteLogo.jpg"
//           />
//         </Link>
//         <Link className="linkStyling" to="/donate">
//           <button className="donateStyling donateMobile">Donate</button>
//         </Link>
//       </div>
//       <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//       <ul className={menuOpen ? "open" : ""}>
//         <li className="listNav borderLineNav" onClick={handleAboutClick}>
//           About
//         </li>
//         <li className="listNav borderLineNav">
//           <Link to="/Reports" className="linkStyling">
//             Reports
//           </Link>
//         </li>
//         <li className="listNav borderLineNav">
//           <Link to="/MediaCoverage" className="linkStyling specialLink">
//             Volunteer
//           </Link>
//         </li>
//         <li>
//           <Link to="/joinwithus">
//             <button className="joinWithUs">JOIN WITH US</button>
//           </Link>
//         </li>
//         <li className="mobileDonate">
//           <Link to="/donate">
//             <button className="donateStyling">Donate</button>
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;
