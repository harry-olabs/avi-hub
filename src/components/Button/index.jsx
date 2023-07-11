import React from 'react'
import "./Button.css"
import { Link } from 'react-router-dom';

const Button = ({to,text}) => {
  return <Link to={to}><button className='button'>{text}</button></Link>;
}

export default Button
