import React from 'react'
import Flag1 from '../Img/flag-1.png'
import Flag2 from '../Img/flag-2.png'
import Flag3 from '../Img/flag-3.png'
import Flag4 from '../Img/flag-4.png'
import Flag5 from '../Img/flag-5.png'

function WhitePaper() {
    return (
        <div className="section-padding documentation-area wow fadeInUp" id="Paper">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="heading">
                        <h5>Whitepaper</h5>
                        <div className="space-10"></div>
                        <h1>Download Documentation</h1>
                    </div>
                    <div className="space-60"></div>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-6 col-lg">
                    <div className="single-document">
                        <div className="document-flag">
                            <img src={Flag1} alt="" />
                        </div>
                        <button className="single-document-text">
                            <span>English</span>
                        </button>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-document">
                        <div className="document-flag">
                            <img src={Flag2} alt="" />
                        </div>
                        <button className="single-document-text">
                            <span>Spanish</span>
                        </button>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-document">
                        <div className="document-flag">
                            <img src={Flag3} alt="" />
                        </div>
                        <button className="single-document-text">
                            <span>Russian</span>
                        </button>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-document">
                        <div className="document-flag">
                            <img src={Flag4} alt="" />
                        </div>
                        <button className="single-document-text">
                            <span>Arabic</span>
                        </button>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-document">
                        <div className="document-flag">
                            <img src={Flag5} alt="" />
                        </div>
                        <button className="single-document-text">
                            <span>Portuguese</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default WhitePaper
