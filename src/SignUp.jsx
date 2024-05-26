import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

function Modal({ show, children, onClose }) {
  if (!show) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await updateProfile(userCredential.user, { displayName: name });
      setShowModal(true);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setError("A user with this email already exists.");
      } else {
        console.error("Sign-up error:", error.message);
        setError("Failed to sign up. Please try again.");
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>SignUp</h2>
      <form onSubmit={handleSignUp}>
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
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showPassword}
            onChange={togglePasswordVisibility}
          />{" "}
          Show Password
        </label>
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: "black" }}>{error}</p>}
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
      <Modal show={showModal} onClose={() => navigate("/login")}>
        Successfully Signed Up!
      </Modal>
    </div>
  );
}

export default SignUp;
