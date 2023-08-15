import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
import Logo1 from '../AssetsMain/Img/whImages/logo.png';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navbar2b() {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    const [navbar, setNavbar] = useState(false);

    return (

        < Navbar expand="xl" className="bg-body-tertiary" >
            {/* <Navbar bg="light" data-bs-theme="light"> */}
            {/* <Navbar expand="xl" className="bg-body-tertiary"> */}
            {/*  <Navbar expand="lg" className="bg-body-tertiary"> */}
            < Container>

                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                < Navbar.Brand >
                    <Link to="/">
                        <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" />
                    </Link>  </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">


                    <Nav className="me-auto" >

                        <Nav.Link href="/" onClick={handleRefresh}>Home</Nav.Link>


                        <NavDropdown title="AboutUs" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/Chairman2">Chairman</NavDropdown.Item>
                            <NavDropdown.Item href="#/Directors">Director</NavDropdown.Item>
                            <NavDropdown.Item href="#/Awards">Awards</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#/AboutUs">AboutUs</NavDropdown.Item>
                        </NavDropdown>




                        <NavDropdown title="Our Concerns" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#/OilandGhee" onClick={handleRefresh}>Oil & Ghee</NavDropdown.Item>
                            <NavDropdown.Item href="#/IndustrialFat" onClick={handleRefresh}>Industrial Fat

                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/Transport" onClick={handleRefresh}>Transport</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#/Hotel" onClick={handleRefresh}>
                                Hotel
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#/EnergySector" onClick={handleRefresh}>Energy Sector</NavDropdown.Item>
                            <NavDropdown.Item href="#/WGCInterprisesLtd" onClick={handleRefresh}>WGC Interprises Ltd</NavDropdown.Item>
                        </NavDropdown>



                        <Nav.Link href="#/OurProducts">Our Products</Nav.Link>

                        <Nav.Link href="#/LatestNews">Latest News</Nav.Link>

                        <Nav.Link href="#/MediaGallery">Media Gallery</Nav.Link>

                        <Nav.Link href="#/ContactUs">Contact Us</Nav.Link>




                    </Nav>

                </Navbar.Collapse>

            </Container >

        </Navbar >
    );
}

export default Navbar2b;