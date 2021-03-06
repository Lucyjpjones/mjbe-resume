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
            </ul>
            <p style={{color:'#9ba4b4', 'textAlign': 'center', 'marginTop': '2%', 'marginBottom': 0, fontSize: 10}}>Copyright © 2021 Lucy J P Jones</p>
        </footer>
    )
}

export default Footer