import React from 'react'
import '../../App.css'
import AOS from 'aos';
import HomeSection from '../HomeSection'

function Home() {

    return (
        <>
        <div className='container-section'>
            <HomeSection />
        </div>
        <div id='about'></div>
        </>
    )
}

export default Home