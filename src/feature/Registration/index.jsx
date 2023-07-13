import React from "react";
import styles from "./Registration.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/sniper.png";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { useState } from "react";

const Registration = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };
  const handleRepeatPasswordChange = (value) => {
    setRepeat(value);
  };

  const handleClick = () => {
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
          <label for="email" className={styles.form__label}>
            Email Address:
          </label>
          <Input
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className={styles.form__group}>
          <label for="password" className={styles.form__label}>
            Password:
          </label>
          <Input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className={styles.form__group}>
          <label for="repeat-password" class={styles.form__label}>
            Repeat Password:
          </label>
          <Input
            type="repeat-password"
            placeholder="Repeat password"
            value={repeat}
            onChange={handleRepeatPasswordChange}
            passwordValue={password}
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
            <Link to="/Login" className={styles.register__link__anchor}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registration;
