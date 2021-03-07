import Hamburger from 'hamburger-react';
import React, { useState } from 'react'
import './NavMenu.css';

function NavMenu() {
    const [isOpen, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false)

    return (
        <>
        <nav className='navbar'>
            <div className="navbar-container">
                <div className='menu-icon'>
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#fafafa" />
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} >
                    <li className='nav-item'>
                        <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                    <a href='#edu' className='nav-links' onClick={closeMobileMenu}>
                            Qualifications
                        </a>
                    </li>
                    <li className='nav-item'>
                    <a href='#work' className='nav-links' onClick={closeMobileMenu}>
                            Experience
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#images' className='nav-links' onClick={closeMobileMenu}>
                            Gallery
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
        <div className={isOpen ? 'overlay' : ''}> </div>
        </>
    )
}

export default NavMenu
