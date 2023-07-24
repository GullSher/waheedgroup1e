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

      {/* <Video1 /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route exact path='/Home' Component={Home} /> */}
          {/* <Route exact path="/Home" Component={Home} /> */}
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
          {/* <Route exact path="/Topbar" Component={Topbar} /> */}
          <Route exact path="/LatestNews" Component={LatestNews} />
          <Route exact path="/OurProducts" Component={OurProducts} />
          <Route exact path="/MediaGallery" Component={MediaGallery} />
          {/* <Route exact path="/OwlCarousel" Component={OwlCarousel} /> */}
          {/* <HashLink to="/LatestNews#LNh1">Press me to go LNh1</HashLink> */}
          {/* <Route exact path="/Fbvideo" Component={Fbvideo} /> */}
        </Routes>
      </BrowserRouter>

      {/* <Home /> */}

      <Footer />



    </div>
  );
}

export default App;
