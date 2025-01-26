import React from "react";
import "./navbar.css"; // Import your CSS file for styles

const NavigationBar = () => (
  <header className="nav-container">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <div className="navbar">
      {/* Home Link */}
      <a href="/index.html" id="aboutMe" title="Home">
        About Me
      </a>

      {/* University Dropdown */}
      <div className="dropdown">
        <button className="dropbtn">
          University <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content">
          <a href="/UniStudies.html">My Studies</a>
          <a href="/CodingClub.html">Coding Club</a>
          <a href="/ExtraCurricular.html">Extra Curricular</a>
        </div>
      </div>

      {/* Coding Projects Dropdown */}
      <div className="dropdown2">
        <button className="dropbtn2">
          Coding Projects <i className="fa fa-caret-down"></i>
        </button>
        <div className="dropdown-content2">
          <a href="/majorProjects.html">Major Projects</a>
          <a href="/minorProjects.html">Minor Projects</a>
        </div>
      </div>

      {/* Social Media Links */}
      <div id="medialinks">
        <a
          href="https://www.linkedin.com/in/matthew-akrigg-656b32251/"
          target="_blank"
          rel="noopener noreferrer"
          title="My LinkedIn"
        >
          <img
            src="images/734383_in_linked_media_online_social_icon.png"
            alt="My LinkedIn"
          />
        </a>
        <a
          href="https://github.com/matthewakrigg05"
          target="_blank"
          rel="noopener noreferrer"
          title="My GitHub"
        >
          <img
            src="images/1221583_github_logo_media_social_icon.png"
            alt="My GitHub"
          />
        </a>
        <a
          href="https://www.instagram.com/matthewakrigg/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          title="My Instagram"
        >
          <img
            src="images/734394_instagram_media_online_social_icon.png"
            alt="My Instagram"
          />
        </a>
        <a
          href="https://twitter.com/mattak05"
          target="_blank"
          rel="noopener noreferrer"
          title="My Twitter"
        >
          <img
            src="images/734377_media_online_social_twitter_icon.png"
            alt="My Twitter"
          />
        </a>
      </div>
    </div>
  </header>
);

export default NavigationBar;
