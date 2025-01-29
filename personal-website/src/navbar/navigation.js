import React from "react";
import "./navbar.css";
import linkedinLogo from "./images/linkedin.png";
import githubLogo from "./images/github.png";
import twitterlogo from "./images/twitter.png";
import instagramLogo from "./images/instagram.png";
import { Link } from "react-router-dom";

const  NavigationBar = () => {
  return (
      <div className="navbar">
        <Link to="/AboutMe">About Me</Link>
        
        <div className="dropdown">
          
          <button className="nav-dropdown-button">University <i className="fa fa-caret-down"></i></button>

          <div className="dropdown-content">
            <Link to="/CodingClub">Coding Club</Link>
            <Link to="/ExtraCurricular">Extra Curricular</Link>
          </div>
        </div>

        <div className="dropdown">
          
          <button className="nav-dropdown-button">Projects <i className="fa fa-caret-down"></i></button>

          <div className="dropdown-content">
            <Link to="/MinorProjects">Minor Projects</Link>
            <Link to="/MajorProjects">Major Projects</Link>
          </div>
        </div>

        <div className="medialinks">
          <Link to="https://www.linkedin.com/in/matthewakrigg/">
              <img src={linkedinLogo} alt="LinkedIn Logo" />
          </Link>

          <Link to="https://github.com/matthewakrigg05">
            <img src={githubLogo} alt="GitHub Logo" />
          </Link>

          <Link to="https://x.com/mattak05">
            <img src={twitterlogo} alt="Twitter Logo" />
          </Link>

          <Link to="https://www.instagram.com/matthewakrigg/">
            <img src={instagramLogo} alt="Instagram Logo" />
          </Link>
        </div>
      </div>
  );
}

export default NavigationBar;