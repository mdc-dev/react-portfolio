import React from 'react';
import './project-card.scss';

const ProjectCard = () => {
    return (
        <div className="card-cont">
            <div className="title-cont">
                <h3>Featured Project</h3>
                <h4>Project Title</h4>
            </div>
            <div className="project-image">IMAGE</div>
            <div className="project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi sed dolore ullam perspiciatis optio earum vero non aspernatur alias consequatur, nam accusamus consectetur doloribus culpa, vitae pariatur odit maxime!</div>
            <div className="technologies">
                <ul className="tech-list">
                    <li className="lang">JavaScript</li>
                    <li className="lang">CSS</li>
                    <li className="lang">HTML</li>
                    <li className="lang">React</li>
                </ul>
            </div>
            <div className="project-links">
                <ul>
                    <li><i class="fa-brands fa-github"></i></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;