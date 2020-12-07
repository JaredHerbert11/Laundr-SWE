import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import mahogany from "../laundrassets/mockups/mahoganymockup.png";
import "../css/productpage.css"
import React, { useEffect } from 'react'
import bomb from "../laundrassets/bombs/Laundr Bomb Angle1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useStatelocal} from '../controllers/cartFunctions';
import {updateItem} from '../controllers/cartFunctions';
gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const Mahogany = ()=> {
    let [cart, setCart] = useStatelocal();
    let productObj = {
        id : "Mahogany Teakwood",
        quantity : 0,
    }

    useEffect(() => {
 
        gsap.to(".bomb", {
            scrollTrigger: {
                trigger:".mahogany",
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
            <div className="mahogany">
                            
                <Grid container spacing={2}>
                    <Grid item xs sm={6}>
                        <h1 className="prodName">MAHOGANY</h1>
                        <h1 className="prodName">TEAKWOOD</h1>
                    </Grid>
                    <Grid item xs sm={6} className="cart">
                        <div className="cart-price">
                            <div className="cart-price">Price: $18.99</div>
                            <Button variant="contained" color="secondary" onClick={() => updateItem(cart, setCart, productObj, 1)}>Add to Cart</Button>
                        </div>
                    </Grid> 
                </Grid>
            </div>
            <img src={bomb} className="bomb"></img>
            <img src={mahogany} className="bag1"></img>
            
            <div >
                <Grid container spacing={2} className="description">
                        <Grid item xs sm={6} className="textBlock prod-des">
                            <h2>Product Description</h2>
                            <p>21 count bag of “Mahogany Teakwood” scented Laundr Bombs<br/>
                            A great everyday alternative to cologne, or for a getaway to a <br/>
                            log cabin hidden deep in a snowy forest.
                            </p>
                        </Grid>
                        <Grid item xs sm={6} className="textBlock">
                            <h2>Scent</h2>
                            <p>This fragrance has hints of: </p>
                            <li>Oak and Mahogany Wood</li>
                            <li>Boreal Forestry</li>
                            <li>Light Musk</li>
                        </Grid> 
                </Grid>
            </div>
        </div>
    )
}

export default Mahogany;