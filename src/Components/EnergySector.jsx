import React from 'react';
import ESector from '../AssetsMain/Uploads/energySector.jpg';

function EnergySector() {
    return (
        //  < !--First -- >
        <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                        <div className="section-heading text-left">
                            <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Compressed Natural Gas</h4>
                        </div>
                        <div className="text-content mt-20">
                            <p>
                                WGC invested its time, experience and capital to flourish the business of CNG in Pakistan. It is only because of WGC’s hard work that group has a large list of CNG filling stations. It has also expended the CNG business in major cities of Pakistan.

                            </p>
                            <p>
                                WGC has provided consultancy to other firms who wanted to enter in the green energy business. WGC shared its experience with those firms, and enabled them to setup their own businesses. The list is long but for the sake of reference we are proud to quote the following names:
                            </p>
                            <p>
                                Ak Filling Point<br />

                            </p>
                            <p>
                                Kandaan Group of Companies also set-up and commenced the CNG Association and enabled the CNG Stations to stand for their legitimate rights. It was honor of this group that we had the first Chairmanship of CNG Association.
                            </p>
                            <br />
                            <div className="row">
                                <div className="col-lg-6 col-sm-6 col-md-6" style={{ textAlign: "left" }}>
                                    <h2 style={{ fontSize: "20px", fontFamily: "sans-serif" }}>Ak Filling Point </h2>
                                    <p style={{ color: "#083f88" }}><span className="fa fa-globe"></span> FA-20 Murree Road, Faizabad, Rawalpindi. </p>

                                    <p style={{ color: "#083f88" }}><span className="fa fa-phone"></span> Phone: +92 51 – 4575853 </p>
                                </div>

                                <div className="col-lg-6 col-sm-6 col-md-6">

                                </div>
                            </div>




                        </div>


                    </div>
                </div>




                <div className="col-md-6 col-sm-12 col-12">
                    <div className="full-background background-right min-350 "
                        style={{ backgroundImage: "URL(" + ESector + ")", position: "relative", backgroundSize: "cover", maxHeight: "650px" }} ></div>
                </div>





            </div>
        </div>





    )
}

export default EnergySector
