import React from 'react'
import imgOP1 from '../AssetsMain/Uploads/17346oil-01.jpg';

function OurProducts() {
    return (
        <div className="section-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-12">
                        <img src={imgOP1} className="rounded-border shadow-primary" alt="" /> </div>
                    <div className="col-md-6 col-sm-6 col-12">
                        <div className="pl-30-md">
                            <div className="section-heading text-left mt-5">
                                <h3 className="semi-bold font-size-32">Fauiji Supreme </h3>
                                <div className="section-heading-line line-thin"></div>
                                <div className="text-content">
                                    <p>
                                        Established in 1993, the Waheed Hafeez Ghee Industries is one of the largest suppliers of cooking oil and banaspati in the north region of Pakistan. It has a production capacity of 350 metric tonnes per day, produced under 44 different brands that comply with the different needs of various clients. As are the groupâ€™s all other businesses, Waheed Hafeez Ghee Industries is certified by PSQCA, HALAL and has ISO certification from TUV Austria Hellas. Some of the major brands produced by Waheed Hafeez are as follows:

                                        Fauji Supreme
                                        Anees
                                        Phool
                                        Maan Pasand                                </p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>




    )
}

export default OurProducts
