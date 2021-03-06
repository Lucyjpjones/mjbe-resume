import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import ScrollToNextSection from './ScrollToNextSection'
import '../App.css'
import './About.css'

function AboutSection() {

    return (
        <Container>
            <Row>
                <Col xs={12} md={4} style={{textAlign:'center'}}>
                    <img src={process.env.PUBLIC_URL + '/images/profile-img.png'} alt='profile' className='profile-img' />
                </Col>
                <Col xs={12} md={8}>
                    <h2 style={{marginLeft:10}}>Michael Eglon</h2>
                    <p style={{margin:10}}>
                        I am a performance coach with 5-years’ experience working at first-team level in the English Premier League. I have operated within various roles during my career, which has allowed me to develop a well-rounded knowledge and skill-set regarding sports-science support at the elite-level. I am a diligent worker when working individually, and strive to be a key contributor when working in a team. I am dedicated to my personal development, and endeavor to become a leading practitioner within the field.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection
