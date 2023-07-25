import React from 'react';
import LaraibInn1 from '../AssetsMain/Uploads/laraibInn1.jpg';

function Hotel() {
    return (
        //   <div !--First -- >
        <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">

                <div className="col-md-6 col-sm-12 col-12">
                    <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                        <div className="section-heading text-left">
                            <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Laraib Inn HOTEL</h4>
                        </div>
                        <div className="text-content mt-20">
                            <p>
                                Situated in the heart of Islamabad, the capital city of Pakistan, Laraib Inn is a popular multi-purpose hotel that is nestled in a unique commercial destination. It is one of the most sought-after destinations for hosting weddings and receptions. The establishment is equipped with multi-purpose halls that come in handy for events like birthday parties, seminars and even workshops. Laraib Inn is a one-stop shop solution for all event needs.

                                The team consists of people with an experience of decades in the hospitality business. They are dedicated to providing excellent services to all their clients. We think of Laraib Inn as your home away from home.

                                Laraib Inn Hotel, Islamabad

                            </p>
                            <br />
                            <p style={{ color: "#083f88" }}> <span className="fa fa-globe"></span> Rohtas Road, G-9 Markaz, Islamabad. </p>

                            <p style={{ color: "#083f88" }}><span className="fa fa-phone"></span> Phone: 051 – 2282 909 </p>

                            <p style={{ color: "#083f88" }}><span className="fa fa-globe"></span> Fax: 051 – 2251 499 </p>

                            <p style={{ color: "#083f88" }}><span className="fa fa-envelop"></span> laraib.inn1@gmail.com </p>

                        </div>


                    </div>
                </div>



                <div className="col-md-6 col-sm-12 col-12">
                    <div className="full-background background-right min-350 "
                        style={{ backgroundImage: "URL(" + LaraibInn1 + ")", position: "relative", backgroundSize: "cover", maxHeight: "650px" }} ></div>
                </div>




            </div >
        </div>







    )
}

export default Hotel
