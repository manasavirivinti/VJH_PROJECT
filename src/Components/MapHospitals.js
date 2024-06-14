import React, { useEffect, useState } from 'react'
import Map, { Marker } from "react-map-gl"
import 'maplibre-gl/dist/maplibre-gl.css'
import maplibregl from "maplibre-gl"
import { diagnostics } from "../JSON/diagnostics"
import { hospitals } from "../JSON/hospitals"
import { medical } from "../JSON/medical"
import { allData } from "../JSON/allData"
import { Scrollbars } from "react-custom-scrollbars"
import "../CSS/Maps.css"
import mapLoading from "../Images/mapLoading.svg"
import SelectInput from '@mui/material/Select/SelectInput'
import hello from "react-progressive-image"
import { Popup } from "react-leaflet"
import Modal from "react-modal"

function Maps() {
    const [id, setId] = useState(0);
    const [userLat, setUserLat] = useState(null);
    const [loading, setLoading] = useState(true)
    const [userLong, setUserLong] = useState(null);
    const [modalName, setModalName] = useState();
    const [modalImg, setModalImg] = useState()
    const [modalOpenTimings, setOpenimgTimings] = useState();
    const [modalClosingTimings, setCloseimgTimings] = useState()
    const [modalAvail, setModalAvail] = useState();
    const [modalServices, setModalServices] = useState(["pulmonology", "Ayurvedic"])
    const [modalSchemes, setModalSchemes] = useState(["SC_01", "SC_07"])
    const [modaltype, setModalType] = useState();
    const [modalWebsite, setModalWebsite] = useState();
    const [modalCell, setModalCell] = useState()
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedService,setSelectedService] = useState(null)
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setUserLat(position.coords.latitude)
            setUserLong(position.coords.longitude)


        })
    })
    const handleFilterChange = (e) => {
        setSelectedService(e.target.value);
    };
    const filterHospitals =(service) =>{
        setSelectedService(service);
    };
    const resetFilter=()=>{
        setSelectedService(null);
    };
    const [image, setImage] = useState();
    const setImageOf = async () => {

    }
    const filteredHospitals = selectedService
        ? hospitals.filter((hospital) => hospital.services.includes(selectedService))
        : hospitals;
    return (
        <div>
            {
                userLat != null ?
                    <div className='maps'>
                        <div className='mapDisplay'>
                            <Modal isOpen={modalOpen} className="modal">

                                <img src={modalImg}></img>
                                <div className='modalDiv'>
                                    <div>Hospital Name: {modalName}</div>
                                    <div>Opening time: {modalOpenTimings}</div>
                                    <div>Closing time: {modalClosingTimings}</div>
                                    <div>Website: {modalWebsite}</div>
                                    <div>Services:
                                        {
                                            modalServices.map((e) => {
                                                return <span className='ele'>{e}</span>
                                            })
                                        }
                                    </div>
                                    <div>
                                        Schemes:
                                        {
                                            modalServices.map((e) => {
                                                return <span className='ele'>{e}</span>
                                            })
                                        }
                                    </div>
                                    <div>Type: {modaltype}</div>
                                    <div>Availabilty Name: {modalAvail}</div>
                                    <div>Phone no:{modalCell}</div>

                                    <button className='modalButton' style={{ backgroundColor: "green" }}>Contact Us</button>
                                    <button className='modalButton' style={{ backgroundColor: "red" }} onClick={() => setModalOpen(false)}>close</button>
                                </div>


                            </Modal>
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
                                <div className='infoBox'>
                                    Metrics:
                                    <div className='info'>
                                        <div className='infoColor' style={{ backgroundColor: "green" }}></div>
                                        Hospitals
                                    </div>
                                    <div className='info'>
                                        <div className='infoColor' style={{ backgroundColor: "blue" }}></div>
                                        Medical-Stores
                                    </div>
                                    <div className='info'>
                                        <div className='infoColor' style={{ backgroundColor: "red" }}></div>
                                        Diagnostics
                                    </div>
                                </div>
                                {filteredHospitals.map((hospital)=>(
                                    <div className='markerPop'>
                                    <Marker 
                                    longitude={hospital.longitude} 
                                    color="green" 
                                    latitude={hospital.lattitude} 
                                    key={hospital.id}
                                     onClick={() => {
                                        // setId(parseInt(hospital.id[hospital.id.length-1])-1)
                                        setModalName(hospital.name);
                                        setModalAvail(hospital.availabilty)
                                        setModalCell(hospital.cellno)
                                        setModalImg(hospital.image)
                                        setModalType(hospital.type)
                                        setModalWebsite(hospital.website)
                                        setCloseimgTimings(hospital.closingtime)
                                        setOpenimgTimings(hospital.openingtime)
                                        setModalServices(hospital.services)
                                        console.log(hospital.services)
                                        setModalOpen(true)

                                    }}></Marker>
                                </div>
                                ))}




                            </Map>
                        </div>
                       
                        <div className='maps-right'>
                            {
                                <Scrollbars>
                                     <div class="filtercss">
                                        <span className='maincss'>
                                            <div className="filter-dropdown-container">
                                            <label htmlFor="serviceFilter">Filter by Service: </label>
                                            <select
                                                id="serviceFilter"
                                                value={selectedService}
                                                onChange={handleFilterChange}
                                            >
                                                <option value="">Select a service</option>
                                                <option value="general">General</option>
                                                <option value="Multispecialty">Multispecialty</option>
                                                <option value="paediatric">Paediatric</option>
                                                <option value="Ayurveda">Ayurveda</option>
                                                <option value="Dental">Dental</option>
                                                <option value="nephrology">Nephrology</option>
                                                <option value="cardio">Cardiology</option>
                                                <option value="neuro">Neurology</option>
                                                <option value="vacination">Vacination</option>
                                                <option value="pulmonology">Pulmonology</option>
                                                {/* Add more options for other services as needed */}
                                            </select>
                                            <button onClick={resetFilter} className="filter-button reset">Reset Filter</button>
                                        </div>
                                        </span>
                                        </div>
                                    
                                        {filteredHospitals.map((data) => (
                                            <div className='maps-content' key={data.id}>
                                                <img className='hospital' src={data.image} alt={data.name}></img>
                                                <div className='maps-content-details'>
                                                    <div><span className='headings'>Name:</span><span className='answers'>{data.name}</span></div>

                                                    <div><span className='headings'>Type:</span ><span className='answers'>{data.type}</span></div>
                                                    <div><span className='headings'>Timings:</span ><span className='answers'>{data.openingtime} -  {data.closingtime}</span></div>
                                                    <div><span className='headings'>Total Schemes:</span ><span className='answers'>6</span></div>

                                                    {
                                                        data.type === "pvt" ? <button className='moredetails' style={{ backgroundColor: "lightcoral" }} onClick={() => {
                                                            setModalName(data.name);
                                                            setModalAvail(data.availabilty)
                                                            setModalCell(data.cellno)
                                                            setModalImg(data.image)
                                                            setModalType(data.type)
                                                            setModalWebsite(data.website)
                                                            setCloseimgTimings(data.closingtime)
                                                            setOpenimgTimings(data.openingtime)
                                                            setModalServices(data.services)
                                                            console.log(data.services)
                                                            setModalOpen(true)
                                                        }}>More details</button> : <button className='moredetails' style={{ backgroundColor: "lightgreen" }}

                                                            onClick={() => {
                                                                setModalName(data.name);
                                                                setModalAvail(data.availabilty)
                                                                setModalCell(data.cellno)
                                                                setModalImg(data.image)
                                                                setModalType(data.type)
                                                                setModalWebsite(data.website)
                                                                setCloseimgTimings(data.closingtime)
                                                                setOpenimgTimings(data.openingtime)
                                                                setModalServices(data.services)
                                                                console.log(data.services)
                                                                setModalOpen(true)
                                                            }}
                                                        >More details</button>
                                                    }



                                                </div>
                                            </div>
                                        ))}
                                </Scrollbars>
                            }
                        </div>

                    </div> : <div></div>
            }
            <br />
            <br /><br /><br />
            </div>

    )
}

export default Maps