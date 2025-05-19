import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarbg = {
    backgroundColor: "#fbeaff",
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={navbarbg}>
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="#">
          InheriteMe
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
          className="collapse navbar-collapse justify-content-end"
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
