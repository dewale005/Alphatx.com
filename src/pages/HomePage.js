import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import About from '../components/About'
import SingleAbout from '../components/SingleAbout'
import WhitePaper from '../components/WhitePaper'
import Distribution from '../components/Distribution'
import RoadMap from '../components/RoadMap'
import Team from '../components/Team'
import AboutApp from '../components/AboutApp'
import Community from '../components/Community'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FAQ from '../components/FAQ'

function HomePage() {
    return (
        <div>
            <Navbar />
            <Landing />
            <About />
            <SingleAbout />
            <WhitePaper />
            <Distribution />
            <RoadMap />
            <Team />
            <AboutApp />
            <Community />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}

export default HomePage
