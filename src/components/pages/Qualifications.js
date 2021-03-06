import React from 'react'
import '../../App.css'
import QualificationSection from '../QualificationSection'

function Qualifications() {
    return (
        <>
        <div className='container-section' data-aos="slide-up" data-aos-duration='800'>
            <QualificationSection />
        </div>
        <div id='work'></div>
        </>
    )
}

export default Qualifications