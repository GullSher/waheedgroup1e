import React from 'react'
// import Img1Home from '../AssetsMain/Uploads/Business/Fahadhammad.png';
import ImgC1 from "../AssetsMain/Uploads/Business/c1.png";
import ImgC2 from "../AssetsMain/Uploads/Business/c2.png";
import ImgC3 from "../AssetsMain/Uploads/Business/c3.png";
import ImgC4 from "../AssetsMain/Uploads/Business/c4.png";
import ImgC5 from "../AssetsMain/Uploads/Business/c5.png";
import ImgC6 from "../AssetsMain/Uploads/Business/c6.png";
import ImgC7 from "../AssetsMain/Uploads/Business/c7.png";
import ImgC8 from "../AssetsMain/Uploads/Business/c8.png";

import ImgOilandGhee from "../AssetsMain/Uploads/oil&ghee.jpg";
import ImgindustrialFat from "../AssetsMain/Uploads/industrialFat.jpg";
import ImgLaraibinn from "../AssetsMain/Uploads/laraibinn.jpg";
import Imgwa0003 from "../AssetsMain/Uploads/577475img-20190206-wa0003.jpg";
import Waheed from '../AssetsMain/Uploads/waheed.jpg';
import Wa0007 from "../AssetsMain/Uploads/46306img-20190411-wa0007.jpg";
import Img9613 from '../AssetsMain/Uploads/668220img_9613.jpg';
import Img488762 from '../AssetsMain/Uploads/488762capture.jpg';
import Img485289 from '../AssetsMain/Uploads/485289img_9632.jpg';
import Img413919 from '../AssetsMain/Uploads/413919img_9623.jpg';
import Imgwcc03 from "../AssetsMain/Uploads/wcc-03.jpg";
import ImgESector from "../AssetsMain/Uploads/energySector.jpg";
import Imgtransport from "../AssetsMain/Uploads/transport-02.jpg";
// import { HashLink } from 'react-router-hash-link';
// import { ResponsiveEmbed } from 'react-responsive-embed';
import Fbvideo1 from './Fbvideo';

// import LNh1 from './LatestNews';
//  import LatestNews from './Components/LatestNews';



