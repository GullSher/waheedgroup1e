import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UpperNavbar from "./Components/UpperNavbar";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/AssetsMain/Css/bootstrap.min.css';
import '../src/AssetsMain/Css/default.css';
import '../src/AssetsMain/Css/navigation.css';
import '../src/AssetsMain/Css/style.css';
import '../src/AssetsMain/Css/Pages.css';
import '../src/AssetsMain/Css/plugins.css';
import '../src/AssetsMain/Css/styles-5.css';
import '../src/AssetsMain/Css/slicknav.css';
// import '../src/AssetsMain/Css/themify-icons.css';
// import '../src/AssetsMain/Css/rev-settings.css';
// import '../src/AssetsMain/Css/themify-icons.css';
import '../src/AssetsMain/Css/animate.css';
// import '../src/AssetsMain/Css/font-awesome.min.css';
// import '../src/AssetsMain/Css/fontawesome-all.css';
// import '../src/AssetsMain/Css/icomoon.css';
import '../src/AssetsMain/Css/owl.carousel.css';
import '../src/AssetsMain/Css/responsive.css';

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
import Chairman1 from "./Components/Chairman1";
import Directors1 from "./Components/Directors1";
import Chairman2 from "./Components/Chairman2";
// import OwlCarousel from "./Components/OwlCarousel";


// import { HashLink } from 'react-router-hash-link';
// import Fbvideo from "./Components/Fbvideo";

function App() {
  return (
    <div className="App">
      <UpperNavbar />
      <Navbar />
      {/* <Fbvideo /> */}

      <BrowserRouter>
        <Routes>
          <Route exact path="_" element={<Home />} />
          <Route exact path="/Chairman" element={<Chairman />} />
          <Route exact path="/Chairman1" element={<Chairman1 />} />
          <Route exact path="/Chairman2" element={<Chairman2 />} />
          <Route exact path="/Directors" element={<Directors />} />
          <Route exact path="/Directors1" element={<Directors1 />} />
          <Route exact path="/Awards" element={<Awards />} />
          <Route exact path="/AboutUs" element={<AboutUs />} />
          <Route exact path="/OilandGhee" element={<OilandGhee />} />
          <Route exact path="/IndustrialFat" element={<IndustrialFat />} />
          <Route exact path="/Transport" element={<Transport />} />
          <Route exact path="/Hotel" element={<Hotel />} />
          <Route exact path="/EnergySector" element={<EnergySector />} />
          <Route exact path="/WGCInterprisesLtd" element={<WGCInterprisesLtd />} />
          <Route exact path="/OurProducts" element={<OurProducts />} />
          <Route exact path="/LatestNews" element={<LatestNews />} />
          <Route exact path="/MediaGallery" element={<MediaGallery />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/Services" element={<Services />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/NotFound" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
