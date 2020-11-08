import React from 'react';
import {clearOneItem} from '../controllers/cartFunctions'
import {updateItem} from '../controllers/cartFunctions'

const CartItem = (props) => {
    console.log(props);
    return(
        <tr>
            <td>
                <div className="item">
                    <img src={props.item.picture} alt={props.item.id + " picture"} className="image"></img>
                    <div className="column">
                        <p style={{fontSize : "30px"}}> {props.item.id} </p>
                        <div className="row" style={{fontSize : "18px"}} onClick={() => clearOneItem(props.cart, props.setCart, props.item)}>
                            <i class="trash icon" style={{fontSize : "20px"}}></i>
                            <p class="removeCart" > Remove from Cart</p>
                        </div>
                    </div>
                    <div className="row">
                        <i class="dollar sign icon" style={{fontSize : "15px"}}></i>
                        <p style={{fontSize : "25px"}}> {props.item.price.toFixed(2)} </p>
                    </div>
                    <div>
                        <div className="incrementDecrement decrButton" onClick={() => updateItem(props.cart, props.setCart, props.item, -1)}> - </div>
                        <div className="incrementDecrement incrDecrQuantity">{props.item.quantity}</div>
                        <div className="incrementDecrement incrButton" onClick={() => updateItem(props.cart, props.setCart, props.item, 1)}> + </div>
                    </div>
                </div>
            </td>
        </tr>
    );
}
export default CartItem;