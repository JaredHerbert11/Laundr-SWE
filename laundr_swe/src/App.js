import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import LandingPage from "./components/landingpage.component"
import Navbar from "./components/navbar.component"


/*<Router>
<Route path='/' component={LandingPage} />
</Router>*/
//<Navbar style={{zIndex:2001}}/>
function App() {
  return (
    <div className="App">
    <Router>
      <Route path='/' component={LandingPage} />
    </Router>
    </div>
  );
}

export default App;
