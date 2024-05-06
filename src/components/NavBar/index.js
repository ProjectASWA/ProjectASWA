import React, { useState, useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    document.body.addEventListener("click", closeMenu);

    return () => {
      document.body.removeEventListener("click", closeMenu);
    };
  }, [menuOpen]);

  const handleMenuClick = (e) => {
    e.stopPropagation(); // Prevent the body click event from firing when clicking the menu button
    setMenuOpen(!menuOpen);
  };

  const handleAboutClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close the menu after clicking on a link
  };

  const closeTheNavBar = () => {
    setMenuOpen(false);
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
        <div className="mobileDevicesNavConatainer">
          <Link className="linkStyling" to="/donate">
            <button className="donateStyling donateMobile">Donate</button>
          </Link>
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div> */}
      <ul className={menuOpen ? "open" : ""}>
        <li className="listNav borderLineNav" onClick={handleAboutClick}>
          <p className="aboutUsButtonNav">About US</p>
        </li>
        <li className="listNav borderLineNav">
          <Link to="/Reports" onClick={closeTheNavBar} className="linkStyling">
            Reports
          </Link>
        </li>
        <li className="listNav borderLineNav">
          <Link
            to="/MediaCoverage"
            onClick={handleAboutClick}
            className="linkStyling specialLink"
          >
            Media Coverage
          </Link>
        </li>
        <li>
          <Link to="/volunteer">
            <button className="joinWithUs" onClick={handleAboutClick}>
              JOIN WITH US
            </button>
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

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./NavBar.css";
// import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   return (
//     <>
//       <nav className="navbar">
//         <div className="nav-container">
//           <NavLink exact to="/" className="nav-logo">
//             <span>CodeBucks</span>
//             {/* <i className="fas fa-code"></i> */}
//             <span className="icon">
//               <CodeIcon />
//             </span>
//           </NavLink>

//           <ul className={click ? "nav-menu active" : "nav-menu"}>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/about"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 About
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/blog"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Blog
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink
//                 exact
//                 to="/contact"
//                 activeClassName="active"
//                 className="nav-links"
//                 onClick={handleClick}
//               >
//                 Contact Us
//               </NavLink>
//             </li>
//           </ul>
//           <div className="nav-icon" onClick={handleClick}>
//             {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

//             {click ? (
//               <span className="icon">
//                 <HamburgetMenuOpen />{" "}
//               </span>
//             ) : (
//               <span className="icon">
//                 <HamburgetMenuClose />
//               </span>
//             )}
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavBar;
