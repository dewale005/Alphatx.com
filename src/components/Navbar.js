import React from 'react'
import Logo from '../Img/logo-top.png'

function Navbar() {
    return (
            <div className="header-area wow fadeInDown header-absolate" id="nav" data-0="position:fixed;" data-top-top="position:fixed;top:0;" data-edge-strategy="set">
                <div className="container">
                    <div className="row">
                        <div className="col-4 d-block d-lg-none">
                        <div className="mobile-menu"></div>
                    </div>
                    <div className="col-4 col-lg-2">
                        <div className="logo-area">
                            <a href="/">
                                <img src={Logo} alt="" />
                            </a>
                        </div>
                    </div>
                        <div className="col-4 col-lg-8 d-none d-lg-block">
                            <div className="main-menu text-center">
                                <nav>
                                    <ul id="slick-nav">
                                        <li><a className="scroll" href="#home">home</a>
                                            {/* <ul>
                                                <li><a href="index.html">Version 1</a></li>
                                                <li><a href="index2.html">Version 2</a></li>
                                                <li><a href="blog.html">blog</a></li>
                                                <li><a href="single-blog.html">single blog</a></li>
                                            </ul> */}
                                        </li>
                                        <li><a className="scroll" href="#about">About</a>
                                        </li>
                                        <li><a className="scroll" href="#Paper">White Paper</a></li>
                                        <li><a className="scroll" href="#token">Token Sale</a></li>
                                        <li><a className="scroll" href="#roadmap">Roadmap</a></li>
                                        <li><a className="scroll" href="#team">Team</a></li>
                                        <li><a className="scroll" href="#apps">APP</a></li>
                                        <li><a className="scroll" href="#faq">FAQ</a></li>
                                        <li><a className="scroll" href="#contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    <div className="col-4 col-lg-2 text-right" style={{ marginTop: '17px'}}>
                            <a href="/" className="logibtn gradient-btn">login</a>
                        </div>
                        
                    </div>
                </div>
        </div>
    )
}

export default Navbar
