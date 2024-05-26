import React from "react";
import NavBar from "./NavBar"; // Import the NavBar component

function Welcome() {
  return (
    <div>
      <NavBar /> {/* Include the NavBar component */}
      <h1>Welcome to the Home Page!</h1>
      {/* Rest of your Welcome page content */}
    </div>
  );
}

export default Welcome;
