import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import freshair from "../laundrassets/mockups/freshair_asset.png";
import "../css/productpage.css"
import React, { useEffect } from 'react'
import bomb from "../laundrassets/bombs/Laundr\ Bomb\ Angle1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const FreshAir = () =>{
    useEffect(() => {
 
        gsap.to(".bomb", {
            scrollTrigger: {
                trigger:".freshair",
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
        <div className="freshair">
                        
            <Grid container spacing={2}>
                <Grid item xs sm={6}>
                    <h1 className="prodName">FRESH</h1>
                    <h1 className="prodName">AIR</h1>
                </Grid>
                <Grid item xs sm={6} className="cart">
                    <div className="cart-price">
                        <div className="cart-price">Price: $18.99</div>
                        <Button variant="contained" color="secondary">Add to Cart</Button>
                    </div>
                </Grid> 
            </Grid>
            </div>
            <img src={bomb} className="bomb"></img>
            <img src={freshair} className="bag1"></img>
            <div >
                <Grid container spacing={2} className="description">
                        <Grid item xs sm={6} className="textBlock prod-des">
                            <h2>Product Description</h2>
                            <p>21 count bag of “Fresh Air” scented Laundr Bombs<br/>
                            A soft, cottony fragrance that smells even cleaner than clean. <br/>
                            Great for leaping face-first into a gigantic, fluffy comforter.
                            </p>
                        </Grid>
                        <Grid item xs sm={6} className="textBlock">
                            <h2>Scent</h2>
                            <p>This fragrance has hints of: </p>
                            <li>Cotton</li>
                            <li>Ozone</li>
                            <li>Tropical Fruit</li>
                        </Grid> 
                </Grid>
            </div>
        </div>
        
    )
}

export default FreshAir;