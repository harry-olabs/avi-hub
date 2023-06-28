import React, { useState } from "react";
import "./input.css";

const Input = ({ type, onChange, placeholder }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

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
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Input;
