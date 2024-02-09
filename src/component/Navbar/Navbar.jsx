import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'


export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

   const clearActiveLink = () => {
     setActiveLink("");
   };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-new py-4 mb-3">
        <div className="container">
          <Link
            className="navbar-brand color-new"
            to="/"
            onClick={clearActiveLink}
          >
            START FRAMEWORK
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li
                className={`nav-item ${activeLink === "about" ? "active" : ""}`}
              >
                <Link
                  className="new-link p-7"
                  to="/about"
                  onClick={() => handleLinkClick("about")}
                >
                  ABOUT
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "portfolio" ? "active" : ""
                }`}
              >
                <Link
                  className="new-link  p-7"
                  to="/portfolio"
                  onClick={() => handleLinkClick("portfolio")}
                >
                  PORTFOLIO
                </Link>
              </li>
              <li
                className={`nav-item ${
                  activeLink === "contact" ? "active" : ""
                }`}
              >
                <Link
                  className=" new-link p-7"
                  to="/contact"
                  onClick={() => handleLinkClick("contact")}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
