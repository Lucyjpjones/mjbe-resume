import React from 'react'
import '../../App.css'
import '../Footer.css'
// import { animations } from 'react-animation'

function Footer() {
    
    return (
        <footer>
            <ul className='social-icons'>
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href="mailto:michaeleglon@hotmail.com?subject=Resume%20Enquiry">
                        <i className='fas fa-at fa-2x'></i>
                    </a>
                </li> 
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/michael-eglon/'>
                        <i className='fab fa-linkedin-in fa-2x'></i>
                    </a>
                </li>
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href='https://twitter.com/Mike_Eglon'>
                        <i className='fab fa-twitter fa-2x'></i>
                     </a>
                </li>
                <li className='social-icon-link'>
                    <a target="_blank" rel="noreferrer" href='t'>
                        <i className='fas fa-phone-alt fa-2x'></i>
                    </a>
                </li> 
            </ul>
        </footer>
    )
}

export default Footer