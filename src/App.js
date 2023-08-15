import React from "react";
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useHistory } from "react-router-dom";
import UpperNavbar from "./Components/UpperNavbar";
// import { Container } from "react-bootstrap";

// These Blow Files are sure 11-8-2023 Needed for effects

// import '../src/AssetsMain/Css/styles-5.css';

// These Uper Files are sure 11-8-2023 Needed for effects

//import '../src/AssetsMain/Js/bootstrap.min.js';
// import '../src/AssetsMain/Js/jquery.min.js';
// import '../src/AssetsMain/Js/main';
// import jQuery from "jQuey";
// import $ from "jQuery"
// import '../src/AssetsMain/Css/bootstrap.min.css';
// import '../src/AssetsMain/Css/jquery.css';
// import '../src/AssetsMain/Css/default.css';
// import '../src/AssetsMain/Css/navigation.css';
// import '../src/AssetsMain/Css/style.css';
// import '../src/AssetsMain/Css/Pages.css';
// import '../src/AssetsMain/Css/plugins.css';

// import '../src/AssetsMain/Css/slicknav.css';
// import '../src/AssetsMain/Css/themify-icons.css';
// import '../src/AssetsMain/Css/rev-settings.css';
// import '../src/AssetsMain/Css/themify-icons.css';
import '../src/AssetsMain/Css/animate.css';
// import '../src/AssetsMain/Css/font-awesome.min.css';
// import '../src/AssetsMain/Css/fontawesome-all.css';
// import '../src/AssetsMain/Css/icomoon.css';
import '../src/AssetsMain/Css/owl.carousel.css';

// import '../src/AssetsMain/Css/responsive.css';


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
import News1 from './Components/LatestNews#a1';
import News2 from './Components/LatestNews#a2';
import News3 from './Components/LatestNews#a3';

// import Navbar1 from './Components/Navbar1';
// import Navbar1a from './Components/Navbar1a';
// import Navbar2a from "./Components/Navbar2a";
import Navbar2b from "./Components/Navbar2b";


// import { HashLink } from 'react-router-hash-link';
// import Fbvideo from "./Components/Fbvideo";
// import '../src/AssetsMain/Js.map.js';
// import '../src/AssetsMain/Js/navigation.fixed';
// import '../src/AssetsMain/Js/navigation.js';
// import '../src/AssetsMain/Js/Chart.bundle.js';
// import '../src/AssetsMain/Js/plugins.js';
// import '../src/AssetsMain/Js/rev-slider/jquery.themepunch.tools.min.js';
// import '../src/AssetsMain/Js/rev-slider/jquery.themepunch.revolution.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.actions.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.carousel.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.kenburn.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.layeranimation.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.migration.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.parallax.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.navigation.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.slideanims.min.js';
// import '../src/AssetsMain/Js/rev-slider/revolution.extension.video.min.js';

function App() {
  return (
    <div className="App">

      <Router>
        <UpperNavbar />
        <Navbar />
        {/* <Navbar2a /> */}
        <Navbar2b />
        {/* <Navbar1 /> */}
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/AboutUs" Component={AboutUs} />
          <Route exact path="/Services" Component={Services} />
          <Route exact path="/ContactUs" Component={ContactUs} />
          <Route exact path="/Chairman" Component={Chairman} />
          <Route exact path="/Chairman1" Component={Chairman1} />
          <Route exact path="/Chairman2" Component={Chairman2} />
          <Route exact path="/Awards" Component={Awards} />
          <Route exact path="/Directors" Component={Directors} />
          <Route exact path="/Directors1" Component={Directors1} />
          <Route exact path="/EnergySector" Component={EnergySector} />
          <Route exact path="/Hotel" Component={Hotel} />
          <Route exact path="/IndustrialFat" Component={IndustrialFat} />
          <Route exact path="/OilandGhee" Component={OilandGhee} />
          <Route exact path="/SignUp" Component={SignUp} />
          <Route exact path="/Transport" Component={Transport} />
          <Route exact path="/WGCInterprisesLtd" Component={WGCInterprisesLtd} />
          <Route exact path="/NotFound" Component={NotFound} />
          <Route exact path="/LatestNews" Component={LatestNews} />
          <Route exact path="/OurProducts" Component={OurProducts} />
          <Route exact path="/MediaGallery" Component={MediaGallery} />
          <Route exact path="/LatestNews/:elementId" Component={News1} />
          <Route exact path="/LatestNews/:elementId" Component={News2} />
          <Route exact path="/LatestNews/:elementId" Component={News3} />
        </Routes>

        <Footer />
      </Router>


    </div>
  );
}

export default App;
