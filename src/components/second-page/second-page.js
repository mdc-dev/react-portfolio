import React from 'react';
import './second-page.scss';

function PageTwo() {
    return (
        <section className="second-page">
            <div className="about-me-container">
                <h3 className="about-me">About Me</h3>
                <p className="about-para">Hello, my name is Matthew Courtney and I write code. When the pandemic struck in 2020 I, like most people found myself with an opportunity to learn a new skill. I enrolled almost immedialty in a bootcamp through UNCC and never looked back.<br></br> </p>
                <p className="about-para">Fast forward to today, I have been working with <span className='boa'>Bank of America</span>  for the past year. I have had an opportunity to learn and grow in one of the largest companies in America. My main focus at the bank has been with the Merchant Services division, building an maintaining the banks application. <br></br></p>
                <p className="about-para">My passion for coding goes beyond my work for the bank. I find myself continuously coding and learning from any source I can find. Beyond development I have also taken an interest in design. </p>
                <div className="photo-place-holder">Picture here</div>
            </div>
        </section>
    )
}


export default PageTwo;