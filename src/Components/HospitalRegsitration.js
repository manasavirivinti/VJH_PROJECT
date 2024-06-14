
import React, { useState } from 'react'
import '../CSS/HospitalRegistration.css'
import Logo from "../Images/brand2.png"
import Register from "../Images/register.svg"
import "./RegistrationFunctions"
// import RegistrationFunctions from './RegistrationFunctions'
import { RegistrationFunctions } from './RegistrationFunctions';
import TimePicker from "react-time-picker"
import 'react-clock/dist/Clock.css';
import profileDefault from '../Images/profileDefault.svg'
import addProfile from '../Images/addProfile.png'

function HospitalRegsitration() {
  const [image, setImage] = useState(profileDefault);
  const [entity, setEntity] = useState();
  const [time, setTime] = useState();
  const hi = () => {
    console.log(RegistrationFunctions.CheckBoxValues())
    console.log(time)
  }


  return (

    <div className='register-register'>
      <img src={Register} className='registerImg'></img>
      <div className='register-contents'>
        <div className='headingRegister'><span className='signUp'>Sign up to </span><img className='signUpImg' src={Logo}></img></div>
        <div className='dpRegister'>
          {
            image===profileDefault?<img  src={image} className="hospitalImg"></img>:<img  src={URL.createObjectURL(image)} className="hospitalImg"></img>
          }
          <label htmlFor='addProfileImage'><img src={addProfile} className='addProfile'></img></label>
          <input className='chooseFileRegister' id='addProfileImage' type="file" onChange={(e)=>setImage(e.target.files[0])}></input>
        </div>
        <div className='hospitalName'>
          <div className='leftValuesRegister'>Name of Entity:</div>
          <input placeholder='Apollo Hospital' className='nameRegsiter'></input>
        </div>

        <div className='hospitalCode'>
          <div className='leftValuesRegister'>Code of Entity:</div>
          <input placeholder='HC_007' className='inputRegister'></input>
        </div>

        <div className="paswordRegister">
          <div className='leftValuesRegister'>Password:</div>
          <input placeholder='$%@34H9!' type="password" className='inputRegister'></input>
        </div>
        <div className='type-entity'>
          <div className='leftValuesRegister'>Type of Entity:</div>
          <div className='radioEntity'><input value="hospital" id='entity' type='radio' onChange={(e) => setEntity(e.target.value)} color='#b2bdb9' name="entityType"></input>Hospital</div>
          <div className='radioLeft'> <input value="medicalstore" id='entity' type='radio' onChange={(e) => setEntity(e.target.value)} name="entityType"></input>Medical store</div>
          <div className='radioLeft'> <input value="diagnostic" id='entity' type='radio' onChange={(e) => setEntity(e.target.value)} name="entityType"></input>Diagnostic</div>
        </div>
        <div className='type-organization'>
          <div className='leftValuesRegister'>Type of Org:</div>
          <div className='radioLeft'><input value="private entity" type="radio" id="organization" name="organizationType"></input>private</div>
          <div className='radioLeft'> <input value="governament entity" type="radio" id="organization" name="organizationType"></input>governament</div>
        </div>
        <div className='timingsRegister'>
          <div className='timings'>
            <div className='leftValuesRegister'>Opening Time:</div>
            <TimePicker className='TimePickerOne' onChange={setTime} value={time}></TimePicker>
          </div>
          <div className='timings'>
            <div className='leftValuesRegister'>Closing Time:</div>
            <TimePicker className='TimePickerTwo' onChange={setTime} value={time}></TimePicker>
          </div>
        </div>
        <div className='registerSchemes'>
          <div className='leftValuesRegister'>Schemes:</div>
          <div className='checkbox'>
            <input type="checkbox" value="Scheme-1"></input>Scheme-1
            <input type="checkbox" value="Scheme-2"></input>Scheme-2
            <input type="checkbox" value="Scheme-3"></input>Scheme-3
            <input type="checkbox" value="Scheme-4"></input>Scheme-4
            <input type="checkbox" value="Scheme-4"></input>Scheme-5
          </div>
        </div>
        <div>

        </div>

        <div className='phnoNumberRegister'>
          <div className='leftValuesRegister'>Phone no:</div>
          <input type="number" placeholder='phoneno'></input>
        </div>
        <div className='locationRegister'>
          <div className='leftValuesRegister'>Location:</div>
          <input placeholder='longitude'></input>
          <input placeholder='latitude'></input>
        </div>

        <div className='addressRegister'>
          <div className='leftValuesRegister'>Address:</div>
          <textarea type="textarea" placeholder='how to reach...'></textarea>
        </div>


        <button className='registerHospital' onClick={() => hi()}>Register</button>


      </div>

    </div>

  )
}

export default HospitalRegsitration