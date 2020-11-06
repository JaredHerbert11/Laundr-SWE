import React, {useState, useEffect} from 'react';

import './App.css';

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

function App() {
  //Cart state
  let [cart, setCart] = useState([]);

  //UseEffect that runs whenever cart is changed
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

  //When adding or removing one from cart, this function should be called 
  //amount is 1 or -1 depending on if the user wishes to add or remove one item from cart
  function updateItem(item, amount){

    let cartCopy = [...cart];

    let exister = cartCopy.find(it => it.id === item.id);

    //checks if the given item is in the cart, if not then call the add item function
    if (!exister && (amount > 0)){
      addItem(item);
    }

    //if item is not in cart and user wishes to remove from cart, leaves function to do nothing
    if (!exister) return;

    //adjust the quantity of the item
    exister.quantity += amount;

    //Checks if item quantity has dropped to zero, if so then remove from cart
    if (exister.quantity <= 0){
      cartCopy = cartCopy.filter(it => it.id !== item.id);
    }

    //If the cart was emptied through removing an item, clear the cart and local storage
    if (cartCopy.length === 0){
      localStorage.clear();
      cartCopy = [];
    }

    setCart(cartCopy);

  }

  function clearOneItem(item){
    let cartCopy = [...cart];

    cartCopy = cartCopy.filter(thing => thing.id !== item.id);

    if (cartCopy.length === 0){
      localStorage.clear();
      setCart([]);
    }

    setCart(cartCopy);
  }

  //If item isn't in cart, push it into the cart
  function addItem(item){
    let copyCart = [...cart];

    item.quantity = 1;
    copyCart.push(item);
    setCart(copyCart);
  }

  //Clears the cart as well as the local storage
  function clearCart() {
    localStorage.clear();
    setCart([]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1> Cart Demo </h1>
        <p> The cart will be remembered by your browser, you can refresh the page or even close + reopen
            your browser and the cart will be remembered
        </p>

        <div>
          <button onClick={() => updateItem(Scuba, 1)}> Add a Scuba </button>
          <button onClick={() => updateItem(Scuba, -1)}> Remove a Scuba </button>
          <button onClick={() => clearOneItem(Scuba)}> Clear all Scuba </button>
          </div>

        <div>
          <button onClick={() => updateItem(Tuba, 1)}> Add a Tuba </button>
          <button onClick={() => updateItem(Tuba, -1)}> Remove a Tuba </button>
          <button onClick={() => clearOneItem(Tuba)}> Clear all Tuba </button>
        </div>

        <div>
          <button onClick={() => updateItem(Cuba, 1)}> Add a Cuba </button>
          <button onClick={() => updateItem(Cuba, -1)}> Remove a Cuba </button>
          <button onClick={() => clearOneItem(Cuba)}> Clear all Cuba </button>
        </div>

        <div>
          <button onClick={clearCart}> Clear Cart </button>
        </div>

      <p> {JSON.stringify(cart)} </p>

      </header>
    </div>
  );
}

export default App;
