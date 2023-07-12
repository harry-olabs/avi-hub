import React from "react";
import "./Button.css";

const Button = ({ text, handleClick }) => {
  return (
      <button className="custom-btn" onClick={handleClick}>{text}</button>
  );
};

export default Button;