function Home() {
    return (

        <div>

            <Fbvideo1 />

            <div className="section-heading text-center">
                <h3 className="semi-bold font-size-33 " style={{ color: '#ef4736' }}>Latest News</h3>
            </div>
            {/* ======================= */}

            {/* ===================== */}
            {/* <div className="owl-carousel owl-theme testmonial-carousel-4 mt-10" style={{
                display: "flex",
                width: "200%",
                position: "inherit"
            }} > */}

            <div className="owl-carousel mt-10" style={{
                display: "flex",
                width: "200%",
                position: "inherit"
            }} >




                {/* <a href="LatestNews  #Mr Abdul Waheed, Chairman PVMA KN News> */}
                {/* <a href="LatestNews"> <h3>Mr Abdul Waheed, Chairman PVMA KN News </h3> */}
                {/* <a #Mr Abdul Waheed, Chairman PVMA KN News > */}
                {/* <a href="/LatestNews#Mr Abdul Waheed, Chairman PVMA KN News" style={{ width: "40px", height: "40px" }}> */}
                <a href="/LatestNews#a1" style={{ width: "40px", height: "40px" }}>
                    {/* <h3>#Mr Abdul Waheed, Chairman PVMA KN News </h3> */}

                    <div className="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img488762} className="img-responsive" alt="snap" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>44444 Mr Abdul Waheed, Chairman PVMA KN News</p>
                                </div>

                            </div>
                        </div>
                    </div >
                </a >
                {/* <a href="LatestNews#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE"></a> */}

                {/* <a href="Home"> */}
                {/* <a href="/LatestNews#a2"> */}
                {/* <h3>Mr. Abdul Waheed Sheikh - Welcoming Guest of Honor Mr. Faisal Javed Khan</h3> */}
                {/* <a href="/LatestNews#LatestNews1">Go to Page 3</a> */}
                <a href="/LatestNews#LatestNews1">
                    <div className="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img485289} className="img-responsive" alt="snap" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >

                {/* <a href="LatestNews#LNh1">Lets go to LNh1</a> */}

                {/* <HashLink to="/LatestNews#LNh1">Press me to go LNh1</HashLink> */}

                <a href="LatestNews#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">
                    {/* <a href='LNh1'> #Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE" */}
                    <div className="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img413919} className="img-responsive" alt="snap" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Ambassador
                                        of UAE</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >


                <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of Somalia">
                    <div className="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img9613} className="img-responsive" alt="snap" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Ambassador
                                        of Somalia</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >


                <a href="latestNews.html#Mr. Awais Karni - Director Waheed Group of Companies">
                    <div className="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={Wa0007} className="img-responsive" alt="snap1" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Awais Karni - Director Waheed Group of
                                        Companies</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >


                <a href="latestNews.html#Meeting with Chaudhry Shujaat Hussain">
                    <div className="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div className="row">
                            <div className="col-lg-5 col-sm-5 col-md-5">
                                <img src={Imgwa0003} className="img-responsive" alt="img" />
                            </div>
                            <div className="col-lg-7 col-sm-7 col-md-7">

                                <div className="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Meeting with Chaudhry Shujaat Hussain</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >

            </div >
            {/* ==================== */}
            {/* =====Testing Div starts of carousel================== */}
            <div class="owl-carousel owl-theme testmonial-carousel-4 mt-10">
                <h1>This is Group One</h1>
                <a href="latestnews.html#Mr Abdul Waheed, Chairman PVMA KN News">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img488762} className="img-responsive" alt="snap" />
                                {/* <img src="uploads/488762capture.jpg" class="img-responsive" alt="img"> */}
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ minHeight: '200px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr Abdul Waheed, Chairman PVMA KN News</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestnews.html#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img485289} className="img-responsive" alt="snap" />
                                {/* <img src="uploads/485289img_9632.jpg" class="img-responsive" alt="img"> */}
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }} >
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestnews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img413919} className="img-responsive" alt="snap" />
                                {/* <img src="uploads/413919img_9623.jpg" class="img-responsive" alt="img"> */}
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestnews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of Somalia">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img9613} className="img-responsive" alt="snap" />
                                {/* <img src="uploads/668220img_9613.jpg" class="img-responsive" alt="img"> */}
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Ambassador of Somalia</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestnews.html#Mr. Awais Karni - Director Waheed Group of Companies">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Wa0007} className="img-responsive" alt="snap1" />
                                {/* <img src="uploads/46306img-20190411-wa0007.jpg" class="img-responsive" alt="img" /> */}
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Awais Karni - Director Waheed Group of Companies</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>





                <a href="latestnews.html#Meeting with Chaudhry Shujaat Hussain">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Imgwa0003} className="img-responsive" alt="img" />
                                {/* <img src="uploads/577475img-20190206-wa0003.jpg" class="img-responsive" alt="img"> */}
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Meeting with Chaudhry Shujaat Hussain</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>




            </div>




            {/* ==============Testing Div Ends of Carouse ============== */}

            {/* ================Chairman Portion 1============= */}

            <div className="container-fluid pl-0 pr-0">
                <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                            <div className="section-heading text-left"><small className=" font-size-20 font-weight-normal">About</small>
                                <h4 className="semi-bold font-size-35" style={{ color: '#083f88' }}>WAHEED GROUP</h4>
                            </div>
                            <div className="text-content mt-20">
                                <p>Welcome to the Waheed Group of Companies!

                                    What started off over four decades ago as a small business has today spread out by
                                    leaps and bounds to be-come Pakistan’s largest business group. Our company’s operations
                                    are widely spread all over the country and abroad, providing high quality standards of
                                    products and services to our clientele. We are the business leaders and have set a pattern
                                    of success stories that have let our organization grow and receive immense respect from
                                    consumers and our trade partners alike. Today, the company generates an annual turnover
                                    of over three hundred and fifty million US dollars ($350 million), contributing
                                    significantly to the country’s economy.</p>
                            </div>

                            <div className="mt-40"><a href="aboutus.html" className="button-primary button-sm">Learn More</a></div>
                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-sm-12 col-12">
                    <div className="full-background background-right min-350"
                        style={{ backgroundImage: "url(" + Waheed + ")" }}>
                        {/* style={{ backgroundImage: "url(" + Img2 + ")", position: 'relative    ', maxHeight: '75%' }} */}

                    </div>
                </div>
            </div>

            {/* </div > */}


            {/* =======End of Chairman Div========== */}


            <div class="section-block pb-0 mb-50">
                <div class="container">
                    <div class="section-heading text-center">

                        <div class="col-md-12 col-sm-12 col-12">
                            <h4 class="semi-bold font-size-32">Our Concerns</h4>
                            <div class="section-heading-line line-thin"></div>
                        </div>


                    </div>
                    <div class="row mt-60">
                        <div class="owl-carousel owl-theme services-carousel-2">
                            <div class="service-block-2">
                                <img src="uploads/oil&ghee.jpg" alt="img" style={{ height: "200px" }} />
                                <div class="service-block-2-content">
                                    <h4><a href="oil&ghee.html">Oil & Ghee</a></h4>
                                    <strong> WGC is a well-known leader in the oil industry for the last 25 years. It is one of the largest importers of Crude Palm Oil, RBD Palm Oil, Soybean oil and RBD Palm Olein from Malaysia and Indonesia.

                                    </strong><a href="oil&ghee.html" class="service-block-2-btn">Learn more <i class="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div class="service-block-2"><img src="uploads/industrialFat.jpg" alt="img" style={{ height: "200px" }} />
                                <div class="service-block-2-content">
                                    <h4><a href="industrial-fat.html">Industrial Fat</a></h4><strong>
                                        Butter, shortening, and margarine are all types of fats. Shortening comes from vegetable oil, made solid by the process of hydrogenation. Because the oil comes from plant sources, it does not contain cholesterol, but might contain some saturated fat.
                                    </strong><a href="industrial-fat.html" class="service-block-2-btn">Learn more <i class="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div class="service-block-2"><img src="uploads/laraibInn.jpg" alt="img" style={{ height: "200px" }} />
                                <div class="service-block-2-content">
                                    <h4><a href="hotel.html">Hotels</a></h4><strong>Laraib Inn situated in the heart of Islamabad, the capital city of Pakistan, Laraib Inn is a popular multi-purpose hotel that is nestled in a unique commercial destination.

                                    </strong>
                                    <a href="hotel.html" class="service-block-2-btn">Learn
                                        more <i class="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div class="service-block-2"><img src="uploads/transport-02.jpg" alt="img" style={{ height: "200px" }} />
                                <div class="service-block-2-content">
                                    <h4><a href="transport.html">Transport</a></h4><strong>Having one of Pakistan’s biggest set-ups of Palm Oil as well as one of largest distributorship of Edible Oil & Ghee products, WGC has big requirement of transportation.

                                    </strong>
                                    <a href="transport.html" class="service-block-2-btn">Learn more <i class="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div class="service-block-2"><img src="uploads/energySector.jpg" alt="img" style={{ height: "200px" }} />
                                <div class="service-block-2-content">
                                    <h4><a href="energy-sector.html">Energy Sector</a></h4><strong>
                                        WGC invested its time, experience and capital to flourish the business of CNG in Pakistan. It is only because of WGC’s hard work that group has a large list of CNG filling stations. It has also expended the CNG business in major cities of Pakistan.
                                    </strong><a href="energy-sector.html" class="service-block-2-btn">Learn more <i class="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div class="service-block-2"><img src="uploads/wcc-03.jpg" alt="img" style={{ height: "200px" }} />
                                <div class="service-block-2-content">
                                    <h4><a href="wgc-interprises-ltd.html">Waheed Group in Canada</a></h4><strong>
                                        WGC Canada started overseas operations in 2010 and, since then, it has been successful in providing consultancy to business organizations on corporate levels. WGC Canada has played an important role for the companies that had business requirements...
                                    </strong><a href="wgc-interprises-ltd.html" class="service-block-2-btn">Learn more <i class="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




            {/* ========================= */}

            <div className="section-block pb-0 mb-50">
                <div className="container">
                    <div className="section-heading text-center">

                        <div className="col-md-12 col-sm-12 col-12">
                            <h4 className="semi-bold font-size-32">Our Concerns</h4>
                            <div className="section-heading-line line-thin">



                            </div>
                        </div>


                    </div>
                    {/* ++++++++++++++++++++++++++ */}





                    {/* ===================== */}

                    <div className="row mt-60">
                        <div className="owl-carousel owl-theme services-carousel-2">
                            <div className="service-block-2"><img src={ImgOilandGhee} alt="img" style={{ height: '200px' }} />
                                <div className="service-block-2-content">
                                    < h4 > <a href="oil&ghee.html">Oil & Ghee</a></h4>
                                    <strong> WGC is a well-known leader in the oil industry for the last 25 years. It is one of
                                        the largest importers of Crude Palm Oil, RBD Palm Oil, Soybean oil and RBD Palm Olein
                                        from Malaysia and Indonesia.

                                    </strong><a href="oil&ghee.html" className="service-block-2-btn">Learn more <i
                                        className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2"><img src={ImgindustrialFat} alt="img"
                                style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    < h4 > <a href="industrial-fat.html">Industrial Fat</a></h4><strong>
                                        Butter, shortening, and margarine are all types of fats. Shortening comes from vegetable
                                        oil, made solid by the process of hydrogenation. Because the oil comes from plant
                                        sources, it does not contain cholesterol, but might contain some saturated fat.
                                    </strong><a href="industrial-fat.html" className="service-block-2-btn">Learn more <i
                                        className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2"><img src={ImgLaraibinn} alt="img"
                                style={{ height: '200px' }} />
                                <div className="service-block-2-content">
                                    < h4 > <a href="hotel.html">Hotels</a></h4><strong>Laraib Inn situated in the heart of
                                        Islamabad, the capital city of Pakistan, Laraib Inn is a popular multi-purpose hotel
                                        that is nestled in a unique commercial destination.

                                    </strong>
                                    <a href="hotel.html" className="service-block-2-btn">Learn
                                        more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div >
                            </div >
                            <div className="service-block-2"><img src={Imgtransport} alt="img"
                                style={{ height: '200px' }} />
                                <div className="service-block-2-content">
                                    < h4 > <a href="transport.html">Transport</a></h4><strong>Having one of Pakistan’s biggest
                                        set-ups of Palm Oil as well as one of largest distributorship of Edible Oil & Ghee
                                        products, WGC has big requirement of transportation.

                                    </strong>
                                    <a href="transport.html" className="service-block-2-btn">Learn more <i
                                        className="fa fa-arrow-right primary-color"></i></a>
                                </div >
                            </div >
                            <div className="service-block-2"><img src={ImgESector} alt="img"
                                style={{ height: '200px' }} />
                                <div className="service-block-2-content">
                                    < h4 > <a href="energy-sector.html">Energy Sector</a></h4><strong>
                                        WGC invested its time, experience and capital to flourish the business of CNG in
                                        Pakistan. It is only because of WGC’s hard work that group has a large list of CNG
                                        filling stations. It has also expended the CNG business in major cities of Pakistan.
                                    </strong><a href="energy-sector.html" className="service-block-2-btn">Learn more <i
                                        className="fa fa-arrow-right primary-color"></i></a>
                                </div >
                            </div >
                            <div className="service-block-2">
                                <img src={Imgwcc03} alt="img" style={{ height: '200px' }} />
                                <div className="service-block-2-content">
                                    < h4 > <a href="wgc-interprises-ltd.html">Waheed Group in Canada</a></h4><strong>
                                        WGC Canada started overseas operations in 2010 and, since then, it has been successful
                                        in providing consultancy to business organizations on corporate levels. WGC Canada has
                                        played an important role for the companies that had business requirements...
                                    </strong><a href="wgc-interprises-ltd.html" className="service-block-2-btn">Learn more <i
                                        className="fa fa-arrow-right primary-color"></i></a>
                                </div >
                            </div >
                        </div >
                    </div >
                </div >

                {/* ================== */}

                <div class="owl-nav"><div class="owl-prev disabled">
                    <i class="ti-angle-left"></i></div><div class="owl-next">
                        <i class="ti-angle-right"></i></div></div>

                <div class="owl-dots disabled"></div>

                {/* </div> */}
                {/* </div> */}

                {/* ==================== */}
                {/* </div > */}



                <div className="section-block section-sm">
                    <div className="container">
                        <div className="col-md-12 col-sm-12 col-12">
                            <h4 className="semi-bold font-size-32 text-center">Our Business</h4>
                            <div className="section-heading-line line-thin"></div>
                        </div><br />
                        <div className="owl-carousel owl-theme clients clients-carousel">
                            {/* <div className="item"><img src={require("../AssetsMain/Uploads/Business/c1.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c2.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c3.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c4.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c5.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c6.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c7.png")} alt="partner-image" /></div>
                        <div className="item"><img src={require("../AssetsMain/Uploads/Business/c8.png")} alt="partner-image" /></div> */}
                            <div className="item"><img src={ImgC1} alt='file-not-found' /></div>
                            {/* <img className="Navbar-Image" style={{ height: '40px' }} src={Logo1} alt="file-not-found" id="main_logo" /> */}
                            <div className="item"><img src={ImgC2} alt='file-not-found' /></div>
                            <div className="item"><img src={ImgC3} alt='file-not-found' /></div>
                            <div className="item"><img src={ImgC4} alt='file-not-found' /></div>
                            <div className="item"><img src={ImgC5} alt='file-not-found' /></div>
                            <div className="item"><img src={ImgC6} alt='file-not-found' /></div>
                            <div className="item"><img src={ImgC7} alt='file-not-found' /></div>
                            <div className="item"><img src={ImgC8} alt='file-not-found' /></div>
                            <div ><img src={ImgC1} alt="snap" /></div>
                        </div>
                    </div>
                </div>
            </div >
            {/* ==================== */}


        </div >
        //  </div >

    )
}
export default Home
