import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import freshair from "../laundrassets/mockups/freshair_asset.png";
import "../css/productpage.css"

const FreshAir = () =>{
    return(
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
            <img src={freshair} className="bag1"></img>
            <div className="description">
                <div className="textBlock prod-des">
                    <h2>Product Description</h2>
                    <p>21 count bag of “Fresh Air” scented Laundr Bombs<br/>
                    A soft, cottony fragrance that smells even cleaner than clean. <br/>
                    Great for leaping face-first into a gigantic, fluffy comforter.
                    </p>
                </div>
                <div className="textBlock">
                    <h2>Scent</h2>
                    <p>This fragrance has hints of: </p>
                    <li>Cotton</li>
                    <li>Ozone</li>
                    <li>Tropical Fruit</li>
                </div> 
            </div>
        </div>
    )
}

export default FreshAir;