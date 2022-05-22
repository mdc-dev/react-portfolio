import React from 'react';
import './reverse-card.scss';

const ReverseProjectCard = () => {
    return (
        <div className="reverse-card-cont">
            <div className="reverse-title-cont">
                <h3>Featured Project</h3>
                <h4>Project Title</h4>
            </div>
            <div className="reverse-project-image">IMAGE</div>
            <div className="reverse-project-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nisi sed dolore ullam perspiciatis optio earum vero non aspernatur alias consequatur, nam accusamus consectetur doloribus culpa, vitae pariatur odit maxime!</div>
            <div className="reverse-technologies">
                <ul className="reverse-tech-list">
                    <li className="reverse-lang">JavaScript</li>
                    <li className="reverse-lang">CSS</li>
                    <li className="reverse-lang">HTML</li>
                    <li className="reverse-lang">React</li>
                </ul>
            </div>
        </div>
    );
}

export default ReverseProjectCard;