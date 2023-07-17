import React, { Component } from 'react';
import ImgWaheed from "../AssetsMain/Uploads/waheed.jpg";

class Chairman1 extends Component {
    render() {
        return (

            <div className="container-fluid pl-0 pr-0">
                <div className="row no-gutters">
                    <div className="col-md-6 col-sm-12 col-12">
                        <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                            <div className="section-heading text-left">
                                <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Mr. Abul Waheed</h4>
                                <small className=" font-size-20 font-weight-normal">The Chairman Waheed Group Of Companies</small>
                            </div>
                            <div className="text-content mt-20">
                                <p>
                                    Sheikh Abdul Waheed is a seasoned professional businessman with 48 years of experience in
                                    managing and maintaining an array of diverse businesses that includes handling of special
                                    projects publicly and privately at senior executive levels. He started his career at an
                                    early age of 11 years old.
                                </p>
                                <p>
                                    As a young entrepreneur, Mr. Abdul Waheed achieved success in his first business venture
                                    which was in the tea industry in 1971, later in 1982 he introduced his own brand, Margina
                                    Tea, which brought him recognition among the business community at the time. After making a
                                    significant mark on the tea industry, Mr. Abdul Waheed diversified his investments by
                                    launching the first ever housing society in Rawalpindi, Pakistan in 1985 by the name of
                                    Sohni Town on Adiala Road , in 1986 he stepped in to jewelry business and further
                                    established himself in the business community. after this, Mr. Abdul Waheed stepped in to
                                    the cooking oil industry in 1988 and in 1993 established his own Cooking oil &amp; banaspati
                                    factory by the name of Waheed Hafeez Ghee Industries. First One to bring CNG in Pakistan in
                                    1993 he started the Compressed Natural Gas (CNG) business as the pioneer of the industry and
                                    established the first ever private CNG filling station in Pakitan. In 1994 he became the
                                    sole distributor for the Comparewheel Compressor in Pakistan. After establishing his name in
                                    the CNG industry, He achieved yet another milestone by becoming the the sole distributor of
                                    the Stefflini CNG kit in 1996.
                                </p>
                                <p>
                                    Ever since stepping into the cooking oil and banaspati trade, Mr. Abdul Waheed has launched
                                    over 71 brands in the local and international market over the last 26 years.Mr. Abdul Waheed
                                    has served as a primary liaison for many government and private agencies which includes and
                                    is not limited to Chambers of Commerce, Federations, Associations, personal and government
                                    agencies. With sheer determination, team-work and vigor, Mr.Abdul Waheed has so far
                                    established 17 companies under the umbrella of Waheed Group of Companies.
                                </p>
                                <p>
                                    Some of his many portfolios include:
                                </p>
                                <ul style={{ listStyleType: "inherit", listStylePosition: "outside" }}>
                                    {/* //    "list-style-type: circle;   list-style-position: outside;"> */}
                                    <li><i className="fas fa-check-circle " style={{ color: "blue" }}></i> VP Federation of Pakistan
                                        Chambers of Commerce (FPCCI) &amp; Incharge Captial Office Islamabad </li>
                                    <li><i className="fas fa-check-circle" style={{ color: "blue" }}></i> Founder Member of All Pakistan
                                        CNG Association (APCNGA)</li>
                                    <li><i className="fas fa-check-circle" style={{ color: "blue" }}></i> Member Rawalpindi Chamber of
                                        Commerce &amp; Industry</li>
                                    <li><i className="fas fa-check-circle" style={{ color: "blue" }}></i> Member Hazara Chamber of
                                        Commerce &amp; Industry</li>
                                    <li><i className="fas fa-check-circle" style={{ color: "blue" }}></i> Executive Member Federation of
                                        Pakistan Chamber of Commerce &amp; Industry (FPCCI)</li>
                                    <li><i className="fas fa-check-circle" style={{ color: "blue" }}></i> Member SAARC Chamber of Commerce
                                        (life time member)</li>
                                    <li><i className="fas fa-check-circle" style={{ color: "blue" }}></i> Chairman of Pakistan Banaspati
                                        Manufacturer Association (PVMA)2007 - 2008, 2011-2012, 2017-2018</li>

                                </ul>
                            </div>


                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-12">

                        {/* <div className="full-background background-right min-350 " style={{backgroundImage: URL()}}   "background-image: url(uploads/waheed.jpg); position:relative; background-size:cover; max-height:650px;"> */}
                        <div className="full-background background-right min-350" style={{ backgroundImage: "url(" + ImgWaheed + ")", position: 'relative    ', maxHeight: '75%' }} />

                    </div>
                </div>
            </div>
            // </div >

        );
    }
}

export default Chairman1
