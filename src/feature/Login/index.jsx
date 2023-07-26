import React, { useState } from "react";
import styles from "./Login.module.css";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { validateEmail, validatePassword } from "../../utils/validation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };

  const handleClick = () => {
    if (!validateEmail(email) || !passwordValid || password.length < 6) {
      alert("Please enter a valid email and password (at least 6 characters long).");
      return;
    }

    // Additional login logic here, e.g., sending data to the server for authentication.

    navigate("/dashboard");
  };

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
              isValid={emailValid}
              errorMessage="Invalid email format."
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
              isValid={passwordValid && password.length >= 6}
              errorMessage="Password must be at least 6 characters long."
            />
          </div>
          <Button text="Login" handleClick={handleClick} />
        </form>
        <div className={styles.login__link}>
          <p>
            Don't have an account yet?
            <span>
              <Link to="/register" className={styles.login__link__anchor}>
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
