import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import {clearOneItem} from '../controllers/cartFunctions'
import {updateItem} from '../controllers/cartFunctions'
import {useStatelocal} from '../controllers/cartFunctions'
import coffeeImg from "../laundrassets/mockups/coffeeMockup.png"
import teaTreeImg from "../laundrassets/mockups/eucalyptusMockup.png"
import freshAirImg from "../laundrassets/mockups/freshair_asset.png"
import '../css/cartpage.css'


//replace hard coded entries with CRUD calls
let Coffee = {
    id : "Coffee Vanilla",
    quantity : 0,
    picture:coffeeImg,
    price:18.99
}
let TeaTree = {
    id : "Eucalyptus Tea Tree",
    quantity : 0,
    picture:teaTreeImg,
    price:18.99
}
let Air = {
    id : "Fresh Air",
    quantity : 0,
    picture:freshAirImg,
    price:18.99
}


const CartPage = (props) => {  
    let [cart, setCart] = useStatelocal();
    
    let cartItems = [];
    let totalPrice = 0;
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
            item.picture = cart[i].picture;
            item.price = cart[i].price;
            totalPrice += item.price*item.quantity;
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
                            <p style={{fontSize : "25px"}}> {item.price.toFixed(2)} </p>
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
            <div className="ui floating message" style={{marginTop : "50px", minWidth : "850", backgroundColor : "white"}}>
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
                <button class="ui button brown" style={{marginBottom : "30px"}} onClick={() => updateItem(cart, setCart, Coffee, 1)}>Coffee</button>
                <button class="ui button green" style={{marginBottom : "30px"}} onClick={() => updateItem(cart, setCart, TeaTree, 1)}>TeaTree</button>
                <button class="ui button white" style={{marginBottom : "30px"}} onClick={() => updateItem(cart, setCart, Air, 1)}>Air</button>
            </div>
        </div>
    )
}
export default CartPage;
