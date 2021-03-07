import React from 'react'
import '../../App.css'
import HomeSection from '../HomeSection'

function Home() {

    return (
        <>
        <div className='container-section' data-aos="fade-zoom-in" data-aos-duration='600'>
            <HomeSection />
        </div>
        <div id='about'></div>
        </>
    )
}

export default Home