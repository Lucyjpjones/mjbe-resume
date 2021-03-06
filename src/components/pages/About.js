import React from 'react'
import '../../App.css'
import AboutSection from '../AboutSection'
import AOS from 'aos';

function About() {

    AOS.init();

    return (
        <>
        <div className='container-section' data-aos="slide-up" data-aos-duration='800'>
            <AboutSection />
        </div>
        <div id="edu"></div>
        </>
    )
}

export default About