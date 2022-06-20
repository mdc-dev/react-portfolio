import React from 'react';
import './fourth-page.scss'
import ProjectCard from '../project-card/project-card';
import ReverseProjectCard from '../reverse-project-card/reverse-card.js';

const PageFour = () => {
    const projectData = [
        {
          name: 'Wordle',
          id: 1,
          img: '../../assets/quiz.JPG',
          description: 'If you are like me you hate waiting for the next days wordle. So I decided to create my own that does not require you to wait. It utilizes state as well as local storage. I wrote this using my own logic and understanding of the game. No tutorials or templates were used.',
          languages: ['React', 'HTML', "Sass", "JavaScript"],
          github: 'https://github.com/mdc-dev/mdc-wordle',
          deployed: 'https://mdc-wordle.herokuapp.com/',
        },
        {
            name: 'Quiz Central',
            id: 2,
            img: '../../assets/quiz.JPG',
            description: 'I decided to make a simple quiz app. During my bootcamp, the quiz project seemed to give everyone the hardest time so I decided to build another one to see how fast I could do it. I was able to not only build a nice quiz, but you can actually pick the quiz you would like to take. Have a look at the github or deployed site.',
            languages: ['HTML', "Sass", "JavaScript", "JSON"],
            github: 'https://github.com/mdc-dev/timed-quiz',
            deployed: 'https://mdc-dev.github.io/timed-quiz/',
          },
          {
            name: 'Pokedex 2.0',
            id: 3,
            img: '../../assets/pokedex.JPG',
            description: 'In my efforts to refine my skills post bootcamp, I decided to rebuild this group project by myself. Instead of just having a simple Pokedex I decided to create a kind of game where users could earn xP and badges by completing quizzes which allow the user to get better pokemon.',
            languages: ['Javascript', 'HTML', "CSS", "mySql"],
            github: 'https://github.com/sharkattack182/pokedex2.0',
            deployed: 'https://pokedex-part-deux.herokuapp.com/',
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

