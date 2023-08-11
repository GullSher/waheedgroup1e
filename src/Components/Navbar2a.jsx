import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
// import ReactDOM from 'react-dom/client';
import Logo1 from '../AssetsMain/Img/whImages/logo.png';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


// const Navbar2a = () => {
function Navbar2a() {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    const [navbar, setNavbar] = useState(false);

    return (
        <Navbar expand="lg" className="bg-body-tertiary">

            <Container>

                {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                <Navbar.Brand>
                    <Link to="/">
                        <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" />
                    </Link>      </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">


                        <Nav.Link to="/" active onClick={handleRefresh}>Home</Nav.Link>
                        {/* <Link to="/" onClick={handleRefresh}> Home </Link></li> */}


                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="AboutUsDropdown" id="basic-nav-dropdown">


                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Button>Button</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar >

    );
};
export default Navbar2a


