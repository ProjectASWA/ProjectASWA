  import React, { useState } from "react";
  import "./index.css";
  import { Link, NavLink } from "react-router-dom";
  // import { About, Contact, Home, Services } from "../../components";
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
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/JoinWithUs">Join with Us</NavLink>
          </li>
          <li>
            <NavLink to="/MediaCoverage">Media Coverage</NavLink>
          </li>
          <li>
            <NavLink to="/Reports">Reports</NavLink>
          </li>
        </ul>
      </nav>
    );
  };

  export default NavBar;