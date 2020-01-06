import React from 'react'
import Logo1 from '../Img/c-logo-1.png'
import Logo2 from '../Img/c-logo-2.png'
import Logo3 from '../Img/c-logo-3.png'
import Logo4 from '../Img/c-logo-4.png'
import Logo5 from '../Img/c-logo-5.png'
import AboutImg from '../Img/about-left.png'

function About() {
    return (
         <div className="about-area wow fadeInUp" id="about">
        <div className="space-30"></div>
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="heading">
                        <h5>We are featured in</h5>
                    </div>
                    <div className="space-30"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="logo-carousel owl-carousel text-center">
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo1} alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo2} alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo3}  alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo4}  alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo5}  alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo3}  alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo2}  alt="" />
                            </div>
                        </div>
                        <div className="single-logo-wrapper">
                            <div className="single-item">
                                <img src={Logo5}  alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space-90"></div>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="about-mid-img">
                        <img src={AboutImg} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6 align-self-center">
                    <div className="heading">
                        <h5>We are featured in</h5>
                    </div>
                    <div className="about-mid-text">
                        <h1>A Platform for Exchange 
                        Cyrptocurrency and shares</h1>
                        <div className="space-10"></div>
                        <p>Mauna Loa, the biggest volcano on Earth  half the Island of Hawaii. Just 35 miles to the northeast, Mauna Kea, known to native Hawaiians as Mauna a Wakea, rises nearly 14,000 feet above sea level.  If they are so close together, how did they develop in two parallel tracks .Sifting through teaspoons of clay and sand scraped from the floors of caves.</p>
                    </div>
                    <div className="space-30"></div>
                    <a href="/" className="gradient-btn v2 about-btn"> <i className="fa fa-send-o"></i> join us on telegraph</a>
                </div>
            </div>
        </div>
            <div className="space-90"></div>
        </div>  
    )
}

export default About
