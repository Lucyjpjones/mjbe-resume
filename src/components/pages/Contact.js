import React from 'react'
import '../../App.css'
import ContactForm from '../ContactForm'

function Contact() {
    return (
        <div className='container-section' data-aos="slide-up" data-aos-duration='800'>
            <ContactForm />
        </div>
    )
}

export default Contact