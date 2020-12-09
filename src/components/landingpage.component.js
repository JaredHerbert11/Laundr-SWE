import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useStatelocal} from '../controllers/cartFunctions';
import {clearCart} from '../controllers/cartFunctions';
import axios from 'axios'
import '../css/landingpage.css'
const LandingPage = (props) => {
    let [cart, setCart] = useStatelocal();
    const colorArray = ["#ff5656", "#f4ea9c", "#5b5b5b", "#8dcfdd",  "#e2cea3", "#48c47e"]

    window.addEventListener('scroll', () => {
        if (window.location.href == 'http://localhost:3000/') {
            const colorbar = document.querySelector('.color-bar');
            let secNumber = Math.floor(window.pageYOffset/window.innerHeight);
            console.log(secNumber);
            colorbar.style.backgroundColor = colorArray[secNumber];
        }
    })

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
          console.log("Order was a success!")
          clearCart(setCart);
        }
    
        if (query.get("canceled")) {
            console.log("Order was cancelled, when did god forsaken us?");
        }
      }, []);

    return (
        <body>
            <div class="color-bar">
            </div>
            <div className='scroll-snapping-div'>
            <section class="bg-image img1 scroll-snap-section">
                <h1 className="bombName1">Watermelon Cucumber</h1>
                <p className="bombDesc1"> 21 count bag of “Watermelon Cucumber” scented Laundr Bombs<br/>
                    A sweet, cool and refreshing smell for brightening up your day. <br/>
                    Great for picnic blankets, overalls, and being in a generally good mood. <br/>
                    <br/>
                    This fragrence has hints of: <br/>
                    <li className="li-landing-page">Crisp Cucumber </li>
                    <li className="li-landing-page">Sweet Melon</li>
                    <li className="li-landing-page">Cool Grapefruit</li>
                    <br/>
                    Price: $18.99
                </p>
                <Link to="/product/watermelon-cucumber"><div class="mockup-image mimg1"></div></Link>
            </section>
            <section class="bg-image img2 scroll-snap-section">
                <h1 className="bombName2">White Gardenia</h1>
                <p className="bombDesc2"> 21 count bag of “White Gardenia” scented Laundr Bombs<br/>
                    A sweet and floral perfume with relaxing notes, best used after a <br/>
                    carefree frolic through a field of wildflowers. <br/>
                    <br/>
                    This fragrence has hints of: <br/>
                    <li className="li-landing-page">Gardenia Shrub</li>
                    <li className="li-landing-page">Floral Essence</li>
                    <li className="li-landing-page">Apple Water</li>
                    <br/>
                    Price: $18.99
                </p>
                <Link to="/product/white-gardenia"><div class="mockup-image mimg2"></div></Link>
            </section>
            <section class="bg-image img3 scroll-snap-section">
                <h1 className="bombName3">Mahogany Teakwood</h1>
                <p className="bombDesc3"> 21 count bag of “Mahogany Teakwood” scented Laundr Bombs<br/>
                    A great everyday alternative to cologne, or for a getaway to a <br/>
                    log cabin hidden deep in a snowy forest.  <br/>
                    <br/>
                    This fragrence has hints of: <br/>
                    <li className="li-landing-page">Oak and Mahogany Wood</li>
                    <li className="li-landing-page">Boreal Forestry</li>
                    <li className="li-landing-page">Light Musk</li>
                    <br/>
                    Price: $18.99
                </p>
                <Link to="/product/mahogany-teakwood"><div class="mockup-image mimg3"></div></Link>
            </section>
            <section class="bg-image img4 scroll-snap-section">
                <h1 className="bombName4">Fresh Air</h1>
                <p className="bombDesc4"> 21 count bag of “Fresh Air” scented Laundr Bombs<br/>
                    A soft, cottony fragrance that smells even cleaner than clean. <br/>
                    Great for leaping face-first into a gigantic, fluffy comforter.  <br/>
                    <br/>
                    This fragrence has hints of: <br/>
                    <li className="li-landing-page">Cotton</li>
                    <li className="li-landing-page">Ozone</li>
                    <li className="li-landing-page">Tropical Fruit</li>
                    <br/>
                    Price: $18.99
                </p>
                <Link to="/product/fresh-air"><div class="mockup-image mimg4"></div></Link>
            </section>
            <section class="bg-image img5 scroll-snap-section">
                <h1 className="bombName5">Coffee Vanilla</h1>
                <p className="bombDesc5"> 21 count bag of “Coffee Vanilla” scented Laundr Bombs<br/>
                    Smells like the steam rising off of a hot vanilla latte. <br/>
                    Great for sitting in an armchair in a quaint neighborhood cafe.  <br/>
                    <br/>
                    This fragrence has hints of: <br/>
                    <li className="li-landing-page">Dark Coffee Beans</li>
                    <li className="li-landing-page">Vanilla Extract</li>
                    <li className="li-landing-page">Hazelnut Cream</li>
                    <br/>
                    Price: $18.99
                </p>
                <Link to="/product/coffee-vanilla"><div class="mockup-image mimg5"></div></Link>
            </section>
            <section class="bg-image img6 scroll-snap-section">
                <h1 className="bombName6">Eucalyptus Tea Tree </h1>
                <p className="bombDesc6">21 count bag of “Eucalyptus Tea Tree” scented Laundr Bombs<br/>
                    A natural scent inspired by popular aromatherapy oil mixtures. <br/>
                    Great for towels, bath robes, and having a “me day.”  <br/>
                    <br/>
                    This fragrence has hints of: <br/>
                    <li className="li-landing-page">Tea Tree and Eucalyptus</li>
                    <li className="li-landing-page">Natural Herbs</li>
                    <li className="li-landing-page">Bergamot Orange</li>
                    <br/>
                    Price: $18.99
                </p>
                <Link to="/product/eucalyptus-tea-tree"><div class="mockup-image mimg6"></div></Link>
            </section>
            </div>
        </body>
    )
}

export default LandingPage;