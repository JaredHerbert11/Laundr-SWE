import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import eucalyptus from "../laundrassets/mockups/eucalyptusMockup.png";
import "../css/productpage.css"
import React, { useEffect } from 'react'
import bomb from "../laundrassets/bombs/Laundr\ Bomb\ Angle1.png"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useStatelocal} from '../controllers/cartFunctions';
import {updateItem} from '../controllers/cartFunctions';
import {NavbarState} from '../controllers/navbarCartCounter';

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

const Eucalyptus = () =>{
    let [cart, setCart] = useStatelocal();
    let productObj = {
        id : "Eucalyptus Tea Tree",
        quantity : 0,
    }

    useEffect(() => {
 
        gsap.to(".bomb", {
            scrollTrigger: {
                trigger:".eucalyptus",
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
    let [cartQuantity, setCartQuantity] = NavbarState(cart);
    return (
        <div className="product">
            <div className="eucalyptus">
                            
                <Grid container spacing={2}>
                    <Grid item xs sm={6}>
                        <h1 className="prodName">EUCALYPTUS</h1>
                        <h1 className="prodName">TEA TREE</h1>
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
            <img src={eucalyptus} className="bag1"></img>
            <div >
                <Grid container spacing={2} className="description">
                        <Grid item xs sm={6} className="textBlock prod-des">
                            <h2>Product Description</h2>
                            <p>21 count bag of “Eucalyptus Tea Tree” scented Laundr Bombs<br/>
                            A natural scent inspired by popular aromatherapy oil mixtures. <br/>
                            Great for towels, bath robes, and having a “me day.”
                            </p>
                        </Grid>
                        <Grid item xs sm={6} className="textBlock">
                            <h2>Scent</h2>
                            <p>This fragrance has hints of: </p>
                            <li>Tea Tree and Eucalyptus</li>
                            <li>Natural Herbs</li>
                            <li>Bergamot Orange</li>
                        </Grid> 
                </Grid>
            </div>
        </div>
        
    )
}

export default Eucalyptus;