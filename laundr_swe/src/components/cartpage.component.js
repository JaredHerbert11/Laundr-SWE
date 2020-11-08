import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import {updateItem} from '../controllers/cartFunctions';
import {useStatelocal} from '../controllers/cartFunctions';
import coffeeImg from "../laundrassets/mockups/coffeeMockup.png";
import teaTreeImg from "../laundrassets/mockups/eucalyptusMockup.png";
import freshAirImg from "../laundrassets/mockups/freshair_asset.png";
import watermelonImg from "../laundrassets/mockups/watermelonMockup.png";
import gardeniaImg from "../laundrassets/mockups/gardeniaMockup.png";
import teakwoodImg from "../laundrassets/mockups/mahoganymockup.png";
import CartItem from "./cartIem.component";
import '../css/cartpage.css';


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
let Watermelon = {
    id : "Watermelon Cucumber",
    quantity : 0,
    picture:watermelonImg,
    price:18.99
}
let Gardenia = {
    id : "White Gardenia",
    quantity : 0,
    picture:gardeniaImg,
    price:18.99
}
let Teakwood = {
    id : "Mahogany Teakwood",
    quantity : 0,
    picture:teakwoodImg,
    price:18.99
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
            item.price = cart[i].price;
            totalPrice += item.price*item.quantity;
        }

        cartItems.push(
            <CartItem item={item} cart={cart} setCart={setCart}></CartItem>
        );
    }


    return (
        <div className="bg">
            <div className="ui floating message" style={{minWidth : "700px"}}>
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
                <button onClick={() => updateItem(cart, setCart, Coffee, 1)}>Coffee</button>
                <button onClick={() => updateItem(cart, setCart, TeaTree, 1)}>TeaTree</button>
                <button onClick={() => updateItem(cart, setCart, Air, 1)}>Air</button>
                <button onClick={() => updateItem(cart, setCart, Watermelon, 1)}>Watermelon</button>
                <button onClick={() => updateItem(cart, setCart, Gardenia, 1)}>Gardenia</button>
                <button onClick={() => updateItem(cart, setCart, Teakwood, 1)}>Teakwood</button>
            </div>
        </div>
    )
}
export default CartPage;
