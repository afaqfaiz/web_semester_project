import React, { useState } from "react";
import "./login.css";

const LoginModal = ({ onClose }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate an API call
      const response = await fakeApiLogin(formData);

      if (response.success) {
        setError("");
        onClose(); // Close the modal on successful login
        alert("Login successful!");
      } else {
        setError(response.message || "Invalid credentials");
      }
    } catch (err) {
      setError("Failed to connect. Please try again.");
    }
  };

  // Pseudo API for login
  const fakeApiLogin = async ({ email, password }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "test@example.com" && password === "password123") {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: "Invalid email or password" });
        }
      }, 1000); // Simulate a 1-second API delay
    });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2>Login to Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
