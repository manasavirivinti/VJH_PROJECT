import React from 'react'
import HomeHeader from "./HomeHeader"
import HomeLocatio from './HomeLocatio';
import HomeSchemes from './HomeSchemes';
import HomeLoactionMedical from './HomeLocationMedical';
import HomeLocationDiagnostics from "../Components/MapDiagnostics"
function Home() {

  return (
    <div>
      <HomeHeader/>
      <HomeLocatio/>
      <HomeLocationDiagnostics/>
      <HomeLoactionMedical/>  
      <HomeSchemes/>
    </div>
  )
}

export default Home