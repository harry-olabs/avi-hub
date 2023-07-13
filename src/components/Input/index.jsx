import React, { useState } from "react";
import "./Input.css";

const Input = ({ type, value, onChange, placeholder, passwordValue }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    validation(inputValue); // Pass the input value to the validation function
  };

  const validation = (inputValue) => {
    if (inputValue === "") {
      setError("");
      onChange("");
    } else {
      if (type === "email") {
        if (!validateEmail(inputValue)) {
          setError("Invalid email format.");
        } else {
          setError("");
          onChange(inputValue);
        }
      } else if (type === "password") {
        if (inputValue.length < 6) {
          setError("Password must be at least 6 characters long.");
        } else {
          setError("");
          onChange(inputValue);
        }
      } else if (type === "repeat-password") {
        if (inputValue !== passwordValue) {
          setError("Passwords do not match.");
        } else {
          setError("");
          onChange(inputValue);
        }
      }
    }
  };

  const validateEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="input">
      <input
        type={type === "repeat-password" ? "password" : type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
