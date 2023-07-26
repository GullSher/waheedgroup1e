import React from "react";
import './UpperNavbarCss.css';
// import "../AssetsMain/Css/style.css";

const UpperNavbar = () => {
    return (

        //    <div class="navigation-fixed-placeholder" style="height: 90px;"></div>
        <div id="top-bar" className="hidden-md-down">
            <div className="row" >
                <div className="col-md-9 col-12">
                    <ul className="top-bar-info">
                        <li><i className="fa fa-phone"></i> Phone: +92 (51) 4862 383</li>
                        <li>
                            <i className="fa fa-map-marker"></i>
                            House #88-A, Nazim Uddin Road, F-8/4, Islamabad,
                            Pakistan.</li>
                        <li><i className="fa fa-envelope"></i>Email: info@waheedgroup.com.pk</li>
                    </ul>
                </div>
                {/*        
       ======blow's code===========
    <div class="col-md-3 col-12">
          <ul class="social-icons hidden-sm">
                <li><a href="https://http://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                <li><a href="https://http://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="https://http://www.skype.com/" target="_blank"><i class="fab fa-skype"></i></a></li>
           </ul>
    </div>

       ==============================
 */}


                <div className="col-md-3 col-12">

                    {/* <ul className="social-icons hidden-sm" style={{
                        MarginTop: 'revert', display: 'flex', JustifyContent: 'space-evenly', Width: '150px', Height: '30px'
                    }}> */}

                    <ul className="social-icons hidden-sm">

                        <li>< a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="http://www.skype.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-skype"></i></a></li>
                    </ul>
                </div>
            </div >

        </div >



    )

}
export default UpperNavbar

