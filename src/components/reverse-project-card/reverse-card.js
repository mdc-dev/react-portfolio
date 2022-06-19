import React from 'react';
import './reverse-card.scss';

const ReverseProjectCard = (props) => {
    return (
        <div className="reverse-card-cont">
            <div className="reverse-title-cont">
                <h4>Featured Project</h4>
                <h5>{props.cardData.name}</h5>
            </div>
            <div className="reverse-project-image">
                <div className="filter"></div>
            </div>
            <div className="reverse-project-desc">{props.cardData.description}</div>
            <div className="reverse-technologies">
                <ul className="reverse-tech-list">
                    {props.cardData.languages.map(tech => {
                        return <li className="lang">{tech}</li>
                    })}
                </ul>
            </div>
            <div className="reverse-project-links">
                <ul>
                     <li><a target="_blank" rel="noopener noreferrer" href={props.cardData.github}><i className="fa-brands fa-github"></i></a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href={props.cardData.deployed}><i className="fa-solid fa-up-right-from-square size-down"></i></a></li>
                </ul>
            </div>
        </div>
    );
}

export default ReverseProjectCard;