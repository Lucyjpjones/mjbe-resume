import React from 'react'
import ITyped from 'react-ityped';
import ScrollToNextSection from './ScrollToNextSection'
import '../App.css'
import './Home.css'

function HomeSection() {

    const textStrings = ['Performance Coach', 'Crystal Palace FC']

    return (
        <div className="main-image">
            <h1>Michael Eglon</h1>
            <ITyped className='typing-text'
                showCursor={false}
                strings={textStrings}
                typeSpeed={150}
                backSpeed={100}
                startDelay={100}
                backDelay={150}
            />
            <a target="_blank" rel="noreferrer" href={process.env.PUBLIC_URL + '/files/mjbe-resume.pdf'} className='btn-cv'>Get CV</a>
            <ScrollToNextSection />
        </div>
    );
}

export default HomeSection
