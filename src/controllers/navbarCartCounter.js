import React, { useState, useEffect } from 'react';
import {getCartQuantity} from './cartFunctions';
function NavbarState(cart) {

    let [cartQuantity, setCartQuantity] = useState({quantity:getCartQuantity(cart)});
  
    //useEffect that runs whenever cart is changed
    useEffect(() => {
        setCartQuantity({quantity:getCartQuantity(cart)});
        console.log(cartQuantity.quantity);
    }, [cart])
    return [cartQuantity, setCartQuantity];
  }
  export {NavbarState};