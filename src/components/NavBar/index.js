// import React, { useState, useEffect } from "react";
// import { useLocation, Link } from "react-router-dom";
// import "./index.css";

// const NavBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrollToAbout, setScrollToAbout] = useState(false);
//   const [scrollToProjects, setScrollToProjects] = useState(false);
//   const [projectsActive, setProjectsActive] = useState(false); // State to track active state of "Our Projects"
//   const location = useLocation();

//   useEffect(() => {
//     const closeMenu = () => {
//       if (menuOpen) {
//         setMenuOpen(false);
//       }
//     };

//     document.body.addEventListener("click", closeMenu);

//     return () => {
//       document.body.removeEventListener("click", closeMenu);
//     };
//   }, [menuOpen]);

//   useEffect(() => {
//     if (scrollToAbout) {
//       const aboutSection = document.getElementById("about");
//       if (aboutSection) {
//         const yOffset = -142;
//         const y =
//           aboutSection.getBoundingClientRect().top +
//           window.pageYOffset +
//           yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//       setScrollToAbout(false);
//     }
//   }, [scrollToAbout]);

//   useEffect(() => {
//     if (scrollToProjects) {
//       const projectsSection = document.getElementById("ourProjects1");
//       if (projectsSection) {
//         const yOffset = -10;
//         const y =
//           projectsSection.getBoundingClientRect().top +
//           window.pageYOffset +
//           yOffset;
//         window.scrollTo({ top: y, behavior: "smooth" });
//       }
//       setScrollToProjects(false);
//     }
//   }, [scrollToProjects]);

//   const handleMenuClick = (e) => {
//     e.stopPropagation();
//     setMenuOpen(!menuOpen);
//   };

//   const handleAboutClick = () => {
//     setScrollToAbout(true);
//     setMenuOpen(false);
//   };

//   const handleProjectsClick = () => {
//     setScrollToProjects(true);
//     setProjectsActive(true); // Set "Our Projects" as active
//     setMenuOpen(false);
//   };

//   const closeTheNavBar = () => {
//     setMenuOpen(false);
//   };

//   const handleDonateClick = () => {
//     const confirmDonate = window.confirm(
//       "You will be redirected to the designated ASWA Rayzorpay Payment Page (Gateway). Upon successful donation, you will be redirected back to aswa4u.org."
//     );
//     if (confirmDonate) {
//       window.location.href = "https://pages.razorpay.com/aswa";
//     }
//   };
//   const crossIcon = (
//     <svg
//       width="21"
//       height="21"
//       viewBox="0 0 21 21"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       onClick={handleMenuClick}
//       className="crossIcon"
//     >
//       <path
//         d="M16.1381 14.6771C16.5489 15.088 16.5489 15.7271 16.1381 16.1379C15.9326 16.3434 15.6816 16.4347 15.4076 16.4347C15.1337 16.4347 14.8826 16.3434 14.6772 16.1379L10.5 11.9608L6.32286 16.1379C6.11742 16.3434 5.86633 16.4347 5.59242 16.4347C5.31851 16.4347 5.06742 16.3434 4.86199 16.1379C4.45112 15.7271 4.45112 15.088 4.86199 14.6771L9.03916 10.4999L4.86199 6.32273C4.45112 5.91186 4.45112 5.27273 4.86199 4.86186C5.27285 4.45099 5.91199 4.45099 6.32286 4.86186L10.5 9.03904L14.6772 4.86186C15.0881 4.45099 15.7272 4.45099 16.1381 4.86186C16.5489 5.27273 16.5489 5.91186 16.1381 6.32273L11.9609 10.4999L16.1381 14.6771Z"
//         fill="white"
//       />
//     </svg>
//   );

//   return (
//     <nav>
//       <Link to="/" className="title">
//         <img
//           className="logoResizeHomePage"
//           src="/Images/logoAswa.png"
//           alt="Logo"
//         />
//       </Link>

