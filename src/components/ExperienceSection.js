import React from 'react'
import { Row, Col, Container, Card, Carousel } from 'react-bootstrap';
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
        <Container id="edu-container">
            <h3 className='underline--text'>Qualifications</h3>
            <Row>
                <Carousel controls={false} style={{width:'90%'}} >
                    <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/university.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}}>BSc SPORT AND EXERCISE SCIENCE</Card.Title>
                        <Card.Text>
                            <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>First Class Honors</p>
                            <p style={{fontSize:'.8rem'}}>Dissertation: Investigating whether single and multijoint isometric strength assessments can be valid
                            predictors of dynamic performance.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/st-marys.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}}>MSc STRENGTH & CONDITIONING</Card.Title>
                        <Card.Text>
                        <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>Distinction</p>
                        <p style={{fontSize:'.8rem'}}>Dissertation: The influence of physical load and
                        contextual variables on measures of post-match
                        fatigue in elite-level soccer players</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    </Carousel.Item>
                    <Carousel.Item>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/award.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}} >Addional Qualifications</Card.Title>
                        <Card.Text style={{fontSize:'.8rem'}}>
                            <ul className='ul-experience' >
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
                    </Carousel.Item>
                </Carousel>
                {/* <Col xs={11} md={4}>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/university.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}}>BSc SPORT AND EXERCISE SCIENCE</Card.Title>
                        <Card.Text>
                            <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>First Class Honors</p>
                            <p style={{fontSize:'.8rem'}}>Dissertation: Investigating whether single and multijoint isometric strength assessments can be valid
                            predictors of dynamic performance.</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={11} md={4}>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/st-marys.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}}>MSc STRENGTH & CONDITIONING</Card.Title>
                        <Card.Text>
                        <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>Distinction</p>
                        <p style={{fontSize:'.8rem'}}>Dissertation: The influence of physical load and
                        contextual variables on measures of post-match
                        fatigue in elite-level soccer players</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={11} md={4}>
                    <Card>
                        <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/award.png'} />
                        <Card.Body>
                        <Card.Title style={{fontSize:'1rem'}} >Addional Qualifications</Card.Title>
                        <Card.Text style={{fontSize:'.8rem'}}>
                            <ul className='ul-experience' >
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
                </Col> */}
            </Row>
        </Container>
    );
}

export default ExperienceSection

