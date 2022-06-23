import React from 'react';
import './third-page.scss';

function PageThree() {

    const openContent = (e, job) => {
        console.log('Clicked')
        let tabcontent = document.getElementsByClassName('tab-content');
        for (let i = 0; i < tabcontent.length; i++) {
            const el = tabcontent[i];
            el.style.display = 'none';
        }

        let tablinks = document.getElementsByClassName('tablinks');
        for (let i = 0; i < tablinks.length; i++) {
            const el = tablinks[i];
            el.className = el.className.replace(' active', '');
            
        }

        document.getElementById(job).style.display = 'block';
        e.currentTarget.className += ' active'
    }

    return (
        <section className="third-page" id="experience">
           <div className="tab-cont"                 data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out">
               <h3 className="experience">Experience</h3>
               <div className="tab">
                   <button className="tablinks active" onClick={(e) => openContent(e, 'bank')}>Bank of America</button>
                   <button className="tablinks" onClick={(e) => openContent(e, 'boot')}>Boot Camp</button>
               </div>
               <div className="tab-content" id="bank">
                   <h4 className='job-title'>UI Developer <span className='hilight'>Bank of America</span></h4>
                   <p className="dates">April 2021 - Current</p>
                   <ul className="bullets">
                       <li>Communicate with product managers and UX designers to translate project requirements and business objectives into polished user interfaces.</li>
                       <li>Improved and expanded project platforms using JavaScript to develop rich User Interfaces.</li>
                       <li>Collaborated with teammates to deliver valuable features meeting business and customer needs.</li>
                       <li>Evaluated user research to convert abstract ideas and requirements into planning tools such as journey maps, user personas and storyboards.</li>
                   </ul>
               </div>
               <div className="tab-content" id="boot">
               <h4 className='job-title'>Student <span className='hilight'>UNCC Bootcamp</span></h4>
                   <p className="dates">June 2020 - October 2020</p>
                   <ul className="bullets">
                       <li>Followed bootcamp policies, regulations and schedules.</li>
                       <li>Developed basic skills in multiple front end and back end based technologies.</li>
                       <li>Led multiple group based projects throughout the bootcamp.</li>
                       <li>Worked in team environment to maintain high levels of productivity.</li>
                       <li>Maintained an A average and continued to code every day after the camp.</li>
                   </ul>
               </div>
           </div>
        </section>
    )
}


export default PageThree;