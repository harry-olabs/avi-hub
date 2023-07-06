import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { Routes } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  return (
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
        <Button text="Login" />
      </form>
      <div className={styles.register__link}>
        <p>
          Don't have an account yet?
          <span>
            <Link to="/Registration" className={styles.register__link__anchor}>
              Register
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
