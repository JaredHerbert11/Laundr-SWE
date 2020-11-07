import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import { StickyContainer, Sticky } from 'react-sticky'
import LandingPage from "./components/landingpage.component"
import Navbar from "./components/navbar.component"


/*<Router>
<Route path='/' component={LandingPage} />
</Router>*/
//
function App() {
  return (
    
    <Router>
      <Navbar/>
      <Route path='/' component={LandingPage} />
    </Router>
  );
}

export default App;
