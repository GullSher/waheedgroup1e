import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Services from './Services';

import ContactUs from "./ContactUs";
// import Chairman from "./Components/Chairman";
import Awards from "./Awards";
import Directors from "./Directors";
import EnergySector from "./EnergySector";
import Hotel from "./Hotel";
import IndustrialFat from "./IndustrialFat";
import NotFound from "./NotFound";
import OilandGhee from "./OilandGhee";
import SignUp from "./SignUp";
import Transport from "./Transport";
import LatestNews from './LatestNews';
import WGCInterprisesLtd from "./WGCInterprisesLtd";
import OurProducts from "./OurProducts";
import MediaGallery from "./MediaGallery";
// import Chairman1 from "./Components/Chairman1";
// import Directors1 from "./Components/Directors1";
import Chairman2 from "./Components/Chairman2";
// import Navbarold from "./Components/Navbarold";
// import OwlCarousel from "./Components/OwlCarousel";






const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                {/* <Route path="/Chairman" element={<Chairman />} /> */}
                {/* <Route path="/Chairman1" element={<Chairman1 />} /> */}
                <Route path="/Chairman2" element={<Chairman2 />} />
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
        </Router>
    );
};

export default AppRoutes;