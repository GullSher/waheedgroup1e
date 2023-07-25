import React from 'react';
import IndustrialFat1 from '../AssetsMain/Uploads/industrialFat.jpg';

function IndustrialFat() {
    return (
        // < !--First -- >
        <div class="container-fluid pl-0 pr-0">
            <div class="row no-gutters">
                <div class="col-md-6 col-sm-12 col-12">
                    <div class="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                        <div class="section-heading text-left">
                            <h4 class="semi-bold font-size-35" style={{ color: "#083f88" }} >Industrial Fats</h4>
                        </div>
                        <div class="text-content mt-20">
                            <p>
                                Butter, shortening, and margarine are all types of fats. Shortening comes from vegetable oil, made solid by the process of hydrogenation. Because the oil comes from plant sources, it does not contain cholesterol, but might contain some saturated fat.

                                Shortening is mostly used in cooking and baking. Margarine is also a saturated fat and is solid at room temperature. Most margarine these days are made out of vegetable oils, so they have the polyunsaturated and monounsaturated fats, or good fats, that can lower your LDL when you are substituting saturated fat. We produce high quality shortening, which includes special cream shortening and double refined palm olein. We also excel in industrial margarine, which resonates with our list of big industrial consumers of Pakistan.
                                Our Shortening/ Margarine Production Capacity is 70 Tons per day.
                                Shortening and margarine are two of our by-products produced by our oil refining process. As a result, we are one of the major suppliers of these products and deal with many internationally renowned Pakistani companies, which are as follows:
                            </p>
                            <div class="col-md-12 col-sm-12 col-12">
                                <ul>
                                    <li><i class="fas fa-check-circle" style={{ color: "blue" }}></i> </li>
                                    <li><i class="fas fa-check-circle" style={{ color: "blue" }}></i> </li>

                                </ul>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="col-md-6 col-sm-12 col-12">
                    <div className="full-background background-right min-350 "
                        style={{ backgroundImage: "URL(" + IndustrialFat1 + ")", position: "relative", backgroundSize: "cover", maxHeight: "650px" }} ></div>


                </div>
            </div>
        </div>






    )
}

export default IndustrialFat
