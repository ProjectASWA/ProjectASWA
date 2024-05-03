import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
          <img className="logoResizeHomePage" src = "/Images/websiteLogo.jpg"/>
        </Link>

      <div className="onMobileDevices">
        <Link to="/" className="title titleMobile">
        <img className="logoResizeHomePage mobileDeviceLogoResize" src = "/Images/websiteLogo.jpg"/>
        </Link>
          <Link className = "linkStyling" to = "/donate">
            <button className="donateStyling donateMobile">Donate</button>
          </Link>
        
      </div>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul  className={menuOpen ? "open" : ""}>
        <li className = "listNav">
          <Link to="/About" className = "linkStyling">About</Link>
        </li>
        <li className = "listNav">
          <Link to="/Reports" className = "linkStyling">Reports</Link>
        </li>
        <li className = "listNav">
          <Link to="/MediaCoverage" className = "linkStyling">Media Coverage</Link>
        </li>
        <li >
            <Link to = "/joinwithus">
            <button className="joinWithUs">JOIN WITH US</button>
            </Link>
        </li>
        <li className = "mobileDonate">
            <Link to = "/donate">
            <button className="donateStyling">Donate</button>
            </Link>
        </li>        
      </ul>
    </nav>
  );
};

export default NavBar;
