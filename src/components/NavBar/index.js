import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/JoinWithUs">Join with Us</Link>
        </li>
        <li>
          <Link to="/MediaCoverage">Media Coverage</Link>
        </li>
        <li>
          <Link to="/Reports">Reports</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
