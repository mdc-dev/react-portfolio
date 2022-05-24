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
        <section className="third-page">
           <div className="tab-cont">
               <h3 className="experience">Experience</h3>
               <div className="tab">
                   <button className="tablinks active" onClick={(e) => openContent(e, 'bank')}>Bank of America</button>
                   <button className="tablinks" onClick={(e) => openContent(e, 'boot')}>Boot Camp</button>
               </div>
               <div className="tab-content" id="bank">
                   <h4 className='job-title'>UI Developer <span className='hilight'>Bank of America</span></h4>
                   <p className="dates">April 2021 - Current</p>
                   <ul className="bullets">
                       <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nisi reprehenderit dolorem nam doloribus quo?</li>
                       <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste libero odit atque reprehenderit fuga.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, consequuntur. Vitae recusandae enim quisquam blanditiis?</li>
                   </ul>
               </div>
               <div className="tab-content" id="boot">
               <h4 className='job-title'>Student <span className='hilight'>UNCC Bootcamp</span></h4>
                   <p className="dates">June 2020 - October 2020</p>
                   <ul className="bullets">
                       <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nisi reprehenderit dolorem nam doloribus quo?</li>
                       <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex iste libero odit atque reprehenderit fuga.</li>
                       <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, consequuntur. Vitae recusandae enim quisquam blanditiis?</li>
                   </ul>
               </div>
           </div>
        </section>
    )
}


export default PageThree;