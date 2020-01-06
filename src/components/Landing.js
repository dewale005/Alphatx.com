import React from 'react'

function Landing() {
    return (
        <div className="welcome-area v2 wow fadeInUp" id="home">
        <div id="particles-js"></div>
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-6 align-self-center">
                    <div className="welcome-right">
                        <div className="welcome-text">
                             <h1>Fast Growing ICO 
                            Agency for Blockchain
                            Investors and Founders </h1>
                            <h4>Sifting through teaspoons of clay and sand scraped from the 
    floors of caves, German researchers have managed.</h4>
                        </div>
                        <div className="welcome-btn">
                            <a href="/" className="gradient-btn v2 mr-20">Register for the ICO</a>
                            <a href="/" className="gradient-btn v2">Download Whitepaper</a>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-5 offset-1">
                    <div className="v2 welcome-progress">
                        <h4>ico ends in</h4>
                        <div className="progress-time">
                            <div className="row">
                               <div className="col">
                                   <span id="days" className="timeOne"></span>
                                   <h5>days</h5>
                               </div>
                               <div className="col">
                                   <span id="hours" className="timeTwo"></span>
                                   <h5>hours</h5>
                               </div>
                               <div className="col">
                                   <span id="minutes" className="timeTrhee"></span>
                                    <h5>minutes</h5>
                               </div>
                               <div className="col">
                                   <span id="seconds" className="timeFour"></span>
                                   <h5>seconds</h5>
                               </div>
                           </div>
                        </div>
                        <div className="space-10"></div>
                        <div className="prgress-bar">
                            <div className="row">
                                <div className="col">
                                    <div className="single-prgress-w">
                                        <p>goals</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="single-prgress-w text-right">
                                        <p>$ 100 m</p>
                                    </div>
                                </div>
                            </div>
                            <div className="progress v2">
                                <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '20em'}}>
                                  <span className="sr-only">70% Complete</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="single-prgress-b">
                                        <p>BTC Collected : 120,250</p>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="single-prgress-b text-right">
                                        <p>Total : 250,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-10"></div>
                        <a href="/" className="gradient-btn">Invest in ico</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Landing
