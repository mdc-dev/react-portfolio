import React from 'react';
import './fourth-page.scss'
import ProjectCard from '../project-card/project-card';
import ReverseProjectCard from '../reverse-project-card/reverse-card.js';

const PageFour = () => {
    return (
        <section className="fourth-page" id="portfolio">
            <div className="work-container">
                <h3 className="my-work">My Work</h3>
                <div className="work-cont">
                <ProjectCard />
                <ReverseProjectCard />
                <ProjectCard />
                </div>
                
            </div>
        </section>
    );
}

export default PageFour;

