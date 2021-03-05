import React from 'react'
import '../../App.css'
import AOS from 'aos';
import HomeSection from '../HomeSection'

function Home() {

    AOS.init({
        duration: 1500
    });

    return (
        <>
        <div className='container-section' data-aos="fade-in">
            <HomeSection />
        </div>
        <div id='about'></div>
        </>
    )
}

export default Home