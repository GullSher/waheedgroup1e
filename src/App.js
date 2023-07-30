import React from "react";
import './App.css';
// import { HashRouter, Routes, Route } from "react-router-dom"; // Import HashRouter and Switch
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Import BrowserRouter 
import UpperNavbar from "./Components/UpperNavbar";

import Navbar from "./Components/Navbar";
//  import Video from './Components/Video';

import Home from "./Components/Home";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Chairman from "./Components/Chairman";
import Awards from "./Components/Awards";
import Directors from "./Components/Directors";
import EnergySector from "./Components/EnergySector";
import Hotel from "./Components/Hotel";
import IndustrialFat from "./Components/IndustrialFat";
import NotFound from "./Components/NotFound";
import OilandGhee from "./Components/OilandGhee";
import SignUp from "./Components/SignUp";
import Transport from "./Components/Transport";
import LatestNews from './Components/LatestNews';
import WGCInterprisesLtd from "./Components/WGCInterprisesLtd";
import OurProducts from "./Components/OurProducts";
import MediaGallery from "./Components/MediaGallery";
import Footer from './Components/Footer';
// import Chairman1 from "./Components/Chairman1";
// import Directors1 from "./Components/Directors1";
// import Chairman2 from "./Components/Chairman2";
import Navbarold from "./Components/Navbarold";
// import OwlCarousel from "./Components/OwlCarousel";


// import { HashLink } from 'react-router-hash-link';
// import Fbvideo from "./Components/Fbvideo";

function App() {
  return (
    <div>
      {/* <div className="App"> */}
      <UpperNavbar />
      <Navbar />
      <Navbarold />
      {/* <Fbvideo /> */}


      <BrowserRouter>
        {/* <HashRouter> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Chairman" element={<Chairman />} />
          {/* <Route path="/Chairman1" element={<Chairman1 />} /> */}
          {/* <Route path="/Chairman2" element={<Chairman2 />} /> */}
          <Route path="/Directors" element={<Directors />} />
          {/* <Route path="/Directors1" element={<Directors1 />} /> */}
          <Route path="/Awards" element={<Awards />} />
          <Route path="/OilandGhee" element={<OilandGhee />} />
          <Route path="/IndustrialFat" element={<IndustrialFat />} />
          <Route path="/Transport" element={<Transport />} />
          <Route path="/Hotel" element={<Hotel />} />
          <Route path="/EnergySector" element={<EnergySector />} />
          <Route path="/WGCInterprisesLtd" element={<WGCInterprisesLtd />} />
          <Route path="/OurProducts" element={<OurProducts />} />
          <Route path="/LatestNews" element={<LatestNews />} />
          <Route path="/MediaGallery" element={<MediaGallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/NotFound" element={<NotFound />} />
        </Routes>
        {/* </HashRouter> */}
      </BrowserRouter>

      <Footer />

    </div>
  );
}

export default App;
