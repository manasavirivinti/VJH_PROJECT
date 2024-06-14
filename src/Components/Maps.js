import React, { useEffect, useState } from 'react'
import Map, { Marker } from "react-map-gl"
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibregl from "maplibre-gl"
import { diagnostics } from "../JSON/diagnostics"
import { hospitals } from "../JSON/hospitals"
import { medical } from "../JSON/medical"
import { allData } from "../JSON/allData"
import {Scrollbars} from "react-custom-scrollbars"
import "../CSS/Maps.css"
import mapLoading from "../Images/mapLoading.svg"
import SelectInput from '@mui/material/Select/SelectInput'
import hello from "react-progressive-image"

function Maps() {
  const [id, setId] = useState(0);
  const [userLat, setUserLat] = useState(null);
  const [loading, setLoading] = useState(true)
  const [userLong, setUserLong] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setUserLat(position.coords.latitude)
      setUserLong(position.coords.longitude)


    })
  })

  const [image, setImage] = useState();
  const setImageOf = async () => {

  }

  return (
    <div>
      {
        userLat != null ?
          <div className='maps'>
            <div className='mapDisplay'>
              <Map mapLib={maplibregl}

                onLoad={() => { setLoading(false) }}
                initialViewState={{
                  longitude: userLong,
                  latitude: userLat,
                  zoom: 14,
                }}
                style={{ width: '85vw', height: '95vh' }}
                mapStyle="https://api.maptiler.com/maps/basic-v2/style.json?key=NElc6b3384qGomeYg5QI"
              >
                <Marker longitude={userLong} latitude={userLat} color="black"></Marker>
                  <div  className='infoBox'>
                        Metrics:
                        <div className='info'>
                          <div className='infoColor' style={{backgroundColor:"green"}}></div>
                          Hospitals
                        </div>
                        <div className='info'>
                          <div className='infoColor' style={{backgroundColor:"blue"}}></div>
                          Medical-Stores
                        </div>
                        <div className='info'>
                          <div className='infoColor' style={{backgroundColor:"red"}}></div>
                          Diagnostics
                        </div>
                  </div>
                <div>
                  {
                    diagnostics.map((hospital) => {
                      return (<Marker longitude={hospital.longitude} color="red" latitude={hospital.lattitude} key={hospital.id} onClick={() => {
                        // setId(parseInt(hospital.id[hospital.id.length-1])-1);


                      }}></Marker>)
                    })
                  }
                </div>

                <div>
                  {
                    hospitals.map((hospital) => {
                      return (<Marker longitude={hospital.longitude} color="green" latitude={hospital.lattitude} key={hospital.id} onClick={() => {
                        // setId(parseInt(hospital.id[hospital.id.length-1])-1);


                      }}></Marker>)
                    })
                  }
                </div>
                <div>
                  {
                    medical.map((hospital) => {
                      return (<Marker longitude={hospital.longitude} color="blue" latitude={hospital.lattitude} key={hospital.id} onClick={() => {
                        // setId(parseInt(hospital.id[hospital.id.length-1])-1);


                      }}></Marker>)
                    })
                  }
                </div>


              </Map>
            </div>



            <div className='maps-right'>
              {
                  <Scrollbars>
                    {
                                      allData.map((data) => {
                                        return (<div className='maps-content'>
                                          <img className='hospital' src={data.image}></img>
                                          <div className='maps-content-details'>
                                            <div><span className='headings'>Name:</span><span className='answers'>{data.name}</span></div>
                      
                                            <div><span className='headings'>Type:</span ><span className='answers'>{data.type}</span></div>
                                            <div><span className='headings'>Timings:</span ><span className='answers'>{data.openingtime} -  {data.closingtime}</span></div>
                                            <div><span className='headings'>Total Schemes:</span ><span className='answers'>6</span></div>

                                            {
                                              data.type==="pvt"?<button className='moredetails' style={{backgroundColor:"lightcoral"}}>More details</button>:<button className='moredetails' style={{backgroundColor:"lightgreen"}}>More details</button>
                                            }
                                            
                                           

                                          </div>
                                        </div>)
                                      })
                    }
                  </Scrollbars>
              }
            </div>

          </div> : <div></div>
      }
      Maps
    </div>

  )
}

export default Maps