import React from 'react';
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
        <div className="App">
            <header className="App-header">
                <h1> Cart Demo </h1>
                <p> The cart will be remembered by your browser, you can refresh the page or even close + reopen
                    your browser and the cart will be remembered
                </p>

                <div>
                    <div className="incrementDecrement decrButton" onClick={() => updateItem(cart, setCart, Scuba, -1)}> - </div>
                    <div className="incrementDecrement incrDecrQuantity">{test}</div>
                    <div className="incrementDecrement incrButton" onClick={() => updateItem(cart, setCart, Scuba, 1)}> + </div>
                    <button onClick={() => clearOneItem(cart, setCart, Scuba)}> Clear all Scuba </button>
                </div>

                <div>
                    <button onClick={() => updateItem(cart, setCart, Tuba, 1)}> Add a Tuba </button>
                    <button onClick={() => updateItem(cart, setCart, Tuba, -1)}> Remove a Tuba </button>
                    <button onClick={() => clearOneItem(cart, setCart, Tuba)}> Clear all Tuba </button>
                </div>

                <div>
                    <button onClick={() => updateItem(cart, setCart, Cuba, 1)}> Add a Cuba </button>
                    <button onClick={() => updateItem(cart, setCart, Cuba, -1)}> Remove a Cuba </button>
                    <button onClick={() => clearOneItem(cart, setCart, Cuba)}> Clear all Cuba </button>
                </div>

                <div>
                    <button onClick={() => clearCart(setCart)}> Clear Cart </button>
                </div>

                <p> {JSON.stringify(cart)} </p>

            </header>
        </div>
    );
}
export default CartPage;