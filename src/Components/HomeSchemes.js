import React from 'react'
import HomeSchemesImg from "../Images/pic2.png"
import '../CSS/HomeSchemes.css'
import { useNavigate } from 'react-router-dom'
import QRCode from 'qrcode.react';

function HomeSchemes() {
  const navigate = useNavigate();
  const changeToSchemes = ()=>{
    navigate('/allschemes');
  }
  const apiEndpoint = 'https://www.yashodahospitals.com/book-doctor-appointment/';
   
  return (
    <div className='HomeSchemes'>
      <div className='HomeSchemesMain'>
        <img src={HomeSchemesImg}></img>
        <div className='HomeSchemesContent'>
          <div className='HomeSchemesHeading'>Health Care Schemes</div>
          <div className='HomeSchemesMatter'>Health care should be within the reach of every citizen. For providing basic health facilities to all citizens, government has introduced and implemented various health schemes and programmes.</div>
          <button className='HomeSchemeButton' onClick={()=>changeToSchemes()}>learn about all Schemes</button>
          <h1>QR Code for API</h1>
             {/* <p>API Endpoint: {apiEndpoint}</p> */}
            <QRCode value={apiEndpoint} />
        </div>
        
      </div>

    </div>
  )
}

export default HomeSchemes