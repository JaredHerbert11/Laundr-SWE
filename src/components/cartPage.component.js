import React, { useState } from "react";
import {useStatelocal} from '../controllers/cartFunctions';
import CartItem from "./cartItem.component";
import '../css/cartpage.css';
import { getData } from "../data/data.js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51Hq70OKgZ2mb9PjFiC3Lu08QdFO7jdKeXBgygGJtX430cjHCGfAStXav5DNOi657F54PXDTxEKGhJNtIZ3sj4wnm00amvC8n8T");

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
                return itm.name==item.id;
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
        const stripe = await stripePromise;
        let stringCart = JSON.stringify(cart);
        const response = await fetch("https://laundr-swe-app.herokuapp.com/create-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body: stringCart
        });
          const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });
        if (result.error) {
            console.log(result.error.message);
        }
    };

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
                                <p style={{textAlign:"right"}}>${(totalPrice/100).toFixed(2)}</p>
                            </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
export default CartPage;
