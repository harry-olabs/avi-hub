import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom';

const Button = ({to,text,handleClick}) => {
  return <Link to={to}><button className='custom-btn'>{text}</button></Link>;
}

export default Button
