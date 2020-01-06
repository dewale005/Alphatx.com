import React from 'react'
import Mobile from '../Img/Mobile.png'

function AboutApp() {
    return (
        <div className="apps-area wow fadeInUp section-padding" id="apps">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-5 offset-1 align-self-center">
                        <div className="heading">
                            <h5>MOBILE APP</h5>
                            <div className="space-10"></div>
                            <h1>Track from Anywhere</h1>
                            <div className="space-20"></div>
                            <p>Swimming hundreds of feet beneath the ocean’s surface in many parts of the world are prolific architects called giant larvaceans. These zooplankton are not particularly giant themselves  but every day, they construct one or more spacious houses that can exceed . </p>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not-quite-tuned-in radio station rises and for a while drowns out the patter.</p>
                        </div>
                        <div className="space-30"></div>
                        <a href="/" className="gradient-btn apps-btn"> <i className="zmdi zmdi-google-play"></i>Google Playstore</a>

                        <a href="/" className="gradient-btn apps-btn apps-btn-2"> <i className="zmdi zmdi-apple"></i>Apple Appstore</a>
                    </div>
                    <div className="col-12 col-lg-5 offset-1">
                        <div className="apps-img">
                            <img src={Mobile} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutApp
