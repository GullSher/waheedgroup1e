import React, { useState } from 'react'
import ImgDirector1 from '../AssetsMain/Uploads/awais.jpg';
import imgOil01 from '../AssetsMain/Uploads/oil-01.jpg';
import { MyFunction, MyFunction2 } from './Directorjs';
// import { MyFunction2 } from './Directorjs';


function Directors1() {

    // added blow on 11 july 2023 ======
    const [showFullText, setShowFullText] = useState(false);

    const toggleText = () => {
        setShowFullText(!showFullText);
    };

    // ===========================
    return (
        <>
            {/* // =================== */}
            {/* <div id="preloader">
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                </div>
 */}


            {/* // =================== */}

            <div>
                {/* // < !--First -- > */}
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left">
                                    <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Mr. Awais Karni</h4>
                                    <small className=" font-size-20 font-weight-normal">Director Waheed Group Of Companies</small>
                                </div>
                                <div className="text-content mt-20">
                                    <p>
                                        Awais Karni is one of our key directors and has lamented himself as a seasoned veteran of the palm oil industry with an experience of more than 15 years and has credited himself by creating and managing various brands of cooking oil and ghee which includes our flagship premium brand, Fauji Supreme. During his adolescence years, Mr. Karni attended Beaconhouse School System and, to further his education, tra-velled abroad and graduated from the prestigious Everest College, Canada.

                                        {showFullText ? (
                                            <>
                                                {' '}

                                                During his 10 years in WGC, Mr. Awais Karni has garnered many achievements which include re-ceiving a golden medal from the President of Pakistan for “Highest Importer of Edible Oil” in 2018. Mr. Karni has kept himself engaged in the palm oil industry further by becoming Vice President of Pakistan Vanaspati Manufacturing Association (PVMA) from 2011 to 2012. He has also received the award for “High-est Importer of Palm Oil” from Pakistan Edible Oil Conference (PEOC) in 2018. Internationally, Mr. Karni has become a known face of Pakistan’s palm oil industry by traveling the world while attending and partici-pating in various palm oil familiarization programs conducted by several countries, especially Malaysia.
                                            </>
                                        ) : (
                                            <span>
                                                <span id="dots">...</span>
                                                <span id="more" style={{ display: 'none' }}>
                                                    During his 10 years in WGC, Mr. Awais Karni has garnered many achievements which include re-ceiving a golden medal from the President of Pakistan for "Highest Importer of Edible Oil" in 2018. Mr. Karni has kept himself engaged in the palm oil industry further by becoming Vice President of Pakistan Vanaspati Manufacturing Association (PVMA) from 2011 to 2012. He has also received the award for "High-est Importer of Palm Oil" from Pakistan Edible Oil Conference (PEOC) in 2018. Internationally, Mr. Karni has become a known face of Pakistan’s palm oil industry by traveling the world while attending and partici-pating in various palm oil familiarization programs conducted by several countries, especially Malaysia.
                                                </span>
                                            </span>
                                        )}

                                    </p>
                                </div>


                                {/* <div className="mt-40"><button href="" onclick="MyFunction()" id="myBtn" className="button-primary button-sm">Read More</button></div> */}
                                <div className="mt-40">
                                    <button onClick={toggleText} id="myBtn" className="button-primary button-sm">
                                        {showFullText ? 'Read Less' : 'Read More'}
                                    </button>


                                    {/* <button href="" onClick={MyFunction} id="myBtn" className="button-primary button-sm">
                                    Read More
                                </button> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="full-background background-right min-350 " style={{ backgroundImage: "url(" + ImgDirector1 + ")", position: 'relative', maxHeight: '650px' }}>
                            </div>
                        </div>
                    </div>
                </div >
                {/*  */}



                {/*  */}

                {/* // < !--Second-- > */}

                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="full-background background-right min-350 " style={{ backgroundImage: "url(" + imgOil01 + ")", position: 'relative    ', maxHeight: '650px' }} >
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left">
                                    <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Mr. Faad Waheed</h4>
                                    <small className=" font-size-20 font-weight-normal">Director Waheed Group Of Companies</small>
                                </div>
                                <div className="text-content mt-20">
                                    <p>
                                        Mr. Faad Waheed is an important and integral part of Waheed Group of Companies. He has been
                                        served as a director of the Group for the last five years and has proven himself
                                        indispensable to the Group. In his early days, he studied from Beaconhouse School System
                                        and, to further his studies, travelled to Cana-da and graduated in Business Administration
                                        (Finance) from the prestigious Sheridan College. During his time there, Mr. Faad Waheed
                                        achieved great success in the sport of snooker and became Pakistan’s youngest
                                        internationally recognized snooker


                                        <span id="dots2">...</span><span id="more2" style={{ display: 'none' }}>




                                            coach as
                                            well as qualifying in the top 16th Canadian snooker players. While in Canada, Mr. Faad
                                            also became a member of the Canadian Association of accredited mortgage pro-fessionals
                                            (CAAMP).
                                            After joining WGC, Mr. Faad delved into the palm oil industry under the guidance of our
                                            chairman, Mr. Waheed, and became an essential part of the organization. Mr. Faad also
                                            handles our day-to-day opera-tions and management of our premium brand, Fauji Supreme,
                                            bringing it to new heights and recognition all across the country. He has also launched
                                            “Islamabad United Lions Club” which is an internationally recog-nized non-political
                                            service organization which aids those in need and brings attention to important issues
                                            plaguing the Pakistani community at large.

                                            Ever since joining WGC, Mr. Faad has held and continues to hold various important
                                            positions within and outside the palm oil industry, which are as listed below:
                                        </span>
                                    </p>



                                    <ul id="faadlist">

                                        <li><i className="fas fa-check-circle"></i> 2013 IBSF Certified Master Coach, approved
                                            by WPBSA</li>
                                        <li><i className="fas fa-check-circle"></i> 2013 Certified Master Coach &amp; Instructor in
                                            the art &amp; science of snooker coaching</li>
                                        <li><i className="fas fa-check-circle"></i> 2016 Member PBSF</li>
                                        <li><i className="fas fa-check-circle"></i> 2013: present International snooker coach,
                                            Snooker Canada.</li>
                                        <li><i className="fas fa-check-circle"></i> 2014: Co-founder - Pakistan snooker
                                            coaching.</li>
                                        <li><i className="fas fa-check-circle"></i> 2016-18: Executive member - Islamabad
                                            billiard and snooker associations.</li>
                                        <li><i className="fas fa-check-circle"></i> 2017-18: Senior vice chairman- standing
                                            committee on vegetable oil and ghee-FPCCI.</li>
                                        <li><i className="fas fa-check-circle"></i> 2018-19: Deputy Convener standing committee
                                            on vegetable oil and ghee FPCCI.</li>
                                        <li><i className="fas fa-check-circle"></i> 2019-20: Deputy Convener diplomatic
                                            Relations FPCCI.</li>
                                        <li><i className="fas fa-check-circle"></i> 2019-20: Convener J.V. in Pakistan FPCCI.
                                        </li>
                                        <li><i className="fas fa-check-circle"></i> 2018-19: Convener sports, Culture, Heritage
                                            FPCCI.</li>
                                        <li><i className="fas fa-check-circle"></i> 2019-20: Member international trade
                                            Promotion FPCCI.</li>
                                        <li><i className="fas fa-check-circle"></i> 2019-20: Chairman edible oil committee
                                            Islamabad chamber</li>
                                        <li><i className="fas fa-check-circle"></i> 2019: President Islamabad United Lions Club,
                                            Lions Club International</li>
                                        <li><i className="fas fa-check-circle"></i> 2019: Convener Billiards, Islamabad Club.
                                        </li>

                                    </ul>
                                    {/* </span> */}
                                </div>

                                {/* <div className="mt-40"><button href="" onclick="MyFunction2()" id="myBtn2" className="button-primary button-sm">Read More</button></div> */}

                                <div className="mt-40">
                                    <button href="" onClick={MyFunction2} id="myBtn2" className="button-primary button-sm">
                                        Read More</button></div>

                            </div>
                        </div>

                    </div>
                </div>

                {/* // <!--Third-- > */}

                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left">
                                    <h4 className="semi-bold font-size-35" style={{ color: "#083f88" }}>Mr. Hamad Waheed</h4>
                                    <small className=" font-size-20 font-weight-normal">Director Waheed Group Of Companies</small>
                                </div>
                                <div className="text-content mt-20">
                                    <p>
                                        Hamad Waheed is a young and upcoming dynamic entrepreneur. He did his early education from
                                        John Frasier High School, Canada. For his higher education he graduated from York
                                        University, Canada. After moving back to Pakistan in 2016, he joined WGC and introduced
                                        various new systems in the organization related to HR and Finance. In a short period of time
                                        Hamad Waheed has helped the organization to adopt international corporate practices.
                                    </p>
                                    <p>
                                        Moreover, he also handles the marketing of our premium brand, Fauji Supreme, in a broad
                                        spectrum of various canvases of advertising which includes ATL as well as BTL campaigns.
                                        Besides, HR marketing and finance, Mr. Hamad also has introduced an international standard
                                        of supply chain management throughout the various segments of WGC specially the import of
                                        palm oil and the nationwide supply chain of Fauji Supreme.
                                    </p>
                                </div>


                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="full-background background-right min-350 " style={{ backgroundImage: "url(" + imgOil01 + ")", position: 'relative    ', maxHeight: '650px' }}   >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div > */}
        </>

    )
}

export default Directors1
