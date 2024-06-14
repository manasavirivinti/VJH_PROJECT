import React, { useState } from 'react'
import {useSpeechSynthesis} from  "react-speech-kit"
import "../CSS/TextToSpeech.css"
function TextToSpeech({convert}) {
    const [text,setText] = useState("")
    const {speak , cancel , speaking} = useSpeechSynthesis();
    const speakNow=()=>{
      if(convert && typeof convert === 'string'){
        setText(convert)
        speak({text:convert});
      }
    }
    const stopSpeaking=()=>{
      cancel();
    };
  return (
    <div className='textToSpeech'>
      <button className="stopButton" onClick={speakNow} disabled={speaking}>listen</button>
       
        <button  onClick={stopSpeaking} className='stopButton' style={{marginLeft:"300px"}}>
          Stop
        </button>
      

    </div>
  )
}

export default TextToSpeech