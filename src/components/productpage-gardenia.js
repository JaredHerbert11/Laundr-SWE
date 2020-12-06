import React, { useEffect } from 'react'
//import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import gardenia from "../laundrassets/mockups/gardeniaMockup.png"
import "../css/productpage.css"
import bomb from "../laundrassets/bombs/Laundr\ Bomb\ Angle1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const Gardenia = (props) =>{

    useEffect(() => {
 
        gsap.to(".bomb", {
            scrollTrigger: {
                trigger:".gardenia",
                start: 1,
                end:"100%",
                scrub:true
            },
            x: 400,
            pin:true,
            rotation: 360,
            ease:"none",
            duration:3
            
        });
        gsap.to(".bag1", {
            scrollTrigger: {
                trigger:".product",
                start: 1,
                end:"100%",
                scrub:true
            },
            y: window.innerHeight,
            x:-window.innerWidth,
            
            ease:"none",
            
        });
 
    }, []);
    return (
        <div className="product">
            <div className="gardenia">
                        
            <Grid container spacing={2}>
                <Grid item xs sm={6}>
                    <h1 className="prodName">WHITE</h1>
                    <h1 className="prodName">GARDENIA</h1>
                </Grid>
                <Grid item xs sm={6} className="cart">
                    <div className="cart-price">
                        <div className="cart-price">Price: $18.99</div>
                        <Button variant="contained" color="secondary">Add to Cart</Button>
                    </div>
                </Grid> 
            </Grid>
            <img src={bomb} className="bomb"></img>
            <div className="picture" id="bagId"><img src={gardenia} className="bag1"></img></div>
            
         </div>
         <div >
            <Grid container spacing={2} className="description">
                    <Grid item xs sm={6} className="textBlock prod-des">
                        <h2>Product Description</h2>
                        <p>21 count bag of “White Gardenia” scented Laundr Bombs<br/>
                        A sweet and floral perfume with relaxing notes, best used after a <br/>
                        carefree frolic through a field of wildflowers
                        </p>
                    </Grid>
                    <Grid item xs sm={6} className="textBlock">
                        <h2>Scent</h2>
                        <p>This fragrance has hints of: </p>
                        <li>Gardenia Shrub</li>
                        <li>Floral Essence</li>
                        <li>Apple Water</li>
                    </Grid> 
            </Grid>

         </div>
        </div>
    )
}

export default Gardenia;