import React from 'react';
import {clearCart} from './controllers/cartFunctions'
import {clearOneItem} from './controllers/cartFunctions'
import {updateItem} from './controllers/cartFunctions'
import {useStatelocal} from './controllers/cartFunctions'

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
  let [cart, setCart] = useStatelocal();

  return (
    <div className="App">
      <header className="App-header">
        <h1> Cart Demo </h1>
        <p> The cart will be remembered by your browser, you can refresh the page or even close + reopen
            your browser and the cart will be remembered
        </p>

        <div>
          <button onClick={() => updateItem(cart, setCart, Scuba, 1)}> Add a Scuba </button>
          <button onClick={() => updateItem(cart, setCart, Scuba, -1)}> Remove a Scuba </button>
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

export default App;
