import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/HomeLocatio.css'
import Pic3 from "../Images/pic3.svg"
function HomeLocatio() {

 useEffect(()=>{
  let globe = document.getElementById('locationHeaderImage');
  window.addEventListener('scroll',function(){
    let value=this.window.scrollY;
      globe.style.opacity=value/1000
      globe.style.top=-value/10+'px'
  })
  let locationHeader = document.getElementById('homeLocationMain');
  window.addEventListener('scroll',function(){
    let value=this.window.scrollY;
      locationHeader.style.opacity=value/1000
      locationHeader.style.left=-value/10+'px'
    
  })
 },[window.scrollY])
 const navigate = useNavigate();

  return (
    <div className='homeLocation'>
            <div className='homeLocationHeader'>
                
                <div className='homeLocationMain'>
                    <div className='locHeader'>
                        Find near by 
                    </div>
                    <div className='locHeader'>Government Hospital,</div>
                    <div className='locHeader'>Private Hospitals</div>
                    <div className='locationText'>
                    <div>Get location of different government hospitals, private hospitals</div>
                    <div>Know all the schemes present in them..</div>
                    <div>Try our <span style={{color:'black'}}>Heal & Harmony</span> finder,let us to search for you</div>
                    </div>
                    <button className='homeLocationButton' onClick={()=>navigate("/hospitalsnearby")}>find nearby hospitals</button>
                </div>
                <img src={Pic3} id="locationHeaderImage"></img>
            </div>


    </div>
  )
}

export default HomeLocatio