//       <div className="onMobileDevices">
//         <Link to="/" className="title titleMobile">
//           <img
//             className="logoResizeHomePage mobileDeviceLogoResize"
//             src="/Images/logoAswa.png"
//             alt="Mobile Logo"
//           />
//         </Link>
//         <div className="mobileDevicesNavConatainer">
//           <Link className="linkStyling" to="/donate">
//             <button
//               className="donateStyling donateMobile"
//               onClick={handleDonateClick}
//             >
//               Donate
//             </button>
//           </Link>
//           <div className="menu" onClick={handleMenuClick}>
//             {menuOpen ? (
//               crossIcon
//             ) : (
//               <>
//                 <span></span>
//                 <span></span>
//                 <span></span>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       <ul className={menuOpen ? "open" : ""}>
//         <li className="listNav borderLineNav" onClick={handleAboutClick}>
//           <Link to="/">
//             <p className="aboutUsButtonNav">About US</p>
//           </Link>
//         </li>
//         <li
//           className={`listNav borderLineNav ${projectsActive ? "active" : ""}`} // Add active class conditionally
//           onClick={handleProjectsClick}
//         >
//           <p className="ourProjectsButtonNav" style={{ color: "#ffffff" }}>
//             Our Projects
//           </p>
//         </li>
//         <li className="listNav borderLineNav">
//           <Link to="/Reports" onClick={closeTheNavBar} className="linkStyling">
//             Reports
//           </Link>
//         </li>
//         <li className="listNav borderLineNav">
//           <Link
//             to="/MediaCoverage"
//             onClick={handleAboutClick}
//             className="linkStyling specialLink"
//           >
//             Media Coverage
//           </Link>
//         </li>
//         <li>
//           <Link to="/volunteer">
//             <button className="joinWithUs" onClick={handleAboutClick}>
//               JOIN WITH US
//             </button>
//           </Link>
//         </li>
//         <li className="mobileDonate">
//           <button onClick={handleDonateClick} className="donateStyling">
//             Donate
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./index.css";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const [scrollToProjects, setScrollToProjects] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false); // State to track active state of "Our Projects"
  const [backgroundColor, setBackgroundColor] = useState("rgba(0, 0, 0, 0.26)"); // Initial transparent background
  const [textColor, setTextColor] = useState("#ffffff"); // Initial text color
  const [borderColor, setBorderColor] = useState("#ffffff"); // Initial border color
  const location = useLocation();

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

  useEffect(() => {
    if (scrollToAbout) {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const yOffset = -142;
        const y =
          aboutSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setScrollToAbout(false);
    }
  }, [scrollToAbout]);

  useEffect(() => {
    if (scrollToProjects) {
      const projectsSection = document.getElementById("ourProjects1");
      if (projectsSection) {
        const yOffset = -10;
        const y =
          projectsSection.getBoundingClientRect().top +
          window.pageYOffset +
          yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
      setScrollToProjects(false);
    }
  }, [scrollToProjects]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // Adjust this value as needed
        setBackgroundColor("rgba(228, 215, 215, 0.89)"); // New background color
        setTextColor("#000000"); // New text color
        setBorderColor("#000000"); // New border color
      } else {
        setBackgroundColor("rgba(0, 0, 0, 0.26)"); // Initial transparent background
        setTextColor("#ffffff"); // Initial text color
        setBorderColor("#ffffff"); // Initial border color
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleAboutClick = () => {
    setScrollToAbout(true);
    setMenuOpen(false);
  };

  const handleProjectsClick = () => {
    setScrollToProjects(true);
    setMenuOpen(false);
  };

  const closeTheNavBar = () => {
    setMenuOpen(false);
  };

  const handleDonateClick = () => {
    const confirmDonate = window.confirm(
      "You will be redirected to the designated ASWA Rayzorpay Payment Page (Gateway). Upon successful donation, you will be redirected back to aswa4u.org."
    );
    if (confirmDonate) {
      window.location.href = "https://pages.razorpay.com/aswa";
    }
  };

  const crossIcon = (
    <svg
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={handleMenuClick}
      className="crossIcon"
    >
      <path
        d="M16.1381 14.6771C16.5489 15.088 16.5489 15.7271 16.1381 16.1379C15.9326 16.3434 15.6816 16.4347 15.4076 16.4347C15.1337 16.4347 14.8826 16.3434 14.6772 16.1379L10.5 11.9608L6.32286 16.1379C6.11742 16.3434 5.86633 16.4347 5.59242 16.4347C5.31851 16.4347 5.06742 16.3434 4.86199 16.1379C4.45112 15.7271 4.45112 15.088 4.86199 14.6771L9.03916 10.4999L4.86199 6.32273C4.45112 5.91186 4.45112 5.27273 4.86199 4.86186C5.27285 4.45099 5.91199 4.45099 6.32286 4.86186L10.5 9.03904L14.6772 4.86186C15.0881 4.45099 15.7272 4.45099 16.1381 4.86186C16.5489 5.27273 16.5489 5.91186 16.1381 6.32273L11.9609 10.4999L16.1381 14.6771Z"
        fill="white"
      />
    </svg>
  );

  return (
    <nav style={{ backgroundColor }}>
      <Link to="/" className="title">
        <img
          className="logoResizeHomePage"
          src="/Images/logoAswa.png"
          alt="Logo"
        />
      </Link>

      <div className="onMobileDevices">
        <Link to="/" className="title titleMobile">
          <img
            className="logoResizeHomePage mobileDeviceLogoResize"
            src="/Images/logoAswa.png"
            alt="Mobile Logo"
          />
        </Link>
        <div className="mobileDevicesNavConatainer">
          <Link className="linkStyling" to="/donate">
            <button
              className="donateStyling donateMobile"
              onClick={handleDonateClick}
            >
              Donate
            </button>
          </Link>
          <div className="menu" onClick={handleMenuClick}>
            {menuOpen ? (
              crossIcon
            ) : (
              <>
                <span style={{ backgroundColor: textColor }}></span>
                <span style={{ backgroundColor: textColor }}></span>
                <span style={{ backgroundColor: textColor }}></span>
              </>
            )}
          </div>
        </div>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="listNav borderLineNav" onClick={handleAboutClick}>
          <Link to="/">
            <p className="aboutUsButtonNav" style={{ color: textColor }}>
              About US
            </p>
          </Link>
        </li>
        <li
          className={`listNav borderLineNav ${projectsActive ? "active" : ""}`} // Add active class conditionally
          onClick={handleProjectsClick}
        >
          <p className="ourProjectsButtonNav" style={{ color: textColor }}>
            Our Projects
          </p>
        </li>
        <li className="listNav borderLineNav">
          <Link to="/Reports" onClick={closeTheNavBar} className="linkStyling">
            <p style={{ color: textColor }}>Reports</p>
          </Link>
        </li>
        <li className="listNav borderLineNav">
          <Link
            to="/MediaCoverage"
            onClick={handleAboutClick}
            className="linkStyling specialLink"
          >
            <p style={{ color: textColor }}>Media Coverage</p>
          </Link>
        </li>
        <li>
          <Link to="/volunteer">
            <button
              className="joinWithUs"
              onClick={handleAboutClick}
              style={{ color: textColor, borderColor }}
            >
              JOIN WITH US
            </button>
          </Link>
        </li>
        <li className="mobileDonate">
          <button onClick={handleDonateClick} className="donateStyling">
            Donate
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
