import React, { useState } from "react";
import { HashRouter as Router, Routes, Link, Route } from "react-router-dom";
import Logo1 from "../AssetsMain/Img/whImages/logo.png";


import Home from "./Home";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Chairman from "./Chairman2";
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


const Navbar = () => {
    const [refreshKey, setRefreshKey] = useState(0);

    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };


    return (

        <Router>
            <div className="navigation-fixed-wrapper" style={{ top: '0px', color: 'darkseagreen' }
            }>
                <nav id="navigation4 " className="container navigation navigation-landscape" style={{ width: '1423px' }}>

                    <div className="nav-header">

                        <Link to="/" onClick={handleRefresh}>
                            {/* Use the Link component with the 'to' prop to navigate */}
                            <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" />
                        </Link>

                        <div className="nav-toggle"></div>
                    </div>

                    <div className="nav-menus-wrapper">
                        <span className="nav-menus-wrapper-close-button">✕</span>


                        <ul className="nav-menu align-to-right">
                            <li className="active" >
                                {/* <a href="/">Home</a> */}
                                <Link to="/" onClick={handleRefresh} >Home</Link>
                                {/* <Link to="#" onClick={handleRefresh}>Home</Link> */}
                            </li>

                            <li className='dropdown'>
                                <Link to="/AboutUs" data-toggle="dropdown">About Us {/* Use Link for About Us */}
                                    <span className="submenu-indicator submenu-indicator-chevron"></span>
                                </Link>
                                <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                    {/* <li><Link to="/Chairman" onClick={handleRefresh}>Chairman</Link></li> */}
                                    {/* <li><Link to="/Chairman1">Chairman1</Link></li> */}
                                    <li><Link to="/Chairman2">Chairman2</Link></li>
                                    <li><Link to="/Directors" onClick={handleRefresh}>Directors</Link></li>
                                    <li><Link to="/Awards" onClick={handleRefresh}>Awards</Link></li>
                                    <li><Link to="/AboutUs" onClick={handleRefresh}>About Us</Link></li>
                                </ul>
                            </li>

                            <li className='dropdown'>
                                <Link to="/OilandGhee" data-toggle="dropdown">Our Concerns {/* Use Link for Oil and Ghee */}
                                    <span className="submenu-indicator submenu-indicator-chevron"></span>
                                </Link>

                                <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                    <li><Link to="/OilandGhee" onClick={handleRefresh}>Oil & Ghee</Link></li>
                                    <li><Link to="/IndustrialFat" onClick={handleRefresh}>Industrial Fat</Link></li>
                                    <li><Link to="/Transport" onClick={handleRefresh}>Transport</Link></li>
                                    <li><Link to="/Hotel" onClick={handleRefresh}>Hotel</Link></li>
                                    <li><Link to="/EnergySector" onClick={handleRefresh}>Energy Sector</Link></li>
                                    <li><Link to="/WGCInterprisesLtd" onClick={handleRefresh}>WGC Interprises Ltd</Link></li>
                                </ul>
                            </li>

                            <li><Link to="/OurProducts" onClick={handleRefresh}>Our Products</Link></li>
                            <li><Link to="/LatestNews" onClick={handleRefresh}>Latest News</Link></li>
                            <li><Link to="/MediaGallery" onClick={handleRefresh}>Media Gallery</Link></li>
                            <li><Link to="/ContactUs" onClick={handleRefresh}>Contact Us </Link></li>


                        </ul>

                    </div>
                    <div className="nav-overlay-panel"></div>
                </nav >

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



            </div >
        </Router>



    )
}
export default Navbar


