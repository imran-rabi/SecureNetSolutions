import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loginAttempts, setLoginAttempts] = useState(0);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Please fill all required fields.");
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/welcome");
    } catch (error) {
      console.error("Login error:", error.message);
      setError("Failed to log in. Please try again or sign up.");
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>SecureNet Solutions</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />{" "}
          Show Password
        </label>
        <div className="login-buttons">
          {loginAttempts >= 3 && (
            <span
              onClick={handleForgotPassword}
              className="forgot-password-link"
            >
              Forgot Password?
            </span>
          )}
          <button type="submit">Login</button>
        </div>
        {error && <p style={{ color: "black" }}>{error}</p>}
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
