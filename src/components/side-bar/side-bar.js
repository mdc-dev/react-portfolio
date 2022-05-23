import React from 'react';
import './side-bar.scss';

function Sidebar() {
    return (
        <div className="container">
            <div className="sm-container">
               <ul className="social-icons">
                    <li><i class="fa-brands fa-github"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                    <li><i class="fa-solid fa-envelope"></i></li>
                </ul> 
            </div>
            
        </div>
    )
}


export default Sidebar;
