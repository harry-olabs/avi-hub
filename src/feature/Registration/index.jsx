import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { registrationSuccess } from "../../redux/actions/auth-actions";
import styles from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from "../../utils/validation";
import Cookies from "universal-cookie";
import useFetch from "../../hooks/use-fetch";

const Registration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { firstName, lastName, email, password, confirmPassword } = formData;

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [registrationFailed, setRegistrationFailed] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [loadingDots, setLoadingDots] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading, makeRequest } = useFetch(
    "https://afrihub-backend.onrender.com/api/auth/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  useEffect(() => {
    if (data) {
      const { accessToken } = data;
      const cookies = new Cookies();
      cookies.set("accessToken", accessToken, { path: "/" });

      // Decode the token to obtain the registered user details
      const decodedData = jwt_decode(accessToken);

      dispatch(registrationSuccess(decodedData));
      navigate("/dashboard");
    }
  }, [data, dispatch, navigate]);

  useEffect(() => {
    if (error) {
      setRegistrationFailed(true);
      const timeoutId = setTimeout(() => {
        setRegistrationFailed(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error]);

  useEffect(() => {
    if (isEmptyInput) {
      const timeoutId = setTimeout(() => {
        setIsEmptyInput(false);
      }, 2000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [isEmptyInput]);

  const handleFirstNameChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      firstName: value,
    }));
  };

  const handleLastNameChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      lastName: value,
    }));
  };

  const handleEmailChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      email: value,
    }));
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      password: value,
    }));
    setPasswordValid(validatePassword(value));
    setConfirmPasswordValid(validateConfirmPassword(value, confirmPassword));
  };

  const handleConfirmPasswordChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      confirmPassword: value,
    }));
    setConfirmPasswordValid(validateConfirmPassword(password, value));
  };

  const handleRegistrationEvent = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setIsEmptyInput(true);
      return;
    }

    if (!validateConfirmPassword(password, confirmPassword)) {
      setRegistrationFailed(true);
      return;
    }

    if (!emailValid || !passwordValid || !confirmPasswordValid) {
      setRegistrationFailed(true);
      return;
    }

    const dotsInterval = setInterval(() => {
      setLoadingDots((prevDots) =>
        prevDots.length === 3 ? "" : prevDots + "."
      );
    }, 500);

    await makeRequest({
      firstName,
      lastName,
      email,
      password,
    });

    clearInterval(dotsInterval);
    setLoadingDots("");
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <img src={logo} alt="Description" />
        </div>
        <h1 className={styles.container__title}>Register</h1>
        <p className={styles.container__description}>Access to our dashboard</p>
        {registrationFailed && (
          <div className="alert alert-danger" role="alert">
            Registration failed. Please try again.
          </div>
        )}
        {isEmptyInput && (
          <div className="alert alert-danger" role="alert">
            Input fields cannot be empty.
          </div>
        )}
        <form className={styles.form} onSubmit={handleRegistrationEvent}>
          <div className={styles.form__group}>
            <label htmlFor="firstName" className={styles.form__label}>
              First Name:
            </label>
            <Input
              type="text"
              placeholder="Enter your First Name"
              value={firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="lastName" className={styles.form__label}>
              Last Name:
            </label>
            <Input
              type="text"
              placeholder="Enter your Last Name"
              value={lastName}
              onChange={handleLastNameChange}
            />
          </div>
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
            <Button
              text={isLoading ? `Registering${loadingDots}` : "Register"}
              handleClick={handleRegistrationEvent}
              disabled={isLoading}
            />
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
    </div>
  );
};

export default Registration;
