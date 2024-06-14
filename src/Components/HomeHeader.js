import React, { useEffect } from 'react'
import "../CSS/HomeHeader.css"
import HeaderImg from "../Images/pic1.png"
function HomeHeader() {

useEffect(()=>{
  let globe = document.getElementById('headerImg');
  window.addEventListener('scroll',function(){
    let value=this.window.scrollY;
      globe.style.opacity=1-value/1000
      globe.style.top=-value/10+'px'
  },[window.screenY])
})
  return (
    <div className='homeHeader'>
          <div className='homeHeaderMain'>
          <img className='homeHeaderImg' src={HeaderImg} id='headerImg'></img>
          <div>
            <div className='headerTextHeader'>Welcome to</div>
            <div className='headerTextHeader'><span style={{color:'#777777'}}>Heal & Harmony</span></div>
            <ul className='detailsHeader'>
                <li>Accurate locations of nearby Hospitals,Medical stores,Diagnostic centers</li>
                <li>Information about the diseases in regard to your symptoms</li>
                <li>Details about severity of your health condition</li>
                <li>Information about schemes</li>
                
            </ul>

          </div>
          </div>
         
      
          
    </div>
  )
}

export default HomeHeader