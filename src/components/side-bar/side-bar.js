import React from 'react';
import './side-bar.scss';

function Sidebar() {
    return (
        <div className="container">
            <div className="sm-container">
               <ul className="social-icons">
                    <li><a href='https://github.com/mdc-dev' target='_blank' rel='noreferrer'><i class="fa-brands fa-github"></i></a></li>
                    <li><a href='https://www.linkedin.com/in/matthew-courtney-2854811b5/' target='_blank' rel='noreferrer'><i class="fa-brands fa-linkedin"></i></a></li>
                    <li><a href='#contact'><i class="fa-solid fa-envelope"></i></a></li>
                </ul> 
            </div>
            
        </div>
    )
}


export default Sidebar;
