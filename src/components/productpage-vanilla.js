import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import vanilla from "../laundrassets/mockups/coffeeMockup.png";
import "../css/productpage.css"
import React, { useEffect } from 'react'
import bomb from "../laundrassets/bombs/Laundr Bomb Angle1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const Vanilla = ()=>{
    useEffect(() => {
 
        gsap.to(".bomb-p", {
            scrollTrigger: {
                trigger:".vanilla-p",
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
        gsap.to(".bag1-p", {
            scrollTrigger: {
                trigger:".product-p",
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
        <div className="product-p">
            <div className="vanilla-p">
                            
                <Grid container spacing={2}>
                    <Grid item xs sm={6}>
                        <h1 className="prodName-p">COFFEE</h1>
                        <h1 className="prodName-p">VANILLA</h1>
                    </Grid>
                    <Grid item xs sm={6} className="cart-p">
                    <div className="cart-price-p">
                    <div className="cart-price-p">Price: $18.99</div>
                    <Button variant="contained" color="secondary">Add to Cart</Button>
                                        </div>
                    </Grid> 
                </Grid>
            </div>
            <div className="bomb-p"><img src={bomb}></img></div>
            <img src={vanilla} className="bag1-p"></img>
            <div>
                <Grid container spacing={2} className="description-p">
                        <Grid item xs sm={6} className="textBlock-p prod-des-p">
                            <h2>Product Description</h2>
                            <p>21 count bag of “Coffee Vanilla” scented Laundr Bombs<br/>
                                    Smells like the steam rising off of a hot vanilla latte. <br/>
                                    Great for sitting in an armchair in a quaint neighborhood cafe
                            </p>
                        </Grid>
                        <Grid item xs sm={6} className="textBlock-p">
                            <h2>Scent</h2>
                            <p>This fragrance has hints of: </p>
                            <li>Dark Coffee Beans</li>
                            <li>Vanilla Extract</li>
                            <li>Hazelnut Cream</li>
                        </Grid> 
                </Grid>
            </div>
        </div>
        
    )
}

export default Vanilla;