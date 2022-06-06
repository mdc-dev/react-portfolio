import React from 'react';
import './project-card.scss';

const ProjectCard = () => {
    return (
        <div className="card-cont">
            <div className="title-cont">
                <h4>Featured Project</h4>
                <h5>Project Title</h5>
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
                    <li><i className="fa-brands fa-github"></i></li>
                    <li><i className="fa-solid fa-up-right-from-square size-down"></i></li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;