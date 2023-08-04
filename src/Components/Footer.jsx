import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../AssetsMain/Css/Footer.css';
import { Link } from 'react-router-dom';
import Logo1 from "../AssetsMain/Img/whImages/logo.png";

const Footer3a = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const handleRefresh = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    };

    return (

        <div className="footer-1">

            <div className="container">
                {/* Start of container div */}

                <div className="row">
                    {/* Start of row div */}

                    <div className="col-md-4 col-sm-6 col-12">
                        {/* <a href="www.google.com"> */}

                        <img src={Logo1} id="footer_logo" alt="logo" />

                        {/* </a> */}
                        <p className="mt-20">Welcome to the Waheed Group of Companies! What started off over four decades
                            ago as a small business has today spread out by leaps and bounds to be-come Pakistan’s
                            largest business group. </p>

                        <ul className="social-links-footer">
                            <li>
                                {/* <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-facebook"></i></a> */}
                            </li>
                            <li>
                                {/* <a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-twitter"></i></a> */}
                            </li>
                            <li>
                                {/* <a href="http://www.skype.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-skype"></i></a> */}
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-4 col-sm-6 col-12">
                        <h2>Recent news</h2>

                        <ul className="footer-news mt-25">

                            <li>
                                {/* <a href="latestNews.html#Mr Abdul Waheed, Chairman PVMA KN News"> */}
                                <Link to="http://www.google.com" onClick={handleRefresh} target="_blank" rel="noopener noreferrer">

                                    Mr Abdul Waheed, Chairman PVMA KN News

                                    {/* </a> */}
                                </Link>
                                <strong>
                                    <i class="fa fa-calendar"></i> 2020-10-19
                                </strong>
                            </li>

                            <li>

                                {/* <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan"> */}
                                Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan
                                {/*  </a> */}
                                <strong><i
                                    className="fa fa-calendar"></i> 2019-06-20</strong></li>
                            <li>
                                {/* <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE"> */}
                                Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE
                                {/*    </a>   */}
                                <strong><i
                                    className="fa fa-calendar"></i>
                                    2019-06-20</strong></li>
                        </ul>

                    </div>


                    <div className="col-md-4 col-sm-6 col-12">
                        <div id="subMessage"></div>
                        <h2>Subscribe</h2>
                        <div className="footer-subscribe-form mt-25" id="subscribeFromFooter">
                            <div className="d-table full-width">
                                <div className="d-table-cell">
                                    <input type="text" id="subEmail"
                                        placeholder="Your Email adress" />
                                </div>
                                <div className="d-table-cell"><button id="saveSub" style={{ height: "50px" }} onclick="savesub()"><i
                                    className="fa fa-envelope"></i></button>
                                </div>
                            </div>
                        </div>
                        <p className="mt-10">Get latest updates and offers.</p>
                    </div>







                    {/* End of row Div is blow this line */}
                </div>

                <div className="footer-1-bar">
                    <p style={{ color: "white" }}>
                        {/* <p> */}
                        {/* <a href="http://www.waheedgroup.com.pk/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} > */}
                        Waheed Hafeez || Group of Companies
                        {/* </a> */}
                        ©2023. All Rights Reserved.
                    </p>
                </div>

                {/* End of container Div */}
            </div>
            {/* End of Div Foote-1    */}



        </div >

    )
}

export default Footer3a