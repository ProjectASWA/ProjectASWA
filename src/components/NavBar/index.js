// import React, { useState, useEffect } from "react";

// import { useLocation } from "react-router-dom";
// import "./index.css";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   // Update the pathname state when the location changes

//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const closeMenu = () => {
//       if (menuOpen) {
//         setMenuOpen(false);
//       }
//     };

//     // Access the pathname from the location object

//     document.body.addEventListener("click", closeMenu);

//     return () => {
//       document.body.removeEventListener("click", closeMenu);
//     };
//   }, [menuOpen]);

//   const handleMenuClick = (e) => {
//     e.stopPropagation();
//     setMenuOpen(!menuOpen);
//   };

//   const handleAboutClick = () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       const yOffset = -150;
//       const y =
//         aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   const closeTheNavBar = () => {
//     setMenuOpen(false);
//   };

//   const handleDonateClick = () => {
//     const confirmDonate = window.confirm(
//       "You will be redirecting to the designated ASWA Rayzorpay Payment Page (Gateway). Upon successful donation you will be redirected back to aswa4u.org."
//     );
//     if (confirmDonate) {
//       window.location.href = "https://pages.razorpay.com/aswa";
//     }
//   };

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
//           <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>

//       <ul className={menuOpen ? "open" : ""}>
//         <li className="listNav borderLineNav" onClick={handleAboutClick}>
//           <Link to={{ pathname: "/", state: { scrollToAbout: true } }}>
//             <p className="aboutUsButtonNav">About US</p>
//           </Link>
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
//           {/* <a href="https://pages.razorpay.com/aswa">
//           </a> */}
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

  const handleMenuClick = (e) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  const handleAboutClick = () => {
    setScrollToAbout(true);
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

  return (
    <nav>
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
          <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <ul className={menuOpen ? "open" : ""}>
        <li className="listNav borderLineNav" onClick={handleAboutClick}>
          <Link to="/">
            <p className="aboutUsButtonNav">About US</p>
          </Link>
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
          <button onClick={handleDonateClick} className="donateStyling">
            Donate
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
