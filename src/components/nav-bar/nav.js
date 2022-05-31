import React from 'react';
import './nav.scss';
import './nav.css';

function Navbar() {

    const toggleSideNav = () => {
        console.log('Hamburger Clicked');
        document.querySelector('.nav-side-bar').classList.remove('hide');
    }

    return (
    <nav className='nav-bar'>
        <div className='logo'>Logo</div>
        <div className='hamburger'><i className="fa-solid fa-bars" onClick={() => toggleSideNav()}></i></div>
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
