import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/Profile" className="Profile">
        Profile
      </Link>
      <Link to="/welcome" className="nav-item">
        Home
      </Link>
      <Link to="/contact" className="nav-item">
        Contact Us
      </Link>
      <Link to="/Logged-Out" className="nav-item">
        Log out
      </Link>
    </nav>
  );
};

export default NavBar;
