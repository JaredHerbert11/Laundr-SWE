import {React, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { StickyContainer, Sticky } from 'react-sticky'
import LandingPage from "./components/landingpage.component"
import Navbar from "./components/navbar.component"
import Watermelon from './components/productpage-watermelon';
import Gardenia from './components/productpage-gardenia';
import Mahogany from './components/productpage-mahogany';
import FreshAir from './components/productpage-freshair';
import Vanilla from './components/productpage-vanilla';
import Eucalyptus from './components/productpage-eucalyptus';
import ScrollToTop from './components/scroll-to-top.component';

function App() {

  return (
    
    <Router>
      <Navbar/>
      <ScrollToTop>
      <Switch>
        <Route path='/product/watermelon-cucumber' component={Watermelon} />
        <Route path='/product/white-gardenia' component={Gardenia} />
        <Route path='/product/mahogany-teakwood' component={Mahogany} />
        <Route path='/product/fresh-air' component={FreshAir} />
        <Route path='/product/coffee-vanilla' component={Vanilla} />
        <Route path='/product/eucalyptus-tea-tree' component={Eucalyptus} />
        <Route path='/' component={LandingPage} />
      </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
