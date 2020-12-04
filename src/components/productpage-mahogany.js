import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import mahogany from "../laundrassets/mockups/mahoganymockup.png";
import "../css/productpage.css"

const Mahogany = ()=> {
    return (
        <div className="mahogany">
                        
            <Grid container spacing={2}>
                <Grid item xs sm={6}>
                    <h1 className="prodName">MAHOGANY</h1>
                    <h1 className="prodName">TEAKWOOD</h1>
                </Grid>
                <Grid item xs sm={6} className="cart">
                    <div className="cart-price">
                        <div className="cart-price">Price: $18.99</div>
                        <Button variant="contained" color="secondary">Add to Cart</Button>
                    </div>
                </Grid> 
            </Grid>
            <img src={mahogany} className="bag1"></img>
            <div className="description">
                <div className="textBlock prod-des">
                    <h2>Product Description</h2>
                        <p>21 count bag of “Mahogany Teakwood” scented Laundr Bombs<br/>
                            A great everyday alternative to cologne, or for a getaway to a <br/>
                            log cabin hidden deep in a snowy forest.
                        </p>
                </div>
                <div className="textBlock">
                    <h2>Scent</h2>
                    <p>This fragrance has hints of: </p>
                    <li>Oak and Mahogany Wood</li>
                    <li>Boreal Forestry</li>
                    <li>Light Musk</li>
                </div> 
            </div>
        </div>
    )
}

export default Mahogany;