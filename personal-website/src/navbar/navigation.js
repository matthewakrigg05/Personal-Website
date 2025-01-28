import React from "react";
import "./navbar.css"; // Import your CSS file for styles

const   NavigationBar = () => (
  <div className="navbar">
    <div className="navbar">

      <a href="../aboutMe/aboutMePage">About Me</a>

      {/* University Dropdown */}
      <div className="dropdown">
        
        <button className="dropbtn">University <i className="fa fa-caret-down"></i></button>

        <div className="dropdown-content">
          <a href="../codingClub/CodingClubPage">Coding Club</a>
        </div>
      </div>
    </div>
  </div>
);

export default NavigationBar;