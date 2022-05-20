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
                   <h4>Bank of America</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem illo laboriosam reiciendis ipsum, ratione neque modi eum doloribus soluta voluptates tempore repellendus beatae qui.</p>
               </div>
               <div className="tab-content" id="boot">
                   <h4>Boot Camp</h4>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem illo laboriosam reiciendis ipsum, ratione neque modi eum doloribus soluta voluptates tempore repellendus beatae qui.</p>
               </div>
           </div>
        </section>
    )
}


export default PageThree;