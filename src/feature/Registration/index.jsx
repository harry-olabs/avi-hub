import React, { useState } from "react";
import styles from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { validateEmail, validatePassword } from "../../utils/validation";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const navigate = useNavigate();

  const validateConfirmPassword = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  const handleEmailChange = (value) => {
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    setPasswordValid(validatePassword(value));
    setConfirmPasswordValid(validateConfirmPassword(value, confirmPassword));
  };

  const handleConfirmPasswordChange = (value) => {
    setConfirmPassword(value);
    setConfirmPasswordValid(validateConfirmPassword(password, value));
  };

  const handleClick = () => {
    // Perform confirmation password validation here before navigating
    if (!validateConfirmPassword(password, confirmPassword)) {
      alert("Passwords do not match. Please re-enter.");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.container__logo}>
        <img src={logo} alt="Description" />
      </div>
      <h1 className={styles.container__title}>Register</h1>
      <p className={styles.container__description}>Access to our dashboard</p>
      <form className={styles.form}>
        <div className={styles.form__group}>
          <label htmlFor="email" className={styles.form__label}>
            Email Address:
          </label>
          <Input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
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
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
            isValid={passwordValid}
            errorMessage="Password must be at least 6 characters long."
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="confirm-password" className={styles.form__label}>
            Confirm Password:
          </label>
          <Input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            isValid={confirmPasswordValid}
            errorMessage="Passwords do not match."
          />
        </div>
        <div className="form__group">
          <Button text="Register" handleClick={handleClick} />
        </div>
      </form>
      <div className={styles.register__link}>
        <p>
          Already have an account?
          <span>
            <Link to="/login" className={styles.register__link__anchor}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
