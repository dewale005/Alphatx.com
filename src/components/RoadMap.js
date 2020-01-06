import React from 'react'
import Stage1 from '../Img/roadmap-1.png'
import Stage2 from '../Img/roadmap-2.png'
import Stage4 from '../Img/roadmap-4.png'
import Stage5 from '../Img/roadmap-5.png'

function RoadMap() {
    return (
        <div className="roadmap-area section-padding wow fadeInUp" id="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="heading">
                        <h5>history Timeline</h5>
                        <div className="space-10"></div>
                        <h1>Development Roadmap</h1>
                    </div>
                    <div className="space-60 d-none d-sm-block"></div>
                </div>
            </div>
            
        </div>
        <div className="container">
            <div className="roadmap-carousel owl-carousel">
                <div className="roadmap-item">
                    <div className="single-roadmap text-center road-left">
                        <div className="single-roadmap-img">
                            <img src={Stage1} alt="" />
                        </div>
                        <div className="space-30"></div>
                        <div className="roadmap-text">
                            <p>01.03.2017</p>
                            <div className="space-10"></div>
                            <h5>Concept and whitepaper</h5>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a in token.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap-item align-self-center">
                    <div className="single-roadmap road-right">
                        <div className="row">
                            <div className="col-5 align-self-center">
                                <div className="single-roadmap-img">
                                    <img src={Stage2} alt="" />
                                </div>
                            </div>
                            <div className="col-7">
                                <div className="roadmap-text">
                                    <p>21.06 .2017</p>
                                    <h5>Recruitment of Our team</h5>
                                    <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a in token.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roadmap-item">
                    <div className="single-roadmap text-center road-left">
                        <div className="single-roadmap-img">
                            <img src={Stage4} alt="" />
                        </div>
                        <div className="space-30"></div>
                        <div className="roadmap-text">
                            <p>31.08.2017</p>
                            <div className="space-10"></div>
                            <h5>Core Development</h5>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a in token.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap-item align-self-center">
                    <div className="single-roadmap road-right">
                        <div className="row">
                            <div className="col-5 align-self-center">
                                <div className="single-roadmap-img">
                                    <img src={Stage5} alt="" />
                                </div>
                        
                            </div>
                            <div className="col-7">
                                <div className="roadmap-text">
                                    <p>31.11.2017</p>
                                    <h5>Main Development</h5>
                                    <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a in token.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="roadmap-item">
                    <div className="single-roadmap text-center road-left">
                        <div className="single-roadmap-img">
                            <img src={Stage4} alt="" />
                        </div>
                        <div className="space-30"></div>
                        <div className="roadmap-text">
                            <p>31.08.2017</p>
                            <div className="space-10"></div>
                            <h5>Core Development</h5>
                            <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a in token.</p>
                        </div>
                    </div>
                </div>
                <div className="roadmap-item align-self-center">
                    <div className="single-roadmap road-right">
                        <div className="row">
                            <div className="col-5 align-self-center">
                                <div className="single-roadmap-img">
                                    <img src={Stage5} alt="" />
                                </div>
                        
                            </div>
                            <div className="col-7">
                                <div className="roadmap-text">
                                    <p>31.11.2017</p>
                                    <h5>Main Development</h5>
                                    <p>The recording starts with the patter of a summer squall. Later, a drifting tone like that of a in token.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default RoadMap
