import React, { useEffect, useState } from 'react'
import {NavLink, useNavigate} from "react-router-dom"
import Brand from "../Images/brand2.png"
import micImage from "../Images/mic.png"
import Talk from './Talk'
import "../CSS/Navbar.css"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
function Navbar() {

    const navigate = useNavigate();
    const commands = [
        {
          command: ["Go to * page", "Go to *", "Open * page", "Open *","Show *","show *","* open cheyyi","* open karo","* kolo","* chupinchu"],
          callback: (redirectPage) => setRedirectUrl(redirectPage),
        },
      ];
    
      const { transcript } = useSpeechRecognition({ commands });
      const [redirectUrl, setRedirectUrl] = useState("");
      const pages = ["home", "blog", "new blog post", "contact","hospitals","medical stores","maps","diagnostics","teams"];
      const urls = {
        home: "/",
        maps: "/maps",
        "new blog post": "/blog/new",
        contact: "/contact",
        teams:"/allschemes",
        hospitals:"/hospitalsnearby",
        "medical stores":"/medicalnearby",
        diagnostics:'/diagnosticsnearby'
      };
    
  
    
      let redirect = "";
    
      useEffect(()=>{
            navigate(urls[redirectUrl])
      },[redirectUrl])
  
  
  return (
        <div className='navbar'>
            {/* <img src={Brand}></img> */}
            <div className='navbar-items'>
              <NavLink className='navbar-link' to='/'><a>Home</a></NavLink>
              <NavLink className='navbar-link' to='/maps'><a>Maps</a></NavLink>
              <NavLink className='navbar-link' to='/allschemes'><a>Schemes</a></NavLink>
              <NavLink className='navbar-link' to='/filterhsp'><a>Filter</a></NavLink>
              <button className='speakButton' onClick={SpeechRecognition.startListening}><img src={micImage} ></img></button>
            </div>

        </div>
  )
}

export default Navbar