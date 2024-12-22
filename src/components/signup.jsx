import React, { useState } from "react";
import "./signup.css";

const SignupModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate an API call
      const response = await fakeApiSignup(formData);

      if (response.success) {
        setError("");
        onClose(); // Close the modal on successful signup
        alert("Signup successful!");
      } else {
        setError(response.message || "Signup failed");
      }
    } catch (err) {
      setError("Failed to connect. Please try again.");
    }
  };

  // Pseudo API for signup
  const fakeApiSignup = async ({ name, email, password }) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email !== "test@example.com") {
          resolve({ success: true });
        } else {
          resolve({ success: false, message: "Email already registered" });
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
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </label>
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
              placeholder="Create a password"
              required
            />
          </label>
          {error && <p className="error">{error}</p>}
          <button type="submit" className="submit-button">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupModal;
