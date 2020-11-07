import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import eucalyptus from "../laundrassets/mockups/eucalyptusMockup.png";
import "../css/productpage.css"

const Eucalyptus = () =>{
    return (
        <div className="eucalyptus">
                        
            <Grid container spacing={2}>
                <Grid item xs sm={6}>
                    <h1 className="prodName">EUCALYPTUS</h1>
                    <h1 className="prodName">TEA TREE</h1>
                </Grid>
                <Grid item xs sm={6} className="cart">
                    <div className="cart-price">
                        <div className="cart-price">Price: $18.99</div>
                        <Button variant="contained" color="secondary">Add to Cart</Button>
                    </div>
                </Grid> 
            </Grid>
            <img src={eucalyptus} className="bag1"></img>
            <div className="description">
                <div className="textBlock prod-des">
                    <h2>Product Description</h2>
                        <p>21 count bag of “Eucalyptus Tea Tree” scented Laundr Bombs<br/>
                        A natural scent inspired by popular aromatherapy oil mixtures. <br/>
                        Great for towels, bath robes, and having a “me day.”
                        </p>
                </div>
                <div className="textBlock">
                    <h2>Scent</h2>
                    <p>This fragrance has hints of: </p>
                    <li>Tea Tree and Eucalyptus</li>
                    <li>Natural Herbs</li>
                    <li>Bergamot Orange</li>
                </div> 
            </div>
        </div>
    )
}

export default Eucalyptus;