import React, { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../Firebase/FirebaseImp';
import ReactPlayer from 'react-player'
// import speakText from './TextToSpeech';
import "../CSS/AllSchemes.css"
import { async } from '@firebase/util';
function AllSchemes() {
  // const [allschemes, setallschemes] = useState([]);
  // const postCollectionRef = collection(db, "schemes");
  // useEffect(() => {
  //   const getPost = async () => {
  //     const data = await getDocs(postCollectionRef);
  //     setallschemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   }
  //   getPost();
  // })
  const [speaking, setSpeaking] = useState(false);
  const speakText = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
    setSpeaking(true);
  };
  const stopSpeaking = () => {
    const synth = window.speechSynthesis;
    synth.cancel(); // Stop the ongoing speech
    setSpeaking(false); // Update speaking state
  };

  var ans="Ayushman Bharat, a flagship scheme of Government of India, was launched as recommended by the National Health Policy 2017, to achieve the vision of Universal Health Coverage (UHC). This initiative has been designed to meet Sustainable Development Goals (SDGs) and its underlining commitment, which is to leave no one behind.  Ayushman Bharat is an attempt to move from sectoral and segmented approach of health service delivery to a comprehensive need-based health care service. This scheme aims to undertake path breaking interventions to holistically address the healthcare system (covering prevention, promotion and ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach"
  return (
    <div>
      {
       

          <div className='displayCards'>
            
                  <div className='card'>
                    <div style={{ color: "black", textAlign: "center", fontSize: "20px" ,fontWeight:"bold"}}>Ayushman Bharat</div>
                    <div className='cardTop'><span className='cardHeader'>Description:</span>Ayushman Bharat, a flagship scheme of Government of India, 
                    was launched as recommended by the National Health Policy 2017, to achieve the vision of Universal Health Coverage (UHC). This initiative
                     has been designed to meet Sustainable Development Goals (SDGs) and its underlining commitment, which is to "leave no one behind."
                    Ayushman Bharat is an attempt to move from sectoral and segmented approach of health service delivery to a comprehensive need-based health care service.
                    This scheme aims to undertake path breaking interventions to holistically address the healthcare system (covering prevention, promotion and 
                    ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach</div>
                    <div className='cardTop'><span className='cardHeader'>Applicable to:</span>Leave No Behind</div>
                    <div className='cardTop'><span className='cardHeader'>Type:</span></div>
                    <div className='cardTop'><span className='cardHeader'>Benifits:</span>This scheme aims to undertake path breaking interventions to holistically address the healthcare system 
                    (covering prevention, promotion and ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach</div>
                    <div className='buttons'>
                    <button onClick={() => speakText(ans)} className='stopButton'>Listen</button>
                    <button onClick={stopSpeaking} className='stopButton1'>Stop</button>
                    </div>
                  </div>
                  <div className='card'>
                    <div style={{ color: "black", textAlign: "center", fontSize: "20px" ,fontWeight:"bold"}}>Arogya Sri</div>
                    <div className='cardTop'><span className='cardHeader'>Description:</span>Ayushman Bharat, a flagship scheme of Government of India, 
                    was launched as recommended by the National Health Policy 2017, to achieve the vision of Universal Health Coverage (UHC). This initiative
                     has been designed to meet Sustainable Development Goals (SDGs) and its underlining commitment, which is to "leave no one behind."
                    Ayushman Bharat is an attempt to move from sectoral and segmented approach of health service delivery to a comprehensive need-based health care service.
                    This scheme aims to undertake path breaking interventions to holistically address the healthcare system (covering prevention, promotion and 
                    ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach</div>
                    <div className='cardTop'><span className='cardHeader'>Applicable to:</span>Leave No Behind</div>
                    <div className='cardTop'><span className='cardHeader'>Type:</span></div>
                    <div className='cardTop'><span className='cardHeader'>Benifits:</span>This scheme aims to undertake path breaking interventions to holistically address the healthcare system 
                    (covering prevention, promotion and ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach</div>
                    {/* <div className='cardTop'> <ReactPlayer url={scheme['video']} height={400} width={400}></ReactPlayer></div> */}
                    <div className='buttons'>
                    <button onClick={() => speakText(ans)} className='stopButton'>Listen</button>
                    <button onClick={stopSpeaking} className='stopButton1'>Stop</button>
                    </div>
                  </div>
                  <div className='card'>
                    <div style={{ color: "black", textAlign: "center", fontSize: "20px" ,fontWeight:"bold"}}>Kanti Velugu</div>
                    <div className='cardTop'><span className='cardHeader'>Description:</span>Ayushman Bharat, a flagship scheme of Government of India, 
                    was launched as recommended by the National Health Policy 2017, to achieve the vision of Universal Health Coverage (UHC). This initiative
                     has been designed to meet Sustainable Development Goals (SDGs) and its underlining commitment, which is to "leave no one behind."
                    Ayushman Bharat is an attempt to move from sectoral and segmented approach of health service delivery to a comprehensive need-based health care service.
                    This scheme aims to undertake path breaking interventions to holistically address the healthcare system (covering prevention, promotion and 
                    ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach</div>
                    <div className='cardTop'><span className='cardHeader'>Applicable to:</span>Leave No Behind</div>
                    <div className='cardTop'><span className='cardHeader'>Type:</span></div>
                    <div className='cardTop'><span className='cardHeader'>Benifits:</span>This scheme aims to undertake path breaking interventions to holistically address the healthcare system 
                    (covering prevention, promotion and ambulatory care) at the primary, secondary and tertiary level. Ayushman Bharat adopts a continuum of care approach</div>
                    {/* <div className='cardTop'> <ReactPlayer url={scheme['video']} height={400} width={400}></ReactPlayer></div> */}
                    <div className='buttons'>
                    <button onClick={() => speakText(ans)} className='stopButton'>Listen</button>
                    <button onClick={stopSpeaking} className='stopButton1'>Stop</button>
                    </div>
                  </div>
                  
                

          </div>

          

      }

    </div>
  )
}

export default AllSchemes