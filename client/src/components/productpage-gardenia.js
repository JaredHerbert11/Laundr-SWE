import React from 'react'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import gardenia from "../laundrassets/mockups/gardeniaMockup.png"
import "../css/productpage.css"

const Gardenia = (props) =>{
    return (
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
            <img src={gardenia} className="bag1"></img>
                <div className="description">
                    <div className="textBlock prod-des">
                        <h2>Product Description</h2>
                        <p>21 count bag of “White Gardenia” scented Laundr Bombs<br/>
                        A sweet and floral perfume with relaxing notes, best used after a <br/>
                        carefree frolic through a field of wildflowers
                        </p>
                    </div>
                    <div className="textBlock">
                        <h2>Scent</h2>
                        <p>This fragrance has hints of: </p>
                        <li>Gardenia Shrub</li>
                        <li>Floral Essence</li>
                        <li>Apple Water</li>
                    </div> 
                </div>
        </div>
    )
}

export default Gardenia;