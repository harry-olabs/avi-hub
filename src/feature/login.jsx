import React, { useState } from "react";
import "./login.css";
import logo from "../images/sniper.png";
import Button from "../components/Button";
import Input from "../components/input";

// Adedoyin 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <div className="container">
      <div className="container__logo">
        <img src={logo} alt="Description" />
      </div>
      <h1 className="container__title">Login</h1>
      <form className="form">
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email Address:
          </label>
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password:
          </label>
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter your password"
          />{" "}
        </div>
        <Button text="Login" />
      </form>
      <div className="register-link">
        <p>
          Don't have an account yet?
          <a href="dashboard.html" className="register__link__anchor">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
