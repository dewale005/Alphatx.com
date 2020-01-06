import React from 'react'

function Contact() {
    return (
         <div className="community-area v2 wow fadeInUp section-padding" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="heading">
                            <h5>contact</h5>
                            <div className="space-10"></div>
                            <h1>Drop Your Message</h1>
                        </div>
                        <div className="space-60"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-5 offset-2">
                        <div className="contact-form">
                            <form action="#">
                                <input type="text" placeholder="your name" />
                                <div className="space-20"></div>
                                <input type="email" placeholder="your email" />
                                <div className="space-20"></div>
                                <textarea name="text" id="message" cols="30" placeholder="Write your message" rows="5"></textarea>
                            </form>
                            <div className="space-20"></div>
                            <a href="/" className="gradient-btn v2">Send message</a>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="contact-details">
                            <div className="single-details">
                                <small>For general enquires</small>
                                <div className="space-10"></div>
                                <a href="/">info@alphatxn.io</a>
                            </div>
                            <div className="space-30"></div>
                            <div className="single-details">
                                <small>For general enquires</small>
                                <div className="space-10"></div>
                                <a href="/">info@alphatxn.io</a>
                            </div>
                            <div className="space-30"></div>
                            <div className="single-details">
                                <small>anything else? just call us</small>
                                <div className="space-10"></div>
                                <a href="/">22588 268 2563 584</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
