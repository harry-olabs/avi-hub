import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
<<<<<<< HEAD
import {Link, useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 1d379478d5f90bcd2cc22b59b41c0e18e8135eaa
import Input from "../../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const handleClick = () => {
    navigate("/dashboard");
  };

<<<<<<< HEAD
  
=======
>>>>>>> 1d379478d5f90bcd2cc22b59b41c0e18e8135eaa
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <img src={logo} alt="Description" />
        </div>
        <h1 className={styles.container__title}>Login</h1>
        <form className={styles.form}>
          <div className={styles.form__group}>
            <label htmlFor="email" className={styles.form__label}>
              Email Address:
            </label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="password" className={styles.form__label}>
              Password:
            </label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your password"
            />
          </div>
          <Button to="/dashboard" text="Login" handleClick={handleClick} />
        </form>
<<<<<<< HEAD
        <div className={styles.login__link}>
          <p>
            Don't have an account yet?
            <span>
              <Link to="/registration" className={styles.login__link__anchor}>
=======
        <div className={styles.register__link}>
          <p>
            Don't have an account yet?
            <span>
              <Link to="/registration" className={styles.register__link__anchor}>
>>>>>>> 1d379478d5f90bcd2cc22b59b41c0e18e8135eaa
                Register
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
