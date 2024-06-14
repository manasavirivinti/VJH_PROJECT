import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import '../CSS/HomeLocatio.css'
import HomeLocation from "../Images/medicalStores.svg"
function HomeLoactionMedical() {

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
    <div className='homeLocation' style={{backgroundColor:"#b1dbd9"}}>
            <div className='homeLocationHeader'>
            <img src={HomeLocation} id="locationHeaderImage"></img>
                <div className='homeLocationMain'>
                    <div className='locHeader'>
                        Find near by 
                    </div>
                    <div className='locHeader'>Government Medical-Stores,</div>
                    <div className='locHeader'>Private Medical-Stores</div>
                    <div className='locationText'>
                    <div>Get location of different government medical stores, private medical stores</div>
                    <div>Know all the schemes present in them..</div>
                    <div>Try our <span style={{color:'black'}}>Heal & Harmony</span> finder,let us to search for you</div>
                    </div>
                    <button className='homeLocationButton' onClick={()=>navigate("/medicalnearby")}>find nearby medical-stores</button>
                </div>
               
            </div>


    </div>
  )
}

export default HomeLoactionMedical