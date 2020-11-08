import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import CartPage from "./components/cartpage.component"

function App() {
  return (
    <Router>
      <Route path='/' component={CartPage} />
    </Router>
  );
}
export default App;