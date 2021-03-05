import React from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import '../App.css'
import './About.css'
import './Cards.css'
import './Experience.css'
import AOS from 'aos';

function ImageSection() {

    AOS.init({
        duration: 2000
    });

    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/images/img-1.jpeg'} alt='football'> 
                    </img>
                </Col>
                <Col xs={4}>
                    <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/images/img-1.jpeg'} alt='football'> 
                        </img>
                </Col>
                <Col xs={4}>
                    <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/images/img-1.jpeg'} alt='football'> 
                        </img>
                </Col>
                <Col xs={4}>
                    <img style={{width:'100%'}} src={process.env.PUBLIC_URL + '/images/img-1.jpeg'} alt='football'> 
                    </img>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageSection

