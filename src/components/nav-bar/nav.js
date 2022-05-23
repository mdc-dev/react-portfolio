import React from 'react';
import './nav.scss';
import './nav.css';

function Navbar() {
    return (
    <nav className='nav-bar'>
        <div className='logo'>Logo</div>
        <div className='hamburger'>|||</div>
        <ul className="nav-items">
            <li>About Me</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </nav>   
    )
}


export default Navbar;
