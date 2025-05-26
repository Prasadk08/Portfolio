import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarbg = {
    backgroundColor: "#8eecf5",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 1000,
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontOpticalSizing: "auto",
    fontWeight: 600,
    fontStyle: "normal"
  };
  const mynmfontt = {
   fontFamily: "'Plus Jakarta Sans', sans-serif",
  fontOpticalSizing: "auto",
  fontWeight: 600,
  fontStyle: "normal"
  
};

  return (
    <nav className="navbar navbar-expand-lg" style={navbarbg}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4 m-0 p-0 mynmfontt" style={mynmfontt} href="#">
          INHERITEME
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          style={{ fontSize: "18px" }}
          id="navbarNav"
        >
          <ul className="navbar-nav px-3">
            <li className="nav-item me-3">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link className="nav-link active" to="/projects">
                Projects
              </Link>
            </li>
        
            <li className="nav-item me-3">
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
