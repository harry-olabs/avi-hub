import React from "react";
import "./Button.css";

<<<<<<< HEAD
const Button = ({text, handleClick }) => {
=======
const Button = ({ text, handleClick }) => {
>>>>>>> 1d379478d5f90bcd2cc22b59b41c0e18e8135eaa
  return (
      <button className="custom-btn" onClick={handleClick}>{text}</button>
  );
};

export default Button;
