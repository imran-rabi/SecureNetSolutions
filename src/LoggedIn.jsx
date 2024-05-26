import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";

function LoggedIn() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <nav>
        <Link to="/Profile" className="nav-logo">
          <img src="logo.png" alt="Logo" style={{ height: "50px" }} />
        </Link>
        <Link to="/welcome" className="nav-link">
          Home
        </Link>
        <Link to="/contact" className="nav-link">
          Contact Us
        </Link>
        <div className="nav-link dropdown" style={{ float: "right" }}>
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Profile
          </button>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/profile" className="dropdown-item">
                My Profile
              </Link>
              <button onClick={handleLogout} className="dropdown-item">
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>
      <h2>You are logged in!</h2>
    </div>
  );
}

export default LoggedIn;
