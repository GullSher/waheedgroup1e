import React, { Component } from 'react';
import ImgOilandGhee from "../AssetsMain/Uploads/oil&ghee.jpg";
import ImgindustrialFat from "../AssetsMain/Uploads/industrialFat.jpg";
import ImgLaraibinn from "../AssetsMain/Uploads/laraibinn.jpg";
import Imgwcc03 from "../AssetsMain/Uploads/wcc-03.jpg";
import ImgESector from "../AssetsMain/Uploads/energySector.jpg";
import Imgtransport from "../AssetsMain/Uploads/transport-02.jpg";


class OurConcerns extends Component {
    render() {
        return (

            <div className="section-block pb-0 mb-50">
                <div className="container">
                    <div className="section-heading text-center">

                        <div className="col-md-12 col-sm-12 col-12">
                            <h4 className="semi-bold font-size-32">Our Concerns</h4>
                            <div className="section-heading-line line-thin"></div>
                        </div>

                    </div>
                    {/* <p style={{ textAlign: "center" }}>Carousel Our Concern is working </p> */}
                    <div className="row mt-60" style={{ display: "flex", width: "200%", position: "inherit" }} >

                        <div className="owl-carousel owl-theme services-carousel-2" style={{ display: "flex", width: "200%", position: "inherit" }}>

                            <div className="service-block-2">
                                <img src={ImgOilandGhee} alt="img" style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    <h4><a href="OilandGhee">Oil & Ghee</a></h4>
                                    <strong> WGC is a well-known leader in the oil industry for the last 25 years. It is one of the largest importers of Crude Palm Oil, RBD Palm Oil, Soybean oil and RBD Palm Olein from Malaysia and Indonesia.

                                    </strong><a href="OilandGhee" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>

                            <div className="service-block-2">
                                <img src={ImgindustrialFat} alt="img" style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    <h4><a href="IndustrialFat">Industrial Fat</a></h4><strong>
                                        Butter, shortening, and margarine are all types of fats. Shortening comes from vegetable oil, made solid by the process of hydrogenation. Because the oil comes from plant sources, it does not contain cholesterol, but might contain some saturated fat.
                                    </strong><a href="IndustrialFat" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2"><img src={ImgLaraibinn} alt="img" style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    <h4><a href="Hotel">Hotels</a></h4><strong>Laraib Inn situated in the heart of Islamabad, the capital city of Pakistan, Laraib Inn is a popular multi-purpose hotel that is nestled in a unique commercial destination.

                                    </strong>
                                    <a href="Hotel" className="service-block-2-btn">Learn
                                        more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2"><img src={Imgtransport} alt="img" style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    <h4><a href="Transport">Transport</a></h4><strong>Having one of Pakistan’s biggest set-ups of Palm Oil as well as one of largest distributorship of Edible Oil & Ghee products, WGC has big requirement of transportation.

                                    </strong>
                                    <a href="Transport" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2"><img src={ImgESector} alt="img" style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    <h4><a href="EnergySector">Energy Sector</a></h4><strong>
                                        WGC invested its time, experience and capital to flourish the business of CNG in Pakistan. It is only because of WGC’s hard work that group has a large list of CNG filling stations. It has also expended the CNG business in major cities of Pakistan.
                                    </strong><a href="EnergySector" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                            <div className="service-block-2"><img src={Imgwcc03} alt="img" style={{ height: "200px" }} />
                                <div className="service-block-2-content">
                                    <h4><a href="WGCInterprisesLtd">Waheed Group in Canada</a></h4><strong>
                                        WGC Canada started overseas operations in 2010 and, since then, it has been successful in providing consultancy to business organizations on corporate levels. WGC Canada has played an important role for the companies that had business requirements...
                                    </strong><a href="WGCInterprisesLtd" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                {/* ========================= */}



                {/* =========Trial Div Starts Here=============  */}
                {/*  
                Our Concerns
                After Waheed Group

                <div className="section-block pb-0 mb-50">
                    <div className="container">
                        <div className="section-heading text-center">

                            <div className="col-md-12 col-sm-12 col-12">
                                <h4 className="semi-bold font-size-32">Our Concerns</h4>
                                <div className="section-heading-line line-thin"></div>
                            </div>


                        </div>
                        <div className="row mt-60">
                            <div className="owl-carousel owl-theme services-carousel-2">
                                <div className="service-block-2"><img src="uploads/oil&ghee.jpg" alt="img" style="height:200px;">
                                    <div className="service-block-2-content">
                                        <h4><a href="oil&ghee.html">Oil & Ghee</a></h4>
                                        <strong> WGC is a well-known leader in the oil industry for the last 25 years. It is one of the largest importers of Crude Palm Oil, RBD Palm Oil, Soybean oil and RBD Palm Olein from Malaysia and Indonesia.

                                        </strong><a href="oil&ghee.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                    </div>
                                </div>
                                <div className="service-block-2"><img src="uploads/industrialFat.jpg" alt="img" style="height:200px;">
                                    <div className="service-block-2-content">
                                        <h4><a href="industrial-fat.html">Industrial Fat</a></h4><strong>
                                            Butter, shortening, and margarine are all types of fats. Shortening comes from vegetable oil, made solid by the process of hydrogenation. Because the oil comes from plant sources, it does not contain cholesterol, but might contain some saturated fat.
                                        </strong><a href="industrial-fat.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                    </div>
                                </div>
                                <div className="service-block-2"><img src="uploads/laraibInn.jpg" alt="img" style="height:200px;">
                                    <div className="service-block-2-content">
                                        <h4><a href="hotel.html">Hotels</a></h4><strong>Laraib Inn situated in the heart of Islamabad, the capital city of Pakistan, Laraib Inn is a popular multi-purpose hotel that is nestled in a unique commercial destination.

                                        </strong>
                                        <a href="hotel.html" className="service-block-2-btn">Learn
                                            more <i className="fa fa-arrow-right primary-color"></i></a>
                                    </div>
                                </div>
                                <div className="service-block-2"><img src="uploads/transport-02.jpg" alt="img" style="height:200px;">
                                    <div className="service-block-2-content">
                                        <h4><a href="transport.html">Transport</a></h4><strong>Having one of Pakistan’s biggest set-ups of Palm Oil as well as one of largest distributorship of Edible Oil & Ghee products, WGC has big requirement of transportation.

                                        </strong>
                                        <a href="transport.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                    </div>
                                </div>
                                <div className="service-block-2"><img src="uploads/energySector.jpg" alt="img" style="height:200px;">
                                    <div className="service-block-2-content">
                                        <h4><a href="energy-sector.html">Energy Sector</a></h4><strong>
                                            WGC invested its time, experience and capital to flourish the business of CNG in Pakistan. It is only because of WGC’s hard work that group has a large list of CNG filling stations. It has also expended the CNG business in major cities of Pakistan.
                                        </strong><a href="energy-sector.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                    </div>
                                </div>
                                <div className="service-block-2"><img src="uploads/wcc-03.jpg" alt="img" style="height:200px;">
                                    <div className="service-block-2-content">
                                        <h4><a href="wgc-interprises-ltd.html">Waheed Group in Canada</a></h4><strong>
                                            WGC Canada started overseas operations in 2010 and, since then, it has been successful in providing consultancy to business organizations on corporate levels. WGC Canada has played an important role for the companies that had business requirements...
                                        </strong><a href="wgc-interprises-ltd.html" className="service-block-2-btn">Learn more <i className="fa fa-arrow-right primary-color"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                */}


                {/* ========Trial Div Ends Here============== */}

            </div >

        );
    }
}

export default OurConcerns;