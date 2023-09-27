import React, { useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/actions/auth-actions";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Cookies from "universal-cookie";
import useFetch from "../../hooks/use-fetch";
import { validateEmail, validatePassword } from "../../utils/validation";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [loginFailed, setLoginFailed] = useState(false);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dots, setDots] = useState("");

  const { data, error, makeRequest } = useFetch(
    "https://afrihub-backend.onrender.com/api/auth/login",
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

      dispatch(loginSuccess(decodedData));

      navigate("/dashboard");
    }
  }, [data, dispatch, navigate]);

  useEffect(() => {
    if (error) {
      setLoginFailed(true);
      const timeoutId = setTimeout(() => {
        setLoginFailed(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }

    if (isEmptyInput) {
      const timeoutId = setTimeout(() => {
        setIsEmptyInput(false);
      }, 3000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [error, isEmptyInput]);

  useEffect(() => {
    let dotsInterval;

    if (isLoading) {
      dotsInterval = setInterval(() => {
        setDots((prevDots) => (prevDots === "..." ? "" : prevDots + "."));
      }, 500);
    } else {
      clearInterval(dotsInterval);
      setDots("");
    }

    return () => clearInterval(dotsInterval);
  }, [isLoading]);

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
  };

  const handleLoginEvent = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setIsEmptyInput(true);
      return;
    }

    if (!emailValid || !passwordValid) {
      setLoginFailed(true);
      return;
    }

    setIsLoading(true);

    await makeRequest({
      email,
      password,
    });
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.container__logo}>
          <img src={logo} alt="Description" />
        </div>
        <h1 className={styles.container__title}>Login</h1>
        {loginFailed && (
          <div className="alert alert-danger" role="alert">
            Login failed. Please check your credentials and try again.
          </div>
        )}
        {isEmptyInput && (
          <div className="alert alert-danger" role="alert">
            Input fields cannot be empty.
          </div>
        )}
        <form className={styles.form} onSubmit={handleLoginEvent}>
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
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
              isValid={passwordValid}
              errorMessage="Password must be at least 6 characters long."
            />
          </div>
          <div className="form__group">
            <Button
              text={`${isLoading ? "Logging in" : "Login"}${dots}`}
              handleClick={handleLoginEvent}
              disabled={isLoading}
            />
          </div>
        </form>
        <div className={styles.login__link}>
          <p>
            Don't have an account?
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
