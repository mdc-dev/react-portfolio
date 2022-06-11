import React from 'react';
import './fourth-page.scss'
import ProjectCard from '../project-card/project-card';
import ReverseProjectCard from '../reverse-project-card/reverse-card.js';

const PageFour = () => {
    const projectData = [
        {
          name: 'Wordle',
          description: 'If you are like me you hate waiting for the next days wordle. So I decided to create my own that does not require you to wait. It utilizes state as well as local storage. I wrote this using my own logic and understanding of the game. No tutorials or templates just good old fashioned logic and JavaScript.',
          languages: ['React', 'HTML', "Sass", "JavaScript"],
          github: 'https://github.com/mdc-dev/mdc-wordle',
          deployed: 'https://mdc-wordle.herokuapp.com/',
        },
        {
            name: 'Quiz Central',
            description: 'I decided to make a simple quiz app. During my bootcamp, the quiz project was for some reason the hardest one. I was able to not only build a nice quiz, but you can actually pick the quiz you would like to take. Have a look at the github or deployed site.',
            languages: ['HTML', "Sass", "JavaScript", "JSON"],
            github: 'https://github.com/mdc-dev/timed-quiz',
            deployed: 'https://mdc-trivia-app.herokuapp.com/',
          },
          {
            name: 'Wordle',
            description: 'If you are like me you hate waiting for the next days wordle. I was able to recreate the popular NYT game using React. I wrote this using my own logic and understanding of the game. No tutorials or templates just good old fashioned logic and JavaScript.',
            languages: ['React', 'HTML', "Sass", "JavaScript"],
            github: 'https://github.com/mdc-dev/mdc-wordle',
            deployed: 'https://mdc-wordle.herokuapp.com/',
          }
      ]
    return (
        <section className="fourth-page" id="portfolio">
            <div className="work-container">
                <h3 className="my-work">My Work</h3>
                <div className="work-cont">
                <ProjectCard cardData={projectData[0]}/>
                <ReverseProjectCard cardData={projectData[1]}/>
                <ProjectCard cardData={projectData[2]}/>
                </div>
                
            </div>
        </section>
    );
}

export default PageFour;

