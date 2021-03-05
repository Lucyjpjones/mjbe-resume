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
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: process.env.PUBLIC_URL + '/images/gallery-3.jpg',
        thumbnail: process.env.PUBLIC_URL + '/images/gallery-3.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 313,
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: process.env.PUBLIC_URL + '/images/gallery-4.jpg',
    thumbnail: process.env.PUBLIC_URL + '/images/gallery-4.jpg',
    thumbnailWidth: 320,
    thumbnailHeight: 333,
    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: process.env.PUBLIC_URL + '/images/gallery-2.jpeg',
    thumbnail: process.env.PUBLIC_URL + '/images/gallery-2.jpeg',
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    caption: "Boats (Jeshu John - designerspics.com)"
},
]

    return (
        <>
            <div className='container-section' data-aos="zoom-in">
                <Container>
                    <Gallery images={IMAGES}/>
                </Container>
            </div>
            <div id='contact'></div>
        </>
    )
}

export default Image