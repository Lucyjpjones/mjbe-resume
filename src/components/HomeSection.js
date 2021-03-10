import React, { useState } from 'react'
import ITyped from 'react-ityped';
import { IoIosArrowDown } from "react-icons/io";
import { GrDownload } from "react-icons/gr";
import '../App.css'
import './Home.css'

function HomeSection() {

    const textStrings = ['Performance Coach', 'Crystal Palace FC']

    const [innerText, setInnerText] = useState(false);


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
                <a 
                    target="_blank" 
                    rel="noreferrer" 
                    href={process.env.PUBLIC_URL + '/files/mjbe-resume.pdf'} 
                    className='btn-cv' 
                    onMouseEnter={() => setInnerText(true)}
                    onMouseLeave={() => setInnerText(false)} >
                        {innerText ? <GrDownload /> : <div>Get CV</div>}
                </a>
                <a href='#about' className='arrow'>
                 <IoIosArrowDown className="arrow-icon fa-3x bounce" />
                </a>
            </div>
    );
}

export default HomeSection
