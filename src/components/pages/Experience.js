import React from 'react'
import '../../App.css'
import ExperienceSection from '../ExperienceSection'

function Experience() {
    return (
        <>
        <div className='container-section' data-aos="slide-up" data-aos-duration='800'>
            <ExperienceSection />
        </div>
        <div id='images'></div>
        </>
    )
}

export default Experience