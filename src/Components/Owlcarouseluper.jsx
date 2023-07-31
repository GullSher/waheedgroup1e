import React, { Component } from 'react'

import Imgwa0003 from "../AssetsMain/Uploads/577475img-20190206-wa0003.jpg";
import Wa0007 from "../AssetsMain/Uploads/46306img-20190411-wa0007.jpg";
import Img9613 from '../AssetsMain/Uploads/668220img_9613.jpg';
import Img488762 from '../AssetsMain/Uploads/488762capture.jpg';
import Img485289 from '../AssetsMain/Uploads/485289img_9632.jpg';
import Img413919 from '../AssetsMain/Uploads/413919img_9623.jpg';


export default class Owlcarouseluper extends Component {
    render() {
        return (
            <>
                <div className="section-heading text-center">
                    <h3 className="semi-bold font-size-33 " style={{ color: '#ef4736' }}>Latest News</h3>
                </div>
                {/* ======================= */}

                {/* ===================== */}

                {/*         <div className="owl-carousel owl-theme testmonial-carousel-4 mt-10" style={{
                display: "flex",
                width: "200%",
                position: "inherit"
            }} >
 */}

                <div className="owl-carousel owl-theme testmonial-carousel-4 mt-10" style={{
                    display: "flex",
                    width: "200%",
                    position: "inherit"
                }} >

                    {/* <div className="owl-carousel mt-10" style={{
                display: "flex",
                width: "200%",
                position: "inherit"
            }} > */}




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
                {/* 
             <div class="owl-carousel owl-theme testmonial-carousel-4 mt-10">
                <h1>This is Group One</h1>
                <a href="/LatestNews#Mr Abdul Waheed, Chairman PVMA KN News">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                              <img src={Img488762} className="img-responsive", alt="snap" />
                                            
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ minHeight: '200px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr Abdul Waheed, Chairman PVMA KN News</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >


                <a href="/LatestNews#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img485289} className="img-responsive" alt="snap" />
                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }} >
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan</p>
                                </div>

                            </div>
                        </div >
                    </div >
                </a >





                <a href="latestnews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">
                    <div class="testmonial-item-5" style={{ minHeight: '200px' }}>
                        <div class="row">
                            <div class="col-lg-5 col-sm-5 col-md-5">
                                <img src={Img413919} className="img-responsive" alt="snap" />
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

                            </div>
                            <div class="col-lg-7 col-sm-7 col-md-7">

                                <div class="testmonial-item-5-text" style={{ maxHeight: '250px' }}>
                                    <p style={{ overflow: 'hidden', maxHeight: '150px' }}>Meeting with Chaudhry Shujaat Hussain</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>

            </div > * /}

    {/* ==============Testing Div Ends of Carouse ============== */ }
                {/* =================Testing Div 2 Starts Here   ===================== */}


                {/* =================Testing Div 2 Ends Here   ===================== */}



            </>




        )
    }
}
