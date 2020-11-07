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
    quantity : 0
}

let Tuba = {
    id : "Tuba",
    quantity : 0
}

let Cuba = {
    id : "Cuba",
    quantity : 0
}

const CartPage = (props) => {  
    let [cart, setCart] = useStatelocal();
    console.log(cart);
    let test = 0;
    if (typeof cart[2] != 'undefined'){
        test = cart[2].quantity;
    }
    return (
        <div className="bg">
            <div className="ui floating message" style={{minWidth : "700px"}}>
                <div class="header">
                    <div className="top">
                        <p> Your Cart </p>
                        <p> Proceed to Checkout </p>
                    </div>
                </div>
                    <table class="ui celled collapsing very basic table" style={{minWidth : "700px"}}>
                        <tbody class="">
                            <tr class="">
                                <td class="">
                                    <div className="item">
                                        <img src="https://media.istockphoto.com/photos/the-man-plays-a-tuba-picture-id115611931" className="image"></img>
                                        <div className="column">
                                            <p style={{fontSize : "30px"}}> Tuba </p>
                                            <div className="row" style={{fontSize : "15px"}}>
                                                <i class="trash icon" style={{fontSize : "20px"}}></i>
                                                <p style={{color:"red"}}> Remove from Cart</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <i class="dollar sign icon" style={{fontSize : "15px"}}></i>
                                            <p style={{fontSize : "25px"}}> 3.50 </p>
                                        </div>
                                        <div>
                                            <div className="incrementDecrement decrButton" onClick={() => updateItem(cart, setCart, Scuba, -1)}> - </div>
                                            <div className="incrementDecrement incrDecrQuantity">{test}</div>
                                            <div className="incrementDecrement incrButton" onClick={() => updateItem(cart, setCart, Scuba, 1)}> + </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr class="">
                                <td class="">
                                    <p> Hello uWu </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
    )
}
export default CartPage;
