import React from 'react'
import Transport1 from '../AssetsMain/Uploads/transport-02.jpg';

function Transport() {
    return (

        //    < !--First -- >
        <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                        <div class="section-heading text-left">
                            <h4 class="semi-bold font-size-35" style={{ color: "#083f88" }}>Transport Network</h4>
                        </div>
                        <div class="text-content mt-20">
                            <p>
                                Having one of Pakistan’s biggest set-ups of Palm Oil as well as one of largest distributorship of Edible Oil & Ghee products, WGC has big requirement of transportation. To cater for this need, WGC initially had over 50 transport vehicles which were engaged in transportation of edible oil from Karachi port to its manufacturing facilities.

                            </p>
                            <br />
                            <p>
                                With growth of business, the fleet was increased to over 80 vehicles and a new business entity  was formed in 2008. This facilitated the group to ensure smooth running of operations and in time delivery & dispatch of Palm Oil and its finished products to the desired destinations throughout the country.
                            </p>

                        </div>


                    </div>
                </div>


                <div className="col-md-6 col-sm-12 col-12">
                    <div className="full-background background-right min-350 "
                        style={{ backgroundImage: "URL(" + Transport1 + ")", position: "relative", backgroundSize: "cover", maxHeight: "650px" }} ></div>



                </div>
            </div>
        </div>



    )
}

export default Transport
