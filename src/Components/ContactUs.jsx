import React from 'react'

function ContactUs() {
    return (

        <div>
            <div class="breadcrumb-section jarallax pixels-bg" data-jarallax="" data-speed="0.6">
                <div class="container text-center">
                    <h1>Contact Us </h1>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="Home">Contact Us </a></li>
                    </ul>
                </div>
            </div>

            <div class="section-block grey-bg">
                <div class="container">
                    <div class="section-heading text-center">
                        <h3 class="semi-bold font-size-30">We Are Glad We Can Help You</h3>
                        <div class="section-heading-line line-thin"></div>
                        {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt<br>ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>  */}
                    </div>
                    <form class="primary-form-2 mt-45" id="contactForm" method="post">
                        <div class="row">

                            <div class="col-md-10 col-sm-12 col-12 offset-md-1">
                                <div id="err" style={{ marginBottom: "50px" }} ></div>
                                <div class="row">

                                    <div class="col-md-12"> <input type="text" name="subject" placeholder="Subject" /> </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12"> <input type="text" name="name" placeholder="Name" />
                                    </div>
                                    <div class="col-md-6 col-sm-6 col-xs-12"> <input type="email" name="email" placeholder="E-mail" /> </div>
                                    <div class="col-md-12"> <textarea name="message" placeholder="Message"></textarea> </div>
                                    <div class="col-md-12"> <input type="submit" class="button-md button-primary full-width" style={{ backgroundColor: "#ef4036" }} value="Send Message" /> </div>

                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div >


        </div >






    )
}

export default ContactUs
