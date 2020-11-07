import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css'
import {clearCart} from '../controllers/cartFunctions'
import {clearOneItem} from '../controllers/cartFunctions'
import {updateItem} from '../controllers/cartFunctions'
import {useStatelocal} from '../controllers/cartFunctions'
import '../css/cartpage.css'


//replace hard coded entries with CRUD calls
let Scuba = {
    id : "Scuba",
    quantity : 0,
    picture:"https://www.baliscuba.com/wp-content/uploads/2019/03/Scuba-Gear1.jpg",
    price:39.2
}

let Tuba = {
    id : "Tuba",
    quantity : 0,
    picture:"https://media.istockphoto.com/photos/the-man-plays-a-tuba-picture-id115611931",
    price:234.23
}

let Cuba = {
    id : "Cuba",
    quantity : 0,
    picture:"data:image/jpeg;base64,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",
    price:21.5
}

const CartPage = (props) => {  
    let [cart, setCart] = useStatelocal();
    
    let cartItems = [];
    for(let i = 0; i < cart.length;i++){
        let itemQuantity = 0;
        let itemName = "";
        let item = {
            id:"",
            quantity:0,
            picture:"https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=6&m=846183008&s=170667a&w=0&h=bCKJRIR5IBFOv80Rd8HfBVj_VirFxgWuZIDJcg9OK9M=",
            price:0
        }
        if (typeof cart[i] != 'undefined'){
            item.id=cart[i].id;
            item.quantity=cart[i].quantity;
            item.picture = cart[i].picture;
            item.price = cart[i].price;
            console.log(cart[i].picture);
        }

        cartItems.push(
            <tr class="">
                <td class="">
                    <div className="item">
                        <img src={item.picture} className="image"></img>
                        <div className="column">
                            <p style={{fontSize : "30px"}}> {item.id} </p>
                            <div className="row" style={{fontSize : "18px"}} onClick={() => clearOneItem(cart, setCart, item)}>
                                <i class="trash icon" style={{fontSize : "20px"}}></i>
                                <p class="removeCart" > Remove from Cart</p>
                            </div>
                        </div>
                        <div className="row">
                            <i class="dollar sign icon" style={{fontSize : "15px"}}></i>
                            <p style={{fontSize : "25px"}}> {item.price} </p>
                        </div>
                        <div>
                            <div className="incrementDecrement decrButton" onClick={() => updateItem(cart, setCart, item, -1)}> - </div>
                            <div className="incrementDecrement incrDecrQuantity">{item.quantity}</div>
                            <div className="incrementDecrement incrButton" onClick={() => updateItem(cart, setCart, item, 1)}> + </div>
                        </div>
                    </div>
                </td>
            </tr>
        );
    }


    return (
        <div className="bg">
            <div className="ui floating message" style={{minWidth : "700px"}}>
                <button onClick={() => updateItem(cart, setCart, Cuba, 1)}>Cuba</button>
                <button onClick={() => updateItem(cart, setCart, Tuba, 1)}>Tuba</button>
                <button onClick={() => updateItem(cart, setCart, Scuba, 1)}>Scuba</button>
                <div class="header">
                    <div className="top">
                        <p> Your Cart </p>
                        <p> Proceed to Checkout </p>
                        

                    </div>
                </div>
                    <table class="ui celled collapsing very basic table" style={{minWidth : "700px"}}>
                        <tbody>
                            {cartItems}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
export default CartPage;
