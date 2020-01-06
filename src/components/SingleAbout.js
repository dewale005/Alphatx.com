import React from 'react'
import AboutIcon1 from '../Img/about-icon-1.png'
import AboutIcon2 from '../Img/about-icon-2.png'
import AboutIcon3 from '../Img/about-icon-3.png'

function SingleAbout() {
    return (
        <div className="single-about-area wow fadeInUp">
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <a href="/" className="single-about">
                        <div className="single-about-img">
                            <img src={AboutIcon1} alt="" />
                        </div>
                        <div className="single-about-text">
                            <h4>Exciting Opportunity</h4>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not quite tuned in radio station rises and for a while drowns</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/" className="single-about">
                        <div className="single-about-img">
                            <img src={AboutIcon2} alt="" />
                        </div>
                        <div className="single-about-text">
                            <h4>Vetted ICO Marketplace</h4>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not quite tuned in radio station rises and for a while drowns</p>
                        </div>
                    </a>
                </div>
                <div className="col-lg-4">
                    <a href="/" className="single-about">
                        <div className="single-about-img">
                            <img src={AboutIcon3} alt="" />
                        </div>
                        <div className="single-about-text">
                            <h4>Diverse Profit Ways</h4>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a not quite tuned in radio station rises and for a while drowns</p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className="space-90"></div>
    </div>
    )
}

export default SingleAbout
