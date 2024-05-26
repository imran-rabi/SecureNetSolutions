import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import SignUp from "./SignUp";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import ForgotPassword from "./ForgotPassword";
import Welcome from "./Welcome";
import Contact from "./Contact";
import Profile from "./Profile";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/logged-in"
            element={
              <div className="logged-in-page">
                <LoggedIn />
              </div>
            }
          />
          <Route
            path="/logged-out"
            element={
              <div className="logged-out-page">
                <LoggedOut />
              </div>
            }
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/welcome"
            element={
              <div className="welcome-page">
                <Welcome />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="contact-page">
                <Contact />
              </div>
            }
          />
          <Route
            path="/profile"
            element={
              <div className="profile-page">
                <Profile />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
