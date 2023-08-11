import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Logo1 from '../AssetsMain/Img/whImages/logo.png';
import { Link } from 'react-router-dom';
// import "./Navbar.css";

const Navbar2 = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    const [navbar, setNavbar] = useState(false);

    return (


        <div>

        </div>


    );
};
export default Navbar2