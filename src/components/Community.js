import React from 'react'

function Community() {
    return (
       <div className="community-area wow fadeInUp section-padding" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <div className="heading">
                        <h5>GReat Community</h5>
                        <div className="space-10"></div>
                        <h1>Our Community </h1>
                    </div>
                <div className="space-60"></div>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-lg">
                    <div className="single-community big-social">
                        <a className="google-plus" href="/"><i className="fa fa-google-plus"></i></a>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-community mid-social">
                        <a className="linkedin" href="/"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <div className="single-community">
                        <a className="dribbble" href="/"><i className="fa fa-dribbble"></i></a>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-community">
                        <a className="github" href="/"><i className="fa fa-github"></i></a>
                    </div>
                    <div className="single-community mid-social">
                        <a className="behance" href="/"><i className="fa fa-behance"></i></a>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-community big-social">
                        <a className="youtube" href="/"><i className="fa fa-youtube"></i></a>
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <div className="single-community mid-social">
                        <a className="twitter" href="/"><i className="fa fa-twitter"></i></a>
                    </div>
                    <div className="single-community">
                        <a className="flickr" href="/"><i className="fa fa-flickr"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Community
