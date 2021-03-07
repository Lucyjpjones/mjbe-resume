import React from 'react'
import '../../App.css'
import { Container } from 'react-bootstrap';
import Gallery from 'react-grid-gallery';

function Image() {

    const IMAGES =
    [{
        src: process.env.PUBLIC_URL + '/images/gallery-1.jpeg',
        thumbnail: process.env.PUBLIC_URL + '/images/gallery-1.jpeg',
        thumbnailWidth: 320,
        thumbnailHeight: 220,
    },
    {
        src: process.env.PUBLIC_URL + '/images/gallery-3.jpg',
        thumbnail: process.env.PUBLIC_URL + '/images/gallery-3.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 313,
    },
    {
        src: process.env.PUBLIC_URL + '/images/gallery-4.jpg',
        thumbnail: process.env.PUBLIC_URL + '/images/gallery-4.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 333,
    },
    {
        src: process.env.PUBLIC_URL + '/images/gallery-2.jpeg',
        thumbnail: process.env.PUBLIC_URL + '/images/gallery-2.jpeg',
        thumbnailWidth: 320,
        thumbnailHeight: 200,
    }]

    return (
        <>
            <div className='container-section' data-aos="slide-up" data-aos-duration='800'>
                <Container>
                    <Gallery images={IMAGES}/>
                </Container>
            </div>
            <div id='contact'></div>
        </>
    )
}

export default Image