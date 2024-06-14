import React, { useState } from 'react'
import SpeechImage from "../Images/speech.svg"
import "../CSS/Speech.css"
import micImage from "../Images/mic.png"
import { useNavigate } from "react-router-dom"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
function Talk() {
    const navigate = useNavigate();
    const commands = [
        {
          command: ["Go to * page", "Go to *", "Open * page", "Open *"],
          callback: (redirectPage) => setRedirectUrl(redirectPage),
        },
      ];
    
      const { transcript } = useSpeechRecognition({ commands });
      const [redirectUrl, setRedirectUrl] = useState("");
      const pages = ["home", "blog", "new blog post", "contact"];
      const urls = {
        home: "/",
        blog: "/blog",
        "new blog post": "/blog/new",
        contact: "/contact",
      };
    
      if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null;
      }
    
      let redirect = "";
    
      if (redirectUrl) {
        if (pages.includes(redirectUrl)) {
            navigate(urls[redirectUrl])
          
        } 
      }
    

    return (
        
            <button className='speakButton' onClick={SpeechRecognition.startListening}><img src={micImage} ></img></button>

      
    )
}

export default Talk