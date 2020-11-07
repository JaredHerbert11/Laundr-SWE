import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import watermelon from "../laundrassets/mockups/watermelonMockup.png";
import "../css/productpage.css"

const Watermelon = (props) =>{
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
        <img src={watermelon} className="bag1"></img>
        <div className="description">
            <div className="textBlock prod-des">
                <h2>Product Description</h2>
                <p>21 count bag of “Watermelon Cucumber” scented Laundr Bombs<br/>
                    A sweet, cool and refreshing smell for brightening up your day. <br/>
                    Great for picnic blankets, overalls, and being in a generally good mood. <br/>
                </p>
            </div>
            <div className="textBlock">
            <h2>Scent</h2>
                <p>This fragrance has hints of: </p>
                <li>Crisp Cucumber </li>
                <li>Sweet Melon</li>
                <li>Cool Grapefruit</li>
            </div> 
        </div>
    </div>
}