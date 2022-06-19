import React from 'react';
import './main.scss';

function MainContent() {
    return (
        <section className="intro-page">
            <div className="parent-container">
                <div className="main-container">
                    <p className="hello">Hi my name is</p>
                    <h1 className="name">Matthew Courtney</h1>
                    <h2 className="job">Im a Front End Developer</h2>
                    <p className="biography">I'm a Charlotte based UI Developer with a strong passion for building clean responsive webpages. I have extensive knowledge of front-end based technologies such as <span className="orange">JavaScript, HTML, CSS, React, and Vue.</span> I am currently working with Bank of America. Ask me how I can help you see your project come to life. </p>
                </div>
            </div>
            
        </section>
        
    )
}


export default MainContent;