import React, { useRef }from 'react'
import { FaAngleDown } from 'react-icons/fa';

// https://stackoverflow.com/questions/43441856/how-to-scroll-to-an-element

const ScrollToNextSection = () => {
    const styles= {
        color:'#fafafa',
        fontSize: '3.5rem',
        position:'absolute',
        bottom: 0,
        left: '50%',
        transform: 'translate(-50%, -10%)'
    }

    const targetSection = useRef(
        {name: null}
    )

    const nextSection = () => targetSection.current.scrollIntoView({behavior: 'smooth'})    

    return (
        <>
            <div ref={targetSection}></div>
            <button style={{border:'none', 'cursor':'pointer'}} onClick={nextSection}>
                <FaAngleDown style={styles} />
            </button>
        </>
    );
}

export default ScrollToNextSection