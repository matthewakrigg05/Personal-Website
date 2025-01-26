import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css"; // Import your CSS file for styles

export default function Home() {
  return (
    <div className="navbar">

      <Link to="../aboutMe/aboutMePage">About Me</Link>

      {/* University Dropdown */}
      <div className="dropdown">
        
        <button className="dropbtn">University <i className="fa fa-caret-down"></i></button>

        <div className="dropdown-content">
          <Link to="../codingClub/CodingClub.js">Coding Club</Link>
        </div>
      </div>
    </div>
  );
}
