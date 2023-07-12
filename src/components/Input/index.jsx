import React, { useState } from "react";
import "./Input.css";
import "../../utils/validation";

const Input = ({
  type,
  value,
  onChange,
  placeholder,
  isValid,
  errorMessage,
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
    onChange(inputValue);
  };

  return (
    <div className="input">
      <input
        type={type === "repeat-password" ? "password" : type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      {!isValid && inputValue && <p>{errorMessage}</p>}
    </div>
  );
};

export default Input;
