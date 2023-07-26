import React from "react";
import { Link } from "react-router-dom";
import Logo1 from "../AssetsMain/Img/whImages/logo.png";




const Navbar = () => {
    return (
        <div className="navigation-fixed-wrapper" style={{ top: '0px', color: 'darkseagreen' }}>
            <nav id="navigation4 " className="container navigation navigation-landscape" style={{ width: '1423px' }}>

                <div className="nav-header">

                    <a className="nav-brand" href="index.html">
                        <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" /></a>

                    <Link to="/"> {/* Use the Link component with the 'to' prop */}
                        <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" />
                    </Link>



                    {/* <img className="main-logo" style={{height: '40px'}} src={{"../../"}} alt="logo-not-found" id="main_logo" /></a> */}
                    <div className="nav-toggle"></div>
                </div>

                <div className="nav-menus-wrapper">
                    <span className="nav-menus-wrapper-close-button">✕</span>
                    <ul className="nav-menu align-to-right">
                        <li className="active" >
                            {/* <a href="Home">Home</a> */}
                            {/* <a href="/">Home</a> */}
                            <Link to="/">Home</Link>
                        </li>



                        <li className='dropdown'>

                            <Link to="/AboutUs">About Us {/* Use Link for About Us */}
                                <span className="submenu-indicator submenu-indicator-chevron"></span>
                            </Link>
                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                <li><Link to="/Chairman">Chairman</Link></li>
                                <li><Link to="/Chairman1">Chairman1</Link></li>
                                <li><Link to="/Chairman2">Chairman2</Link></li>
                                <li><Link to="/Directors">Directors</Link></li>
                                <li><Link to="/Awards">Awards</Link></li>
                                <li><Link to="/AboutUs">About Us</Link></li>
                            </ul>
                        </li>

                        <li className='dropdown'>
                            <Link to="/ OilandGhee">Our Concerns {/* Use Link for About Us */}
                                <span className="submenu-indicator submenu-indicator-chevron"></span>
                            </Link>

                            <ul className="dropdown-menu nav-submenu" style={{ right: 'auto' }}>
                                <li><Link to="/OilandGhee">Oil & Ghee</Link></li>
                                <li><Link to="/IndustrialFat">Industrial Fat</Link></li>
                                <li><Link to="/Transport">Transport</Link></li>
                                <li><Link to="/Hotel">Hotel</Link></li>
                                <li><Link to="/EnergySector">Energy Sector</Link></li>
                                <li><Link to="/WGCInterprisesLtd">WGC Interprises Ltd</Link></li>
                            </ul>
                        </li>


                        <li><Link to="/OurProducts">Our Products</Link></li>
                        <li><Link to="/LatestNews">Latest News</Link></li>
                        <li><Link to="/MediaGallery">Media Gallery</Link></li>
                        <li><Link to="/ContactUs">Contact Us </Link></li>
                        <li><Link to="/">Energy Sector</Link></li>
                        <li><Link to="/">WGC Interprises Ltd</Link></li>



                    </ul>
                </div>
                <div className="nav-overlay-panel"></div>
            </nav >
        </div >

    )
}

export default Navbar


