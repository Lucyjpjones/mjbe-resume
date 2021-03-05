import React from 'react'
import '../../App.css'
import HomeSection from '../HomeSection'

function Home() {
    return (
        <>
        <div className='container-section' data-aos="zoom-in">
            <HomeSection />
        </div>
        <div id='about'></div>
        </>
    )
}

export default Home