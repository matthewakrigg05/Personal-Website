import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const  NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="navbar">

        <Link to="/AboutMe">About Me</Link>

        {/* University Dropdown */}
        <div className="dropdown">
          
          <button className="nav-dropdown-button">University <i className="fa fa-caret-down"></i></button>

          <div className="dropdown-content">
            <Link to="/CodingClub">Coding Club</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;