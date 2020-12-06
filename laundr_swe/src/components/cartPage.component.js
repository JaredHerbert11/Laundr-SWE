import React, { useState } from "react";
import {updateItem} from '../controllers/cartFunctions';
import {useStatelocal} from '../controllers/cartFunctions';
import CartItem from "./cartItem.component";
import '../css/cartpage.css';

import { getData } from "../data/data.js";


//replace hard coded entries with CRUD calls
let Coffee = {
    id : "Vanilla Coffee",
    quantity : 0,
}
let TeaTree = {
    id : "Eucalyptus Tea Tree",
    quantity : 0,
}
let Air = {
    id : "Fresh Air",
    quantity : 0,
}
let Watermelon = {
    id : "Watermelon Cucumber",
    quantity : 0,
}
let Gardenia = {
    id : "White Gardenia",
    quantity : 0,
}
let Teakwood = {
    id : "Mahogany Teakwood",
    quantity : 0,
}


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

    

    return (
        <div className="bg">
            <div className="cartBox">
                <div class="header">
                    <div className="top">
                        <span> Your Cart </span>
                        <span> Proceed to Checkout </span>
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