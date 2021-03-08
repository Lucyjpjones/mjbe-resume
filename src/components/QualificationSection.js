import React from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
    MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import '../App.css'
import './About.css'
import './Cards.css'
import useWindowWidth from './WindowWidth';

function QualificationSection() {

    useWindowWidth()

    const width = window.innerWidth;
    const breakpoint = 768;
    const lengthNumber = width > breakpoint ? 1 : 3;
    const indicatorValue = width > breakpoint ? false : true;

    return (
        <MDBContainer id="edu-container">
            <h3 className='underline--text'>Qualifications</h3>
            <MDBCarousel interval={6000} activeItem={1} length={lengthNumber} slide={true} showControls={false} showIndicators={indicatorValue} multiItem>
                <MDBCarouselInner>
                    <MDBRow>
                        <MDBCarouselItem itemId="1">
                        <MDBCol md="4" className="d-md-inline-block">
                            <MDBCard>
                            <MDBCardImage src={process.env.PUBLIC_URL + '/images/st-marys.png'} />
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize:'1rem'}} >MSc Strength & Conditioning</MDBCardTitle>
                                <MDBCardText>
                                    <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>Distinction</p>
                                    <p style={{fontSize:'.8rem'}}>Dissertation: The influence of physical load and
                                    contextual variables on measures of post-match
                                    fatigue in elite-level soccer players</p>
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4" className="d-none d-md-inline-block">
                            <MDBCard>
                            <MDBCardImage src={process.env.PUBLIC_URL + '/images/university.png'} />
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize:'1rem'}} >BSc Sport and Exercise Science</MDBCardTitle>
                                <MDBCardText>
                                <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>First Class Honors</p>
                                <p style={{fontSize:'.8rem'}}>Dissertation: Investigating whether single and multijoint isometric strength assessments can be valid
                                predictors of dynamic performance.</p>
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol md="4" className="d-none d-md-inline-block">
                            <MDBCard>
                            <MDBCardImage src={process.env.PUBLIC_URL + '/images/award.png'} />
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize:'1rem'}} >Addional Qualifications</MDBCardTitle>
                                <MDBCardText style={{fontSize:'.8rem'}}>
                                <ul className='ul-experience' >
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>UKSCA <span style={{color:'#9ba4b4', fontSize: '80%'}}>3 out of 4 parts completed</span></p>
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>ALTIS <span style={{color:'#9ba4b4', fontSize: '80%'}}> Completing the “Need for Speed” course</span></p>
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>BRITISH WEIGHTLIFTING <span style={{color:'#9ba4b4', fontSize: '80%'}}> Level 1 Assistant Weightlifting Coach certification</span></p>    
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>PERSONAL TRAINING <span style={{color:'#9ba4b4', fontSize: '80%'}}> Active IQ Level 3 Diploma in Fitness, Instructing and Personal Training</span></p>   
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>FA <span style={{color:'#9ba4b4', fontSize: '80%'}}> Futsal Level 1, FA Coaching Level 1, First Aid, Safeguarding Children</span></p>
                                    </li>
                                </ul>
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="2">
                        <MDBCol className="d-md-none">
                            <MDBCard>
                            <MDBCardImage src={process.env.PUBLIC_URL + '/images/university.png'} />
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize:'1rem'}} >BSc Sport and Exercise Science</MDBCardTitle>
                                <MDBCardText>
                                <p style={{fontWeight:'600', color:'#394867', fontSize:'.9rem'}}>First Class Honors</p>
                                <p style={{fontSize:'.8rem'}}>Dissertation: Investigating whether single and multijoint isometric strength assessments can be valid
                                predictors of dynamic performance.</p>
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        </MDBCarouselItem>
                        <MDBCarouselItem itemId="3">
                        <MDBCol className="d-md-none">
                            <MDBCard>
                            <MDBCardImage src={process.env.PUBLIC_URL + '/images/award.png'} />
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize:'1rem'}} >Addional Qualifications</MDBCardTitle>
                                <MDBCardText style={{fontSize:'.8rem'}}>
                                <ul className='ul-experience' >
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>UKSCA <span style={{color:'#9ba4b4', fontSize: '80%'}}>3 out of 4 parts completed</span></p>
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>ALTIS <span style={{color:'#9ba4b4', fontSize: '80%'}}> Completing the “Need for Speed” course</span></p>
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>BRITISH WEIGHTLIFTING <span style={{color:'#9ba4b4', fontSize: '80%'}}> Level 1 Assistant Weightlifting Coach certification</span></p>    
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>PERSONAL TRAINING <span style={{color:'#9ba4b4', fontSize: '80%'}}> Active IQ Level 3 Diploma in Fitness, Instructing and Personal Training</span></p>   
                                    </li>
                                    <li>
                                        <p style={{fontWeight: 'bold'}}>FA <span style={{color:'#9ba4b4', fontSize: '80%'}}> Futsal Level 1, FA Coaching Level 1, First Aid, Safeguarding Children</span></p>
                                    </li>
                                </ul>
                                </MDBCardText>
                            </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        </MDBCarouselItem>
                    </MDBRow>
                    </MDBCarouselInner>
                </MDBCarousel>
        </MDBContainer>
    );
}

export default QualificationSection

