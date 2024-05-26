import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";
import { sendPasswordResetEmail } from "firebase/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Check your email for the password reset link.");
      setTimeout(() => navigate("/login"), 5000); // Redirect to login after 5 seconds
    } catch (error) {
      console.error("Reset password error:", error);
      setMessage("Failed to send password reset email. Please try again.");
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Send Reset Email</button>
        {message && <p>{message}</p>}
      </form>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

export default ForgotPassword;
