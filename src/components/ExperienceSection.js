import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import ScrollToNextSection from './ScrollToNextSection'
import '../App.css'
import './About.css'
import './Cards.css'
import './Experience.css'
import AOS from 'aos';

function ExperienceSection() {

    AOS.init({
        duration: 2000
    });

    return (
        <Container className="section" data-aos="zoom-in">
            <h3 className='underline--text' style={{marginBottom:'10%'}}>Education & Qualifications</h3>
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/university.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}}>BSc SPORT AND EXERCISE SCIENCE</Card.Title>
                        <Card.Text>
                            <p style={{fontWeight:'600', color:'#14274e'}}>First Class Honors</p>
                            <p style={{fontSize:'.8rem'}}>Dissertation: Investigating whether single and multijoint isometric strength assessments can be valid
                            predictors of dynamic performance.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/st-marys.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}}>MSc STRENGTH & CONDITIONING</Card.Title>
                        <Card.Text>
                        <p style={{fontWeight:'600', color:'#14274e'}}>Distinction</p>
                        <p style={{fontSize:'.8rem'}}>Dissertation: The influence of physical load and
                        contextual variables on measures of post-match
                        fatigue in elite-level soccer players</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/trophy.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}} >Addional Qualifications</Card.Title>
                        <Card.Text style={{fontSize:'.8rem'}}>
                            <ul>
                                <li>
                                    UKSCA
                                </li>
                                <li>
                                    ALTIS
                                </li>
                                <li>
                                    BRITISH WEIGHTLIFTING
                                </li>
                                <li>
                                    PERSONAL TRAINING
                                </li>
                                <li>
                                    FA
                                </li>
                            </ul>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ScrollToNextSection />
        </Container>
    );
}

export default ExperienceSection

