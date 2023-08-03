import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Logo1 from '../AssetsMain/Img/whImages/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (
        // <Router>
        <div className="navigation-fixed-wrapper" style={{ top: '0px', color: 'darkseagreen' }}>

            <nav id="navigation4 " className="container navigation navigation-landscape" style={{ width: '1423px' }}>

                <div className="nav-header">
                    <Link to="/">
                        <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" />
                    </Link>
                    <div className="nav-toggle"></div>
                </div>


                <div className="nav-menus-wrapper">
                    <span className="nav-menus-wrapper-close-button">✕</span>

                    <ul className="nav-menu align-to-right">
                        <li className="active">
                            <Link to="/" onClick={handleRefresh}> Home </Link></li>

                        <li className="dropdown">
                            <Link to="/AboutUs" data-toggle="dropdown">
                                About Us
                                <span className="submenu-indicator submenu-indicator-chevron"></span>
                            </Link>

                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                <li><Link to="/Chairman2" onClick={handleRefresh} >Chairman</Link></li>
                                <li><Link to="/Directors" onClick={handleRefresh}>Directors</Link></li>
                                <li><Link to="/Awards" onClick={handleRefresh}>Awards</Link></li>
                                <li><Link to="/AboutUs" onClick={handleRefresh}>About Us</Link></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <Link to="/OilandGhee" data-toggle="dropdown">
                                Our Concerns
                                <span className="submenu-indicator submenu-indicator-chevron"></span>
                            </Link>

                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                <li> <Link to="/OilandGhee" onClick={handleRefresh}>Oil & Ghee </Link></li>
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


        </div >
        // </Router>

    );
};
export default Navbar