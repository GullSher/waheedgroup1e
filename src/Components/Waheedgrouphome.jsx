import React, { Component } from 'react';
// import ImgC1 from "../AssetsMain/Uploads/Business/c1.png";
// import ImgC2 from "../AssetsMain/Uploads/Business/c2.png";
// import ImgC3 from "../AssetsMain/Uploads/Business/c3.png";
// import ImgC4 from "../AssetsMain/Uploads/Business/c4.png";
// import ImgC5 from "../AssetsMain/Uploads/Business/c5.png";
// import ImgC6 from "../AssetsMain/Uploads/Business/c6.png";
// import ImgC7 from "../AssetsMain/Uploads/Business/c7.png";
// import ImgC8 from "../AssetsMain/Uploads/Business/c8.png";

// import ImgOilandGhee from "../AssetsMain/Uploads/oil&ghee.jpg";
// import ImgindustrialFat from "../AssetsMain/Uploads/industrialFat.jpg";
// import ImgLaraibinn from "../AssetsMain/Uploads/laraibinn.jpg";
// import Imgwa0003 from "../AssetsMain/Uploads/577475img-20190206-wa0003.jpg";
import Waheed from '../AssetsMain/Uploads/waheed.jpg';
// import Wa0007 from "../AssetsMain/Uploads/46306img-20190411-wa0007.jpg";
// import Img9613 from '../AssetsMain/Uploads/668220img_9613.jpg';
// import Img488762 from '../AssetsMain/Uploads/488762capture.jpg';
// import Img485289 from '../AssetsMain/Uploads/485289img_9632.jpg';
// import Img413919 from '../AssetsMain/Uploads/413919img_9623.jpg';
// import Imgwcc03 from "../AssetsMain/Uploads/wcc-03.jpg";
// import ImgESector from "../AssetsMain/Uploads/energySector.jpg";
// import Imgtransport from "../AssetsMain/Uploads/transport-02.jpg";
// import { HashLink } from 'react-router-hash-link';
// import { ResponsiveEmbed } from 'react-responsive-embed';
// import Fbvideo1 from './Fbvideo';
// import Owlcarouseluper from './Owlcarouseluper';
// import Ourconcerns from './OurConcerns';
// import Ourbussiness from './OurBussiness';

// import LNh1 from './LatestNews';
//  import LatestNews from './Components/LatestNews';

class Waheedgrouphome extends Component {
    render() {
        return (
            <>

                {/* ================Chairman Portion 1============= */}

                {/* <div className="container-fluid pl-0 pr-0"> */}

                <div className="container-fluid pl-0 pr-0" style={{ display: "inline-flex" }}>

                    {/* <div className="row no-gutters"> */}


                    <div className="row no-gutters" style={{ display: "contents" }}>

                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left"><small className=" font-size-20 font-weight-normal">About</small>
                                    <h4 className="semi-bold font-size-35" style={{ color: '#083f88' }}>WAHEED GROUP</h4>
                                </div>
                                <div className="text-content mt-20">
                                    <p>Welcome to the Waheed Group of Companies!<br />

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



                {/* ========Trial Div Strarts Here===== */}
                {/*
About 
Waheed Group
After Latest News	

    <div class="container-fluid pl-0 pr-0">
        <div class="row no-gutters">
            <div class="col-md-6 col-sm-12 col-12">
                <div class="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                    <div class="section-heading text-left"><small class=" font-size-20 font-weight-normal">About</small>
                        <h4 class="semi-bold font-size-35" style="color:#083f88;">WAHEED GROUP</h4>
                    </div>
                    <div class="text-content mt-20">
                        <p>Welcome to the Waheed Group of Companies!

                            What started off over four decades ago as a small business has today spread out by
                            leaps and bounds to be-come Pakistan’s largest business group. Our company’s operations
                            are widely spread all over the country and abroad, providing high quality standards of
                            products and services to our clientele. We are the business leaders and have set a pattern
                            of success stories that have let our organization grow and receive immense respect from
                            consumers and our trade partners alike. Today, the company generates an annual turnover
                            of over three hundred and fifty million US dollars ($350 million), contributing significantly to the country’s economy.</p>
                    </div>

                    <div class="mt-40"><a href="aboutus.html" class="button-primary button-sm">Learn More</a></div>
                </div>
            </div>
            <div class="col-md-6 col-sm-12 col-12">
                <div class="full-background background-right min-350" style="background-image: url(uploads/waheed.jpg);"></div>
            </div>
        </div>
    </div>
             
                
                
                
                */}
                {/* ===============Trial Div Ends Here=====*/}
            </>
        );
    }
}

export default Waheedgrouphome;