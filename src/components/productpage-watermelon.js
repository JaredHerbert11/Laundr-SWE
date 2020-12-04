import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import watermelon from "../laundrassets/mockups/watermelonMockup.png";
import "../css/productpage.css"
import React, { useEffect } from 'react'
import bomb from "../laundrassets/bombs/Laundr Bomb Angle1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);
const Watermelon = (props) =>{
    useEffect(() => {
 
        gsap.to(".bomb", {
            scrollTrigger: {
                trigger:".watermelon",
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
    return(
        <div className="product">
        <div className="watermelon">
            <Grid container spacing={0}>
                <Grid item xs sm={6}>
                    <h1 className="prodName">WATERMELON</h1>
                    <h1 className="prodName">CUCUMBER</h1>
                </Grid>
                <Grid item xs sm={6} className="cart">
                    <div className="cart-price">
                        <div className="cart-price">Price: $18.99</div>
                        <Button variant="contained" color="secondary">Add to Cart</Button>
                    </div>
                </Grid> 
            </Grid>
        </div>
            <div className="bomb"><img src={bomb}></img></div>
            <img src={watermelon} className="bag1"></img>
            <div>
                <Grid container spacing={2} className="description">
                        <Grid item xs sm={6} className="textBlock prod-des">
                            <h2>Product Description</h2>
                            <p>21 count bag of “Watermelon Cucumber” scented Laundr Bombs<br/>
                            A sweet, cool and refreshing smell for brightening up your day. <br/>
                            Great for picnic blankets, overalls, and being in a generally good mood. <br/>
                            </p>
                        </Grid>
                        <Grid item xs sm={6} className="textBlock">
                            <h2>Scent</h2>
                            <p>This fragrance has hints of: </p>
                            <li>Crisp Cucumber </li>
                            <li>Sweet Melon</li>
                            <li>Cool Grapefruit</li>
                        </Grid> 
                </Grid>
            </div>
        </div>
    )
}
export default Watermelon;