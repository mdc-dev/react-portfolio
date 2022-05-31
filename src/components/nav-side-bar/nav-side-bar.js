import React from 'react';
import './nav-side-bar.scss';

function Sidenavbar() {
    return (
    <nav className='nav-side-bar hide'>
        <div className="exit">
            <p>x</p>
        </div>
        <ul className="nav-items">
            <li><a href="#about-me" alt='about-me'>About Me</a></li>
            <li><a href="#experience" alt="experience">Experience</a></li>
            <li><a href="#portfolio" alt="portfolio">Portfolio</a></li>
            <li><a href="#contact" alt="contact">Contact</a></li>
        </ul>
    </nav>   
    )
}


export default Sidenavbar;
