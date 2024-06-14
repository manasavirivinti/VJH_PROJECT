import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import HospitalLogin from './Components/HospitalLogin';
import AboutUs from './Components/AboutUs';
import Maps from './Components/Maps';
import HospitalRegsitration from './Components/HospitalRegsitration';
import Talk from './Components/Talk';
import Filter from './Components/Filter';
import AllSchemes from './Components/AllSchemes';
import MapHospitals from "./Components/MapHospitals"
import MapMedicalStoes from "./Components/MapMedicalStores"
import MapDiagnosticsMap from "./Components/MapDiagnosticsMap"
import { Route, Routes } from "react-router-dom"
function App() {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route element={<Home />} path='/'></Route>
                <Route element={<AboutUs />} path='/aboutus'></Route>
                <Route element={<HospitalLogin />} path='/hospitallogin'></Route>
                <Route element={<Maps />} path='/maps'></Route>
                <Route element={<HospitalRegsitration/>} path='/hospitalregistration'></Route>
                <Route element={<Talk/>} path='/talk'></Route>
                <Route element={<AllSchemes/>} path='/allschemes'></Route>
                <Route element={<MapHospitals/>} path='/hospitalsnearby'></Route>
                <Route element={<MapMedicalStoes/>} path='/medicalnearby'></Route>
                <Route element={<MapDiagnosticsMap/>} path='/diagnosticsnearby'></Route>
                <Route element={<Filter/>} path='/filterhsp'></Route>
            </Routes>
        </div>
    );
}

export default App;
