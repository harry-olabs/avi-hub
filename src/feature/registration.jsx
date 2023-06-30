import React  from "react";
import "./registration.css";
import logo from "../images/sniper.png";
import Button from "../components/Button";
import Input from "../components/input";
import { useState } from "react";

const Registration = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeat, setRepeat] = useState("")
  
    const handleEmailChange = (value) => {
        setEmail(value);
      };
  
      const handlePasswordChange = (value) => {
        setPassword(value);
      };
      const handleRepeatPasswordChange = (value) => {
        setRepeat(value);
      };
  return (

    
    <div className ="container">
      <div className="container__logo">
      <img src={logo} alt="Description" />
      </div>
      <h1 className="container__title">Register</h1>
      <p className="container__description">Access to our dashboard</p>
      <form className="form">
        <div className="form__group">
          <label for="email" className="form__label">
            Email Address:
          </label>
         <Input type= "email" placeholder="Enter your Email" value={email}  onChange={handleEmailChange}/>
        </div>
        <div className="form__group">
          <label for="password" className="form__label">
            Password:
          </label>
          <Input type="password" placeholder="Enter password"  value={password}  onChange={handlePasswordChange}/>
        </div>
        <div className="form__group">
          <label for="repeat-password" class="form__label">
            Repeat Password:
          </label>
          <Input type="repeat-password" placeholder="Repeat-password" value={repeat}  onChange={handleRepeatPasswordChange}/>
        </div>
        <div className="form__group">
          <Button text="register"/>
        </div>
      </form>
      <div className="register-link">
        <p>
          Already have an account?
          <a href="#" className="register-link__anchor">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;