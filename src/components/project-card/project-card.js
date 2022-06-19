import React from 'react';
import './project-card.scss';

const ProjectCard = (props) => {
    console.log(props)
    return (
        <div className="card-cont">
            <div className="title-cont">
                <h4>Featured Project</h4>
                <h5>{props.cardData.name}</h5>
            </div>
            <div className={`project-image project-${props.cardData.id}`}>
                <div className="filter"></div>
            </div>
            <div className="project-desc">{props.cardData.description}</div>
            <div className="technologies">
                <ul className="tech-list">
                    {props.cardData.languages.map(tech => {
                        return <li className="lang">{tech}</li>
                    })}
                </ul>
            </div>
            <div className="project-links">
                <ul>
                    <li><a target="_blank" rel="noopener noreferrer" href={props.cardData.github}><i className="fa-brands fa-github"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={props.cardData.deployed}><i className="fa-solid fa-up-right-from-square size-down"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default ProjectCard;