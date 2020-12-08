import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../css/landingpage.css'
import gsap from 'gsap';
import Grid from '@material-ui/core/Grid';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const LandingPage = (props) => {
    const colorArray = ["#ff5656", "#f4ea9c", "#5b5b5b", "#8dcfdd",  "#e2cea3", "#48c47e"]

    var listener = function() {
        const colorbar = document.querySelector('.color-bar');
        let secNumber = Math.floor(window.pageYOffset/window.innerHeight);
        console.log(secNumber);
        colorbar.style.backgroundColor = colorArray[secNumber];
    };

    useEffect(() => {        
        window.addEventListener('scroll', listener);
    
        return () => {
          window.removeEventListener('scroll', listener);
        };
      }, []);
    
    return (
        <body>
           <div class="color-bar">
            </div>
            <div className='scroll-snapping-div'>
            <section class="bg-image img1 scroll-snap-section">
                    <div className="info">
                        <h1 className="bombName1">Watermelon Cucumber</h1>
                        <p className="bombDesc1">Price: $18.99</p>
                    </div>
                    <p className="bombDesc1 description-l">A sweet, cool and refreshing smell <br/>for brightening up your day. <br/>
                    Great for picnic blankets, overalls, <br/>and being in a generally good mood.</p>
                
                <Link to="/product/watermelon-cucumber"><div class="mockup-image mimg1"></div></Link>
            </section>
            <section class="bg-image img2 scroll-snap-section">
                <div className="info">
                    <h1 className="bombName2">White Gardenia</h1>
                    <p className="bombDesc2">Price: $18.99</p>
                </div>
                <p className="bombDesc2 description-l">
                    A sweet and floral perfume <br/>with relaxing notes, best used <br/>after a
                    carefree frolic through <br/>a field of wildflowers. 
                    <br/>
                </p>
                <Link to="/product/white-gardenia"><div class="mockup-image mimg2"></div></Link>
            </section>
            <section class="bg-image img3 scroll-snap-section">
                <div>
                    <h1 className="bombName3">Mahogany Teakwood</h1>
                    <p className="bombDesc3"> Price: $18.99</p>
                </div>
                
                   <p className="bombDesc3 description-l">A great everyday alternative to cologne,<br/> or for a getaway to a
                    log cabin<br/> hidden deep in a snowy forest.  <br/></p> 
        
                <Link to="/product/mahogany-teakwood"><div class="mockup-image mimg3"></div></Link>
            </section>
            <section class="bg-image img4 scroll-snap-section">
                <div>
                <h1 className="bombName4">Fresh Air</h1>
                <p className="bombDesc4">Price: $18.99</p>
                </div>
                <p className="bombDesc4 description-l"> A soft, cottony fragrance that smells <br/>even cleaner than clean.
                    Great for<br/> leaping face-first into a gigantic, fluffy comforter.  <br/>
                <br/></p>
                <Link to="/product/fresh-air"><div class="mockup-image mimg4"></div></Link>
            </section>
            <section class="bg-image img5 scroll-snap-section">
                <div>
                    <h1 className="bombName5">Coffee Vanilla</h1>
                    <p className="bombDesc5"> Price: $18.99</p>
                </div>
                    <p className="bombDesc5 description-l">Smells like the steam rising off of a hot vanilla latte.
                    Great for sitting in an armchair in a <br/>quaint neighborhood cafe.  <br/></p>
                <Link to="/product/coffee-vanilla"><div class="mockup-image mimg5"></div></Link>
            </section>
            <section class="bg-image img6 scroll-snap-section">
                <div>
                    <h1 className="bombName6">Eucalyptus Tea Tree </h1>
                    <p className="bombDesc6">Price: $18.99</p>
                </div>
                
                <p className="bombDesc6 description-l">A natural scent inspired by popular<br/> aromatherapy oil mixtures. 
                Great for<br/> towels, bath robes, and having a “me day.”  <br/>
                <br/></p>
                
                <Link to="/product/eucalyptus-tea-tree"><div class="mockup-image mimg6"></div></Link>
            </section>
            </div>
        </body>
    )
}

export default LandingPage;