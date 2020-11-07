import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import vanilla from "../laundrassets/mockups/coffeeMockup.png";
import "../css/productpage.css"

const Vanilla = ()=>{
    return (
        <div className="vanilla">
                        
            <Grid container spacing={2}>
                <Grid item xs sm={6}>
                    <h1 className="prodName">COFFEE</h1>
                    <h1 className="prodName">VANILLA</h1>
                </Grid>
                <Grid item xs sm={6} className="cart">
                <div className="cart-price">
                <div className="cart-price">Price: $18.99</div>
                <Button variant="contained" color="secondary">Add to Cart</Button>
                                    </div>
                </Grid> 
            </Grid>
            <img src={vanilla} className="bag1"></img>
                <div className="description">
                    <div className="textBlock prod-des">
                        <h2>Product Description</h2>
                            <p>21 count bag of “Coffee Vanilla” scented Laundr Bombs<br/>
                                Smells like the steam rising off of a hot vanilla latte. <br/>
                                Great for sitting in an armchair in a quaint neighborhood cafe
                            </p>
                    </div>
                    <div className="textBlock">
                        <h2>Scent</h2>
                            <p>This fragrance has hints of: </p>
                            <li>Dark Coffee Beans</li>
                            <li>Vanilla Extract</li>
                            <li>Hazelnut Cream</li>
                    </div> 
                </div>
        </div>
    )
}

export default Vanilla;