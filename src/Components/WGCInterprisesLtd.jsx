import React from 'react';
import WGCCC from '../AssetsMain/Uploads/wcc-03.jpg';

function WGCInterprisesLtd() {
    return (


        // < !--First -- >
        <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
                <div className="col-md-6 col-sm-12 col-12">
                    <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                        <div className="section-heading text-left">
                            <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Waheed Group in Canada</h4>
                        </div>
                        <div className="text-content mt-20">
                            <p>
                                WGC Canada started overseas operations in 2010 and, since then, it has been successful in providing consultancy to business organizations on corporate levels. WGC Canada has played an important role for the companies that had business requirements related to this part of the world as well as providing services to business entities that have stakes & interests in Canada. The aim of this setup is to work as a bridge between information and the users. It shares its vast business experience to form ideas into reality and many organizations have taken advantage through its consultancy projects.

                            </p>
                            <br />
                            <h5>WGC Enterprises Ltd, Canada</h5>
                            <p style={{ color: "#083f88" }}><span className="fa fa-globe"></span> 3935 Eglinton Avenue West, Mississauga, Ontario L5M 8A7 Canada. </p>

                            <p style={{ color: "#083f88" }}><span className="fa fa-phone"></span> Phone: (+1) 905 567 0596 </p>

                            <p style={{ color: "#050607" }} ><span className="fa fa-globe"></span> Phone: (+1) 647 308 0000 </p>

                            <p style={{ color: "#083f88" }}><span className="fa fa-envelop"></span> wgc.enterprises@hotmail.com </p>

                        </div>


                    </div>
                </div>



                <div className="col-md-6 col-sm-12 col-12">
                    <div className="full-background background-right min-350 "
                        style={{ backgroundImage: "URL(" + WGCCC + ")", position: "relative", backgroundSize: "cover", maxHeight: "650px" }} ></div>
                </div>






            </div>
        </div>




    )
}

export default WGCInterprisesLtd
