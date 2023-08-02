import React, { Component } from 'react';
import ImgC1 from "../AssetsMain/Uploads/Business/c1.png";
import ImgC2 from "../AssetsMain/Uploads/Business/c2.png";
import ImgC3 from "../AssetsMain/Uploads/Business/c3.png";
import ImgC4 from "../AssetsMain/Uploads/Business/c4.png";
import ImgC5 from "../AssetsMain/Uploads/Business/c5.png";
import ImgC6 from "../AssetsMain/Uploads/Business/c6.png";
import ImgC7 from "../AssetsMain/Uploads/Business/c7.png";
import ImgC8 from "../AssetsMain/Uploads/Business/c8.png";

class OurBussiness extends Component {
    render() {
        return (
            <>

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
                        {/* <div className="owl-carousel owl-theme clients clients-carousel"> */}
                        <div className="owl-carousel owl-theme clients clients-carousel" style={{ display: 'flex' }}>
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
                </div >


                {/* ==================== */}




                {/* ======================== */}
                {/*==========Trial Div Strarts Here=============  */}

                {/* 
        // Our Bussiness
        //  AFter Our Concerns

    <div class="section-block section-sm">
        <div class="container">
            <div class="col-md-12 col-sm-12 col-12">
                <h4 class="semi-bold font-size-32 text-center">Our Business</h4>
                <div class="section-heading-line line-thin"></div>
            </div><br>
            <div class="owl-carousel owl-theme clients clients-carousel">
                <div class="item"><img src="uploads/business/c1.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c2.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c3.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c4.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c5.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c6.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c7.png" alt="partner-image"></div>
                <div class="item"><img src="uploads/business/c8.png" alt="partner-image"></div>
            </div>
        </div>
    </div>



*/}

                {/*==========Trial Div Ends Here==============  */}

            </>
        );
    }
}

export default OurBussiness;