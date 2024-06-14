import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../CSS/HospitalLogin.css"
import Login from "../Images/login.svg"
function HospitalLogin() {
  const navigate  = useNavigate();
  return (
    <div className='hospitalLogin'>
      <img src={Login}></img>
      <div className='login-content'>
        <h1>Welcome back!</h1>
        <input autoComplete="off" placeholder='hospital/medical/diagnostics-code'></input>
        <input  autoComplete="off" type="password" placeholder='password'></input>
        <button>login</button> 
        <div>register your hospital here.<Link className='register' to='/hospitalregistration'>Register</Link></div>

      </div>
    </div>
  )
}

export default HospitalLogin
