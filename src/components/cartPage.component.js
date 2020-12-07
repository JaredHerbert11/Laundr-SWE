import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {updateItem} from '../controllers/cartFunctions';
import {useStatelocal} from '../controllers/cartFunctions';
import CartItem from "./cartItem.component";
import '../css/cartpage.css';
import { getData } from "../data/data.js";

const stripePromise = loadStripe(process.env.STRIPE_KEY);

const CartPage = (props) => {  
    let [cart, setCart] = useStatelocal();
    let cartItems = [];
    let totalPrice = 0;

    const [data] = useState(getData());

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
            let itemInfo = data.filter(function(itm){
                return itm.name===item.id;
            })[0];
            item.quantity=cart[i].quantity;
            item.picture = itemInfo.imagepath;
            item.price = itemInfo.price;
            totalPrice += item.price*item.quantity;
        }

        cartItems.push(
            <CartItem item={item} cart={cart} setCart={setCart}></CartItem>
        );
    }

    const handleClick = async (event) => {
        console.log('entered handleClick');
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
            console.log("Order was cancelled.");
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
        </div>
    )
}
export default CartPage;