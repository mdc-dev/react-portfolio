import React from 'react';
import './nav.scss';
import './nav.css';
import DevLogo from '../../assets/mdc-dev.png'

function Navbar() {

    const toggleSideNav = () => {
        console.log('Hamburger Clicked');
        document.querySelector('.nav-content').classList.add('nav-content-slide')
        document.querySelector('.nav-side-bar').classList.remove('hide');
        
    }

    return (
    <nav className='nav-bar'>
        <div className='logo'><img src={DevLogo} alt="logo" /></div>
        <div className='hamburger'><i className="fa-solid fa-bars" onClick={() => toggleSideNav()}></i></div>
        <ul className="nav-items">
            <li><a href="#about-me" alt='about-me'>About Me</a></li>
            <li><a href="#experience" alt="experience">Experience</a></li>
            <li><a href="#portfolio" alt="portfolio">Portfolio</a></li>
            <li><a href="#contact" alt="contact">Contact</a></li>
            <a href="https://docs.google.com/document/d/17opt3I8CcLb9RlvjImX0rZh_OCu8VfmVmiucvmh_AFQ/edit?usp=sharinghttps://docs.google.com/document/d/17opt3I8CcLb9RlvjImX0rZh_OCu8VfmVmiucvmh_AFQ/edit?usp=sharing" target='_blank' rel='noreferrer'><li className='resume-button'>Resume</li></a>
        </ul>
    </nav>   
    )
}


export default Navbar;
