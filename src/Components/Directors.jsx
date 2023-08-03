import React from 'react';
import ImgDirector1 from '../AssetsMain/Uploads/awais.jpg';
// import imgOil01 from '../AssetsMain/Uploads/oil-01.jpg';
import imgOil01 from '../AssetsMain/Uploads/Directors/HamadWaheed.jpeg';
import ImgDirector2 from '../AssetsMain/Uploads/Directors/FaadWaheed.jpeg';

class Directors extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore1: false,
            showMore2: false,
        };
    }

    toggleShowMore1 = () => {
        this.setState((prevState) => ({
            showMore1: !prevState.showMore1,
        }));
    };

    toggleShowMore2 = () => {
        this.setState((prevState) => ({
            showMore2: !prevState.showMore2,
        }));
    };

    render() {
        const { showMore1, showMore2 } = this.state;

        return (
            <>
                {/* <div id="preloader">
                    <div className="lds-ellipsis">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    </div>
 */}

                {/* 
                <div id="top-bar" className="hidden-md-down">
                    <div className="">
                        <div className="row">
                            <div className="col-md-9 col-12">
                                <ul className="top-bar-info">
                                    <li>
                                        <i className="fas fa-phone"></i> Phone: +92 (51) 4862 383
                                    </li>
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>House #88-A, Nazim
                                        Uddin Road, F-8/4, Islamabad, Pakistan.
                                    </li>
                                    <li>
                                        <i className="fa fa-envelope"></i>Email:
                                        info@waheedgroup.com.pk
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-3 col-12">
                                <ul className="social-icons hidden-sm">
                                    <li>
                                        <a href="http://www.facebook.com" target="_blank">
                                            <i className="fab fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.twitter.com" target="_blank">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://www.skype.com" target="_blank">
                                            <i className="fab fa-skype"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* 
                <header>
                    <nav
                        id="navigation4"
                        className="container navigation"
                    >
                        <div className="nav-header">
                            <a className="nav-brand" href="index.html">
                                <img
                                    src="img/whImages/logo.png"
                                    className="main-logo"
                                    alt="logo"
                                    id="main_logo"
                                />
                            </a>
                            <div className="nav-toggle"></div>
                        </div>
                        <div className="nav-menus-wrapper">
                            <ul className="nav-menu align-to-right">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <a href="chairman.html">Chairman</a>
                                        </li>
                                        <li>
                                            <a href="directors.html">Directors</a>
                                        </li>
                                        <li>
                                            <a href="awards.html">Awards</a>
                                        </li>
                                        <li>
                                            <a href="aboutus.html">About Us</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Our Concerns</a>
                                    <ul className="nav-dropdown">
                                        <li>
                                            <a href="oil&ghee.html">Oil & Ghee</a>
                                        </li>
                                        <li>
                                            <a href="industrial-fat.html">Industrial Fat</a>
                                        </li>
                                        <li>
                                            <a href="transport.html">Transport</a>
                                        </li>
                                        <li>
                                            <a href="hotel.html">Hotel</a>
                                        </li>
                                        <li>
                                            <a href="energy-sector.html">Energy Sector</a>
                                        </li>
                                        <li>
                                            <a href="wgc-interprises-ltd.html">
                                                WGC Interprises Ltd
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="products.html">Our Products</a>
                                </li>
                                <li>
                                    <a href="latestNews.html">Latest News</a>
                                </li>
                                <li>
                                    <a href="gallery.html">Media Gallery</a>
                                </li>
                                <li>
                                    <a href="contactus.html">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header> 
                */}

                {/* First */}
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left">
                                    <h4 className="semi-bold font-size-35" style={{ color: '#083f88' }}>
                                        Mr. Awais Karni
                                    </h4>
                                    <small className="font-size-20 font-weight-normal">
                                        Director Waheed Group Of Companies
                                    </small>
                                </div>
                                <div className="text-content mt-20">
                                    <p>
                                        Awais Karni is one of our key directors and has lamented himself as a seasoned
                                        veteran of the palm oil industry with an experience of more than 15 years and
                                        has credited himself by creating and managing various brands of cooking oil and
                                        ghee which includes our flagship premium brand, Fauji Supreme. During his
                                        adolescence years, Mr. Karni attended Beaconhouse School System and, to further
                                        his education, tra-velled abroad and graduated from the prestigious Everest
                                        College, Canada.
                                        {showMore1 ? (
                                            <>
                                                During his 10 years in WGC, Mr. Awais Karni has garnered many achievements
                                                which include re-ceiving a golden medal from the President of Pakistan for
                                                “Highest Importer of Edible Oil” in 2018. Mr. Karni has kept himself engaged
                                                in the palm oil industry further by becoming Vice President of Pakistan
                                                Vanaspati Manufacturing Association (PVMA) from 2011 to 2012. He has also
                                                received the award for “High-est Importer of Palm Oil” from Pakistan Edible
                                                Oil Conference (PEOC) in 2018. Internationally, Mr. Karni has become a known
                                                face of Pakistan’s palm oil industry by traveling the world while attending
                                                and partici-pating in various palm oil familiarization programs conducted by
                                                several countries, especially Malaysia.
                                            </>
                                        ) : (
                                            <span>
                                                ...
                                                <span id="dots">...</span>
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className="mt-40">
                                    <button
                                        href=""
                                        onClick={this.toggleShowMore1}
                                        id="myBtn"
                                        className="button-primary button-sm"
                                    >
                                        {showMore1 ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div
                                className="full-background background-right min-350"
                                style={{
                                    // backgroundImage: 'url(uploads/awais.jpg)',
                                    backgroundImage: "url(" + ImgDirector1 + ")",
                                    position: 'relative',
                                    backgroundSize: 'cover',
                                    // maxHeight: '75%',
                                    maxHeight: '650px',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>

                {/* Second */}
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-12 col-12">

                            <div
                                className="full-background background-right min-350"
                                style={{
                                    // backgroundImage: 'url(uploads/oil-01.jpg)',
                                    backgroundImage: "url(" + ImgDirector2 + ")",
                                    position: 'relative',
                                    backgroundSize: 'cover',
                                    // maxHeight: '75%'
                                    maxHeight: '650px',
                                }}
                            ></div>



                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left">
                                    <h4 className="semi-bold font-size-35" style={{ color: '#083f88' }}>
                                        Mr. Faad Waheed
                                    </h4>
                                    <small className="font-size-20 font-weight-normal">
                                        Director Waheed Group Of Companies
                                    </small>
                                </div>
                                <div className="text-content mt-20">
                                    <p>
                                        Mr. Faad Waheed is an important and integral part of Waheed Group of
                                        Companies. He has been served as a director of the Group for the last five
                                        years and has proven himself indispensable to the Group. In his early days, he
                                        studied from Beaconhouse School System and, to further his studies, travelled to
                                        Cana-da and graduated in Business Administration (Finance) from the prestigious
                                        Sheridan College. During his time there, Mr. Faad Waheed achieved great success
                                        in the sport of snooker and became Pakistan’s youngest internationally recognized
                                        snooker{' '}
                                        {showMore2 ? (
                                            <>
                                                coach as well as qualifying in the top 16th Canadian snooker players. While
                                                in Canada, Mr. Faad also became a member of the Canadian Association of
                                                accredited mortgage pro-fessionals (CAAMP).
                                                After joining WGC, Mr. Faad delved into the palm oil industry under the
                                                guidance of our chairman, Mr. Waheed, and became an essential part of the
                                                organization. Mr. Faad also handles our day-to-day opera-tions and management
                                                of our premium brand, Fauji Supreme, bringing it to new heights and
                                                recognition all across the country. He has also launched “Islamabad United
                                                Lions Club” which is an internationally recog-nized non-political service
                                                organization which aids those in need and brings attention to important issues
                                                plaguing the Pakistani community at large.
                                                Ever since joining WGC, Mr. Faad has held and continues to hold various
                                                important positions within and outside the palm oil industry, which are as
                                                listed below:
                                                <ul id="faadlist">
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2013 IBSF Certified Master
                                                        Coach, approved by WPBSA
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2013 Certified Master Coach &
                                                        Instructor in the art & science of snooker coaching
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2016 Member PBSF
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2013: present International
                                                        snooker coach, Snooker Canada.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2014: Co-founder - Pakistan
                                                        snooker coaching.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2016-18: Executive member -
                                                        Islamabad billiard and snooker associations.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2017-18: Senior vice chairman-
                                                        standing committee on vegetable oil and ghee-FPCCI.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2018-19: Deputy Convener
                                                        standing committee on vegetable oil and ghee FPCCI.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2019-20: Deputy Convener
                                                        diplomatic Relations FPCCI.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2019-20: Convener J.V. in
                                                        Pakistan FPCCI.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2018-19: Convener sports,
                                                        Culture, Heritage FPCCI.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2019-20: Member international
                                                        trade Promotion FPCCI.
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2019-20: Chairman edible oil
                                                        committee Islamabad chamber
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2019: President Islamabad
                                                        United Lions Club, Lions Club International
                                                    </li>
                                                    <li>
                                                        <i className="fas fa-check-circle"></i> 2019: Convener Billiards,
                                                        Islamabad Club.
                                                    </li>
                                                </ul>
                                            </>
                                        ) : (
                                            <span>
                                                ...
                                                <span id="dots2">...</span>
                                            </span>
                                        )}
                                    </p>
                                </div>

                                <div className="mt-40">
                                    <button
                                        href=""
                                        onClick={this.toggleShowMore2}
                                        id="myBtn2"
                                        className="button-primary button-sm"
                                    >
                                        {showMore2 ? 'Read Less' : 'Read More'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third */}
                <div className="container-fluid pl-0 pr-0">
                    <div className="row no-gutters">
                        <div className="col-md-6 col-sm-12 col-12">
                            <div className="padding-10-perc grey-bg background-80 background-no-repeat background-center">
                                <div className="section-heading text-left">
                                    <h4 className="semi-bold font-size-35" style={{ color: '#083f88' }}>
                                        Mr. Hamad Waheed
                                    </h4>
                                    <small className="font-size-20 font-weight-normal">
                                        Director Waheed Group Of Companies
                                    </small>
                                </div>
                                <div className="text-content mt-20">
                                    <p>
                                        Hamad Waheed is a young and upcoming dynamic entrepreneur. He did his early
                                        education from John Frasier High School, Canada. For his higher education he
                                        graduated from York University, Canada. After moving back to Pakistan in 2016,
                                        he joined WGC and introduced various new systems in the organization related to
                                        HR and Finance. In a short period of time Hamad Waheed has helped the organization
                                        to adopt international corporate practices.
                                    </p>
                                    <p>
                                        Moreover, he also handles the marketing of our premium brand, Fauji Supreme, in a
                                        broad spectrum of various canvases of advertising which includes ATL as well as BTL
                                        campaigns. Besides, HR marketing and finance, Mr. Hamad also has introduced an
                                        international standard of supply chain management throughout the various segments
                                        of WGC specially the import of palm oil and the nationwide supply chain of Fauji
                                        Supreme.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 col-12">
                            <div
                                className="full-background background-right min-350"
                                style={{
                                    // backgroundImage: 'url(uploads/oil-01.jpg)',
                                    backgroundImage: "url(" + imgOil01 + ")",
                                    position: 'relative',
                                    backgroundSize: 'cover',
                                    maxHeight: '75%,'
                                    // maxHeight: '650px',
                                }}
                            ></div>
                        </div>
                    </div>
                </div>


                {/* 
                <footer>
                    <div className="footer-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-sm-6 col-12">
                                    <a href="#">
                                        <img src="img/whImages/logo.png" id="footer_logo" alt="logo" />
                                    </a>
                                    <p className="mt-20">
                                        Welcome to the Waheed Group of Companies! What started off over four decades ago
                                        as a small business has today spread out by leaps and bounds to be-come Pakistan’s
                                        largest business group.
                                    </p>
                                    <ul className="social-links-footer">
                                        <li>
                                            <a href="http://www.facebook.com" target="_blank">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.twitter.com" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.skype.com" target="_blank">
                                                <i className="fab fa-skype"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="col-md-4 col-sm-6 col-12">
                                    <h2>Recent news</h2>
                                    <ul className="footer-news mt-25">
                                        <li>
                                            <a href="latestNews.html#Mr Abdul Waheed, Chairman PVMA KN News">
                                                Mr Abdul Waheed, Chairman PVMA KN News
                                            </a>
                                            <strong>
                                                <i className="fa fa-calendar"></i> 2020-10-19
                                            </strong>
                                        </li>

                                        <li>
                                            <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan">
                                                Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan
                                            </a>
                                            <strong>
                                                <i className="fa fa-calendar"></i> 2019-06-20
                                            </strong>
                                        </li>

                                        <li>
                                            <a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">
                                                Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE
                                            </a>
                                            <strong>
                                                <i className="fa fa-calendar"></i> 2019-06-20
                                            </strong>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-sm-6 col-12">
                                    <div id="subMessage"></div>
                                    <h2>Subscribe</h2>
                                    <div className="footer-subscribe-form mt-25" id="subscribeFromFooter">
                                        <div className="d-table full-width">
                                            <div className="d-table-cell">
                                                <input type="text" id="subEmail" placeholder="Your Email adress" />
                                            </div>
                                            <div className="d-table-cell">
                                                <button id="saveSub" onClick={this.saveSubscription}>
                                                    <i className="fas fa-envelope"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-10">Get latest updates and offers.</p>
                                </div>
                            </div>
                            <div className="footer-1-bar">
                                <p>
                                    <a
                                        href="https://gullsher.github.io/waheedgrouphtml/index.html"
                                        target="_blank"
                                        style={{ color: 'white' }}
                                    >
                                        WAHEED GROUP || IT{' '}
                                    </a>{' '}
                                    © 2023. All Rights Reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </footer> 
                
    
                <a href="#" className="scroll-to-top">
                    <i className="fas fa-chevron-up"></i>
                </a>

*/}


                {/* 
                <script src="js/jquery.min.js"></script>
                <script src="js/plugins.js"></script>
                <script src="js/Chart.bundle.js"></script>
                <script src="js/utils.js"></script>
                <script src="js/navigation.js"></script>
                <script src="js/navigation.fixed.js"></script>
                <script src="js/rev-slider/jquery.themepunch.tools.min.js"></script>
                <script src="js/rev-slider/jquery.themepunch.revolution.min.js"></script>
                <script src="js/rev-slider/revolution.extension.actions.min.js"></script>
                <script src="js/rev-slider/revolution.extension.carousel.min.js"></script>
                <script src="js/rev-slider/revolution.extension.kenburn.min.js"></script>
                <script src="js/rev-slider/revolution.extension.layeranimation.min.js"></script>
                <script src="js/rev-slider/revolution.extension.migration.min.js"></script>
                <script src="js/rev-slider/revolution.extension.parallax.min.js"></script>
                <script src="js/rev-slider/revolution.extension.navigation.min.js"></script>
                <script src="js/rev-slider/revolution.extension.slideanims.min.js"></script>
                <script src="js/rev-slider/revolution.extension.video.min.js"></script>
                <script src="js/map.js"></script>
                <script src="js/active.js"></script>
 */}

                {/* </div> */}
            </>
        );
    }
}

export default Directors;
