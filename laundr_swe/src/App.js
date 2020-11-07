import React from 'react';
import {clearCart} from './controllers/cartFunctions'
import {clearOneItem} from './controllers/cartFunctions'
import {updateItem} from './controllers/cartFunctions'
import {useStatelocal} from './controllers/cartFunctions'
import CartPage from './components/cartpage.component'

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
    <CartPage
    />
  );
}

export default App;
