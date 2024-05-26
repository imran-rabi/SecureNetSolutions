import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function LoggedOut() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/login"), 3000); // Redirects after 3 seconds
  }, [navigate]);

  return <h1>You have been logged out. Redirecting to login...</h1>;
}

export default LoggedOut;
