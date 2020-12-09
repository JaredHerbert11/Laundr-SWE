import React, { useState, useEffect } from 'react';

function useStatelocal() {
  //Cart state
  let [cart, setCart] = useState([]);

  //useEffect that runs whenever cart is changed
  useEffect(() => {
    //If the cart has been changed, and useEffect is called, update the local storage to match the cart
    if (cart.length > 0){
      let stringCart = JSON.stringify(cart);
      localStorage.setItem("cart", stringCart);
    }

    //If the cart is empty and local storage is not, then update cart to match local storage
    else if (localStorage.getItem("cart") !== "undefined" && localStorage.getItem("cart") !== null){
      let localStorageCart = localStorage.getItem("cart");
      let localStorageArray = JSON.parse(localStorageCart);
      setCart(localStorageArray);
    }
  }, [cart])
  return [cart, setCart];
}

//When adding or removing one from cart, this function should be called 
//amount is 1 or -1 depending on if the user wishes to add or remove one item from cart
function updateItem(cart, setCart, item, amount){
    let cartCopy = [...cart];

    let exister = cartCopy.find(it => it.id === item.id);

    //checks if the given item is in the cart, if not then call the add item function
    if (!exister && (amount > 0)){
      item.quantity = 1;
      cartCopy.push(item);
      setCart(cartCopy);
      return;
    }

    //if item is not in cart and user wishes to remove from cart, leaves function to do nothing
    if (!exister) return;

    //adjust the quantity of the item
    exister.quantity += amount;

    //Checks if item quantity has dropped to zero, if so tset to 0
    if (exister.quantity < 0){
      exister.quantity = 0;
    }

    //If the cart was emptied through removing an item, clear the cart and local storage
    if (cartCopy.length === 0){
      localStorage.clear();
      cartCopy = [];
    }

    setCart(cartCopy);

}
function getCartQuantity(cart){
  let total = 0;
  let cartCopy = [...cart];
  for(let i = 0; i< cartCopy.length;i++){
    total += cartCopy[i].quantity;
  }
  return total;
}
// function updateCartQuantity(cartQuantity, setCartQuantity){
//   setCartQuantity({})
// }

function clearOneItem(cart, setCart, item){
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter(thing => thing.id !== item.id);

    if (cartCopy.length === 0){
      localStorage.clear();
      setCart([]);
    }

    setCart(cartCopy);
}

//Clears the cart as well as the local storage
function clearCart(setCart) {
    localStorage.clear();
    setCart([]);
}


export {useStatelocal, updateItem, clearOneItem, clearCart,getCartQuantity};