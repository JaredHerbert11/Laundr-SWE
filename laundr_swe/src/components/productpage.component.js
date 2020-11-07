import "../css/productpage.css"
import watermelon from "../laundrassets/mockups/watermelonMockup.png";
import gardenia from "../laundrassets/mockups/gardeniaMockup.png";
import mahogany from "../laundrassets/mockups/mahoganymockup.png";
import freshair from "../laundrassets/mockups/freshair_asset.png";
import vanilla from "../laundrassets/mockups/coffeeMockup.png";
import eucalyptus from "../laundrassets/mockups/eucalyptusMockup.png";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
const ProductPage = (props) =>{
   
        return(
            <article>
                <div>
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
                </div>
                <div>
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
                        <img src={gardenia} className="bag2"></img>
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
                </div>
                <div>
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
                        <img src={mahogany} className="bag3"></img>
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
                </div>
                <div>
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
                        <img src={freshair} className="bag4"></img>
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
                </div>
                <div>
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
                        <img src={vanilla} className="bag5"></img>
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
                </div>
                <div>
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
                        <img src={eucalyptus} className="bag6"></img>
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
                </div>
            </article>
           
        )
}
export default ProductPage;