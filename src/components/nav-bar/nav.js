import React from 'react';
import './nav.scss';
import './nav.css';

function Navbar() {
    return (
    <nav className='nav-bar'>
        <div className='logo'>Logo</div>
        <div className='hamburger'>|||</div>
        <ul className="nav-items">
            <li><a href="#about-me" alt='about-me'>About Me</a></li>
            <li><a href="#experience" alt="experience">Experience</a></li>
            <li><a href="#portfolio" alt="portfolio">Portfolio</a></li>
            <li><a href="#contact" alt="contact">Contact</a></li>
        </ul>
    </nav>   
    )
}


export default Navbar;
