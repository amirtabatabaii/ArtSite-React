import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar, NavDropdown } from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/home">
        Taba-Art
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/about-us">
            About Us
          </NavLink>
          <NavLink className="nav-item nav-link" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="nav-item nav-link" to="/contact">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
