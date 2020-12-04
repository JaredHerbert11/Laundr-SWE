import React, { useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import {updateItem} from '../controllers/cartFunctions';
import {useStatelocal} from '../controllers/cartFunctions';
import coffeeImg from "../laundrassets/mockups/coffeeMockup.png";
import teaTreeImg from "../laundrassets/mockups/eucalyptusMockup.png";
import freshAirImg from "../laundrassets/mockups/freshair_asset.png";
import watermelonImg from "../laundrassets/mockups/watermelonMockup.png";
import gardeniaImg from "../laundrassets/mockups/gardeniaMockup.png";
import teakwoodImg from "../laundrassets/mockups/mahoganymockup.png";
import CartItem from "./cartItem.component";
import '../css/cartpage.css';
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");


//replace hard coded entries with CRUD calls
let Coffee = {
    id : "Coffee Vanilla",
    quantity : 0,
    picture:coffeeImg,
    price:1899
}
let TeaTree = {
    id : "Eucalyptus Tea Tree",
    quantity : 0,
    picture:teaTreeImg,
    price:1899
}
let Air = {
    id : "Fresh Air",
    quantity : 0,
    picture:freshAirImg,
    price:1899
}
let Watermelon = {
    id : "Watermelon Cucumber",
    quantity : 0,
    picture:watermelonImg,
    price:1899
}
let Gardenia = {
    id : "White Gardenia",
    quantity : 0,
    picture:gardeniaImg,
    price:1899
}
let Teakwood = {
    id : "Mahogany Teakwood",
    quantity : 0,
    picture:teakwoodImg,
    price:1899
}


const CartPage = (props) => {  
    let [cart, setCart] = useStatelocal();
    let cartItems = [];
    let totalPrice = 0;

    //iterate over each item in the cart to calculate price and add CartItem component to array in order to be returned w the page
    for(let i = 0; i < cart.length;i++){
        let item = {
            id:"",
            quantity:0,
            picture:"https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=6&m=846183008&s=170667a&w=0&h=bCKJRIR5IBFOv80Rd8HfBVj_VirFxgWuZIDJcg9OK9M=",
            price:0
        }
        if (typeof cart[i] != 'undefined'){
            item.id=cart[i].id;
            item.quantity=cart[i].quantity;
            //replace object population w crud calls
            item.picture = cart[i].picture;
            item.price = cart[i].price / 100;
            totalPrice += item.price*item.quantity;
        }

        cartItems.push(
            <CartItem item={item} cart={cart} setCart={setCart}></CartItem>
        );
    }

    const handleClick = async (event) => {
        const stripe = await stripePromise;
        let cartString = JSON.stringify(cart);
        const response = await fetch("/create-session", {
          method: "POST",
          body: cartString,
          headers: {
            "Content-Type": "application/json",
          }
        });

        const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`.
        }
    };

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
        if (query.get("success")) {
          console.log("Order was a success!")
        }
    
        if (query.get("canceled")) {
            console.log("Order was cancelled, when did god forsaken us?");
        }
      }, []);

    return (
        <div className="bg">
            <div className="cartBox">
                <div class="header">
                    <div className="top">
                        <span> Your Cart </span>
                        <p className="checkout" onClick={handleClick}> Proceed to Checkout </p>
                    </div>
                </div>
                    <table class="ui celled collapsing very basic table" style={{minWidth : "700px"}}>
                        <tbody>
                            {cartItems}
                            <tr class="">
                            <td class="">
                                <p style={{textAlign:"right"}}><b>Subtotal:</b></p>
                                <p style={{textAlign:"right"}}>${totalPrice.toFixed(2)}</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
            <div className="row">
                <button className="devButton" onClick={() => updateItem(cart, setCart, Coffee, 1)}>Coffee</button>
                <button className="devButton" onClick={() => updateItem(cart, setCart, TeaTree, 1)}>TeaTree</button>
                <button className="devButton" onClick={() => updateItem(cart, setCart, Air, 1)}>Air</button>
                <button className="devButton" onClick={() => updateItem(cart, setCart, Watermelon, 1)}>Watermelon</button>
                <button className="devButton" onClick={() => updateItem(cart, setCart, Gardenia, 1)}>Gardenia</button>
                <button className="devButton" onClick={() => updateItem(cart, setCart, Teakwood, 1)}>Teakwood</button>

            </div>
        </div>
    )
}
export default CartPage;