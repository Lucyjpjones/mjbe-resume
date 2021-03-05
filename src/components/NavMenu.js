import Hamburger from 'hamburger-react';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './NavMenu.css';

function NavMenu() {
    const [isOpen, setOpen] = useState(false);

    const closeMobileMenu = () => setOpen(false)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <div className='menu-icon'>
                    <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} color="#9ba4b4" />
                </div>
                <ul className={isOpen ? 'nav-menu active' : 'nav-menu'} >
                <li className='nav-item'>
                        <a href='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                            About
                        </a>
                    </li>
                    <li className='nav-item'>
                    <a href='#edu' className='nav-links' onClick={closeMobileMenu}>
                            Edu & Qualifications
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
        </>
    )
}

export default NavMenu
