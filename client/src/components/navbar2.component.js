import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import Navbar from 'react-bootstrap/Navbar'
import '../css/navbar.css'
import Grid from '@material-ui/core/Grid';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../laundrassets/logos/logo2.png'
    
    
const NavBar2 = () => {
    return(
        <nav className="navbar nabar-dark bg-dark navbar-expand-lg"> 
            <Link to="/" className="navbar-brand">ExcerTracker</Link>
            <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                <Link to="/" className="nav-link">Exercises</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Exercise Log</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">Create User</Link>
                </li>
            </ul>
            </div>
        </nav>
    )
};
export default NavBar2;