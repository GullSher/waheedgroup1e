import React from "react";
import Logo1 from "../AssetsMain/Img/whImages/logo.png"

const Navbar = () => {
    return (
        <div className="navigation-fixed-wrapper" style={{ top: '0px', color: 'darkseagreen' }}>
            <nav id="navigation4 " className="container navigation navigation-landscape" style={{ width: '1423px' }}>

                <div className="nav-header"><a className="nav-brand" href="index.html">
                    <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" /></a>
                    {/* <img className="main-logo" style={{height: '40px'}} src={{"../../"}} alt="logo-not-found" id="main_logo" /></a> */}
                    <div className="nav-toggle"></div>
                </div>

                <div className="nav-menus-wrapper">
                    <span className="nav-menus-wrapper-close-button">✕</span>
                    <ul className="nav-menu align-to-right">
                        <li className="active" >
                            <a href="Home">Home</a>
                        </li>

                        <li className="dropdown">
                            {/* <a href="AboutUs">About Us
                            <span className="submenu-indicator submenu-indicator-chevron"></span>
                            </a> */}
                            <a data-toggle="dropdown" href="AboutUs">About Us
                                {/* <a className="dropdown-toggle" data-toggle="dropdown" href="#">About Us */}
                                <span className="submenu-indicator submenu-indicator-chevron"></span></a>
                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                <li><a href="Chairman">Chairman</a></li>
                                <li><a href="Chairman1">Chairman1</a></li>
                                <li><a href="Chairman2">Chairman2</a></li>
                                <li><a href="Directors">Directors</a></li>
                                <li><a href="Awards">Awards</a></li>
                                <li><a href="AboutUs">About Us </a></li>
                            </ul>
                        </li>
                        <li className='dropdown'>
                            <a data-toggle="dropdown" href="OilandGhee">Our Concerns
                                <span className="submenu-indicator submenu-indicator-chevron"></span></a>
                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                <li><a href="OilandGhee">Oil & Ghee</a></li>
                                <li><a href="IndustrialFat">Industrial Fat</a></li>
                                <li><a href="Transport">Transport</a></li>
                                <li><a href="Hotel">Hotel</a></li>
                                <li><a href="EnergySector">Energy Sector</a></li>
                                <li><a href="WGCInterprisesLtd">WGC Interprises Ltd</a></li>
                            </ul>
                        </li>
                        <li><a href="OurProducts">Our Products</a></li>
                        <li><a href="LatestNews">Latest News</a></li>
                        <li><a href="MediaGallery">Media Gallery</a></li>
                        <li><a href="ContactUs">Contact Us</a></li>
                    </ul>
                </div>
                <div className="nav-overlay-panel"></div>
            </nav >
        </div >

    )
}

export default Navbar


