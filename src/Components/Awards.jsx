import React from 'react'

// import Imgtemp1 from '../AssetsMain/Uploads/17346oil.jpg';
// import Img248189img from '../AssetsMain/Uploads/248189img-20190411-wa0006.jpg';
import Img248189img from '../AssetsMain/Uploads/17346oil.jpg';
import Img731104img from '../AssetsMain/Uploads/731104img-20190411-wa0002.jpg';
import Img372027img from '../AssetsMain/Uploads/372027img-20190411-wa0004.jpg';
// import Img905582whatsappimage from '../AssetsMain/Uploads/'905582whatsappimage2019-10-17at12.06.46pm(1).jpeg;
import Img905582whatsappimage from '../AssetsMain/Uploads/17346oil.jpg';
import Img61547img from '../AssetsMain/Uploads/61547img-20190913-wa0067.jpg';
// import Img61547img from '../AssetsMain/Uploads/17346oil.jpg';

function Awards() {
    return (
        <div class="section-block">
            <div class="container">
                <div class="co-md-12 col-sm-12 col-12 text-center">
                    <div class="section-heading text-center">
                        <h4 class="semi-bold font-size-35" style={{ color: "#083f88" }}>Awards</h4>

                    </div>
                </div>
                <div class="row reverse-xs mt-70" id="Presidential Award 2017">
                    <div class="col-md-5 col-sm-5 col-12">
                        <div class="pr-30-md">
                            <div class="section-heading mt-30">
                                <h4 class="semi-bold">Presidential Award 2017</h4>
                                <p>Presidential Award for Highest Exporter of Ghee.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-7 col-12"> <img src={Img248189img} class="rounded-border" alt="" /> </div>
                </div>




                <div class="row mt-70" id="Business Man of the Year 2018">
                    <div class="col-md-7 col-sm-7 col-12"> <img src={Img731104img} class="rounded-border" alt="" /> </div>
                    <div class="col-md-5 col-sm-5 col-12">
                        <div class="pl-30-md">
                            <div class="section-heading mt-30">
                                <h4 class="semi-bold">Business Man of the Year 2018</h4>
                                <p>Awarded by Prime Minister Imran Khan.</p>
                            </div>
                        </div>
                    </div>
                </div>





                <div class="row reverse-xs mt-70" id="Highest Tax Payer of the Year 2018">
                    <div class="col-md-5 col-sm-5 col-12">
                        <div class="pr-30-md">
                            <div class="section-heading mt-30">
                                <h4 class="semi-bold">Highest Tax Payer of the Year 2018</h4>
                                <p>Awarded by Prime Minister Imran Khan.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-7 col-12">
                        <img src={Img372027img} class="rounded-border" alt="" /> </div>
                </div>





                <div class="row mt-70" id="Presidential Award 2019">
                    <div class="col-md-7 col-sm-7 col-12"> <img src={Img61547img} class="rounded-border" alt="" /> </div>
                    <div class="col-md-5 col-sm-5 col-12">
                        <div class="pl-30-md">
                            <div class="section-heading mt-30">
                                <h4 class="semi-bold">Presidential Award 2019</h4>
                                <p>Business Man of the year awarded by President of Pakistan Mr. Arif Alvi.</p>
                            </div>
                        </div>
                    </div>
                </div>




                <div class="row reverse-xs mt-70" id="Indonesian National Primaduta Award 2019">
                    <div class="col-md-5 col-sm-5 col-12">
                        <div class="pr-30-md">
                            <div class="section-heading mt-30">
                                <h4 class="semi-bold">Indonesian National Primaduta Award 2019</h4>
                                <p>Waheed Group the only company from Pakistan received Primaduta Award from President of Indonesia  Mr. Joko Vidodo.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-sm-7 col-12"> <img src={Img905582whatsappimage} class="rounded-border" alt="" /> </div>
                </div>




            </div>
        </div>




    )
}

export default Awards
